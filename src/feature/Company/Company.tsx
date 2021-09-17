import * as React from 'react'
import {useEffect} from 'react'
import {Page, PageTitle} from 'shared/Layout'
import {useCompaniesContext} from '../../core/context/CompaniesContext'
import {useParams} from 'react-router'
import {EventActionValues, Id} from '../../core/api'
import {Panel, PanelBody, PanelHead} from '../../shared/Panel'
import {HorizontalBarChart} from '../../shared/HorizontalBarChart/HorizontalBarChart'
import {reportStatusColor} from '../../shared/ReportStatus/ReportStatus'
import {useI18n} from '../../core/i18n'
import {Enum} from '@alexandreannic/ts-utils/lib/common/enum/Enum'
import {Grid, Icon, makeStyles, Theme} from '@material-ui/core'
import {Txt} from 'mui-extension/lib/Txt/Txt'
import {CompanyReportsCountPanel} from './CompanyReportsCountPanel'
import {useCompaniesStatsContext} from '../../core/context/CompanyStatsContext'
import {useMemoFn} from '../../shared/hooks/UseMemoFn'
import {useEventContext} from '../../core/context/EventContext'
import {useEffectFn} from '../../shared/hooks/UseEffectFn'
import {useFetcher} from '@alexandreannic/react-hooks-lib/lib'
import {useLogin} from '../../core/context/LoginContext'
import {Widget} from '../../shared/Widget/Widget'
import {siteMap} from '../../core/siteMap'
import {useToast} from '../../core/toast'
import {WidgetValue} from '../../shared/Widget/WidgetValue'
import {useCssUtils} from '../../core/helper/useCssUtils'
import {classes} from '../../core/helper/utils'
import {WidgetBody} from '../../shared/Widget/WidgetBody'
import {fromNullable} from 'fp-ts/es6/Option'
import {WidgetLoading} from '../../shared/Widget/WidgetLoading'


const useStyles = makeStyles((t: Theme) => ({
  reviews: {
    display: 'flex',
    justifyContent: 'space-around',
    textAlign: 'center',
    width: '100%',
  },
  reviews_type: {
    display: 'flex',
    alignItems: 'center',
  },
  reviews_type_value: {
    // margin: t.spacing(2),
  },
  reviews_type_icon: {
    margin: t.spacing(0, 1, 0, 1),
    fontSize: 34,
  },
}))

