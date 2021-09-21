import {Icon, makeStyles, Theme} from '@material-ui/core'
import {ReportSearchResult} from '../../core/api'
import {Paginate} from '@alexandreannic/react-hooks-lib/lib'
import {ReportStatusChip} from '../../shared/ReportStatus/ReportStatus'
import * as React from 'react'
import {useI18n} from '../../core/i18n'
import {IconBtn} from 'mui-extension/lib'
import {siteMap} from '../../core/siteMap'
import {NavLink} from 'react-router-dom'
import {Txt} from 'mui-extension/lib/Txt/Txt'
import {getDetailContent} from '../Reports/Reports'
import {useCssUtils} from '../../core/helper/useCssUtils'

interface Props {
  reports: Paginate<ReportSearchResult>
}

const useStyles = makeStyles((t: Theme) => ({
  report: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: t.spacing(2),
    margin: t.spacing(2, 2, 2, 2),
    '&:not(:last-of-type)': {
      borderBottom: `1px solid ${t.palette.divider}`,
    },
  },
  reportTag: {
    marginBottom: t.spacing(1),
    display: 'flex',
    alignItems: 'center',
    color: t.palette.text.hint,
  },
  body: {
    flex: 1,
  },
  title: {
  }
}))

export const ReportsShortList = ({reports}: Props) => {
  const css = useStyles()
  const cssUtils = useCssUtils()
  const {formatDate} = useI18n()
  return (
    <div>
      {reports.data.map(_ => (
        <div className={css.report}>
          <div className={css.body}>
            <div className={css.title}>
              <Txt size="big" bold truncate style={{flex: 1, width: 0}}>
                {_.report.category}
              </Txt>
              <div className={css.reportTag}>
                <ReportStatusChip status={_.report.status} dense className={cssUtils.marginRight}/>
                <Txt color="hint">{formatDate(_.report.creationDate)}</Txt>
                <Icon fontSize="inherit" className={cssUtils.marginLeft}>label</Icon>&nbsp;
                <Txt color="disabled" truncate style={{width: 0, flex: 1}}>
                  {_.report.tags.join(', ')}
                </Txt>
              </div>
            </div>
            {(() => {
              const details = getDetailContent(_.report.details)
              return (
                <Txt size="small" block color="hint">
                  <div>{details?.firstLine}</div>
                  {details?.secondLine}
                </Txt>
              )
            })()}
          </div>
          <NavLink to={siteMap.report(_.report.id)}>
            <IconBtn>
              <Icon>chevron_right</Icon>
            </IconBtn>
          </NavLink>
        </div>
      ))}
    </div>
  )
}