export const CompanyComponent = () => {
  const {id} = useParams<{id: Id}>()
  const {m, formatDate, formatLargeNumber} = useI18n()
  const _company = useCompaniesContext()
  const _companyStats = useCompaniesStatsContext()
  const _event = useEventContext()
  const _accesses = useFetcher((siret: string) => apiSdk.secured.companyAccess.fetch(siret))
  const css = useStyles()
  const cssUtils = useCssUtils()
  const company = _company.byId.entity
  const apiSdk = useLogin().apiSdk
  const {toastError} = useToast()

  useEffect(() => {
    _company.byId.fetch({}, id)
    _companyStats.reportsCountEvolution.fetch({}, id, 'month')
    _companyStats.tags.fetch({}, id)
    _companyStats.hosts.fetch({}, id)
    _companyStats.status.fetch({}, id)
    _companyStats.responseReviews.fetch({}, id)
  }, [])

  useEffectFn(_company.byId.error, toastError)
  useEffectFn(_companyStats.reportsCountEvolution.error, toastError)
  useEffectFn(_companyStats.tags.error, toastError)
  useEffectFn(_companyStats.hosts.error, toastError)
  useEffectFn(_companyStats.status.error, toastError)
  useEffectFn(_companyStats.responseReviews.error, toastError)

  useEffectFn(_company.byId.entity, _ => {
    _event.companyEvents.fetch({}, _.siret)
    _accesses.fetch({}, _.siret)
  })

  const postActivationDocEvents = useMemoFn(_event.companyEvents.entity, events => events
    .map(_ => _.data)
    .filter(_ => _.action === EventActionValues.PostAccountActivationDoc),
  )

  const statusDistribution = useMemoFn(_companyStats.status.entity, _ => Enum.entries(_).map(([status, count]) =>
    ({label: m.reportStatusShort[status], value: count, color: reportStatusColor[status] ?? undefined}),
  ))

  const tagsDistribution = useMemoFn(_companyStats.tags.entity, _ => Object.entries(_).map(([label, count]) => ({label, value: count})))

  return (
    <Page loading={_company.byId.loading}>
      <PageTitle>
        <div>
          {company?.name}
          <Txt block size="big" color="hint">{company?.siret}</Txt>
        </div>
      </PageTitle>

      {(_company.byId.entity && company) && (
        <>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Widget title={m.reports} to={siteMap.reports({siretSirenList: [company.siret]})}>
                <WidgetValue>{formatLargeNumber(company.count)}</WidgetValue>
              </Widget>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Widget title={m.activationDocReturned} loading={_event.companyEvents.loading}>
                {fromNullable(postActivationDocEvents)
                  .map(_ => <WidgetValue>{_.length}</WidgetValue>)
                  .getOrElse(<WidgetLoading/>)
                }
              </Widget>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Widget title={m.accountsActivated} to={siteMap.companyAccesses(company.siret)} loading={_accesses.loading}>
                {fromNullable(_accesses.entity)
                  .map(_ => <WidgetValue>{_.length}</WidgetValue>)
                  .getOrElse(<WidgetLoading/>)
                }
              </Widget>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Widget title={m.reviews}>
                {fromNullable(_companyStats.responseReviews.entity).map(_ => (
                  <WidgetBody>
                    <div className={css.reviews}>
                      <div className={css.reviews_type}>
                        <div className={css.reviews_type_value}>
                          {_companyStats.responseReviews.entity?.positive}
                        </div>
                        <Icon className={classes(css.reviews_type_icon, cssUtils.colorSuccess)}>thumb_down</Icon>
                      </div>
                      <div className={css.reviews_type}>
                        <div className={css.reviews_type_value}>
                          <Icon className={classes(css.reviews_type_icon, cssUtils.colorError)}>thumb_up</Icon>
                        </div>
                        {_companyStats.responseReviews.entity?.negative}
                      </div>
                    </div>
                  </WidgetBody>
                )).getOrElse(<WidgetLoading/>)}
              </Widget>
            </Grid>
          </Grid>
          <CompanyReportsCountPanel
            period={_companyStats.reportsCountEvolutionPeriod}
            data={_companyStats.reportsCountEvolution.entity}
            onChange={period => _companyStats.reportsCountEvolution.fetch({}, id, period)}
          />
          {/*<Grid container spacing={2}>*/}
          {/*  <Grid item sm={12} md={7}>*/}
          <Panel>
            <PanelHead icon="account_tree">{m.status}</PanelHead>
            <PanelBody>
              <HorizontalBarChart data={statusDistribution} grid/>
            </PanelBody>
          </Panel>
          <Panel>
            <PanelHead icon="style">{m.tags}</PanelHead>
            <PanelBody>
              <HorizontalBarChart data={tagsDistribution} grid/>
            </PanelBody>
          </Panel>
          {/*</Grid>*/}
          {/*<Grid item xs={12} sm={5}>*/}
          {/*  <Panel>*/}
          {/*    <PanelHead icon="question_answer">{m.responses}</PanelHead>*/}
          {/*    <PanelBody>*/}
          {/*    </PanelBody>*/}
          {/*  </Panel>*/}
          {/*</Grid>*/}
          {/*</Grid>*/}

          {/*<Panel>*/}
          {/*  <PanelBody>{stats.hosts?.map(host => (*/}
          {/*    <>*/}
          {/*      <Txt key={host}>{host}</Txt>*/}
          {/*      &nbsp;*/}
          {/*    </>*/}
          {/*  ))}</PanelBody>*/}
          {/*</Panel>*/}
        </>
      )}
    </Page>
  )
}