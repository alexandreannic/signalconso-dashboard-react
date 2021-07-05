import {PanelBody} from '../../shared/Panel'
import React, {useEffect, useMemo} from 'react'
import {useI18n} from '../../core/i18n'
import {EventActionValues, FileOrigin, Id, ReportEvent, ReportResponse, ReportResponseTypes, UploadedFile} from '../../core/api'
import {classes, fnSwitch} from '../../core/helper/utils'
import {fromNullable} from 'fp-ts/lib/Option'
import {Icon, makeStyles, Theme} from '@material-ui/core'
import {useUtilsCss} from '../../core/utils/useUtilsCss'
import {utilsStyles} from '../../core/theme'
import {ReportFiles} from './File/ReportFiles'
import {Txt} from 'mui-extension/lib/Txt/Txt'

interface Props {
  events: ReportEvent[]
  reportId: Id
  files?: UploadedFile[]
}

const useStyles = makeStyles((t: Theme) => ({
  responseType: {
    fontSize: utilsStyles(t).fontSize.big,
    display: 'flex',
    alignItems: 'center',
    marginBottom: t.spacing(1),
  }
}))

export const ReportMessages = ({events, reportId, files}: Props) => {
  const {m} = useI18n()
  const response = useMemo(() => events.find(_ => _.data.action === EventActionValues.ReportProResponse), [events])
  const cssUtils = useUtilsCss()
  const css = useStyles()

  useEffect(() => {
  }, [])

  return (
    <PanelBody>
      {fromNullable(response?.data.details as ReportResponse).map((details) => (
        <div>
          {fnSwitch(details.responseType, {
            [ReportResponseTypes.Accepted]: _ => (
              <div className={classes(css.responseType, cssUtils.colorSuccess)}>
                <Icon className={classes(cssUtils.marginRight, cssUtils.inlineIcon)}>check_circle</Icon>
                {m.reportResponse[_]}
              </div>
            ),
            [ReportResponseTypes.NotConcerned]: _ => (
              <div className={classes(css.responseType, cssUtils.colorInfo)}>
                <Icon className={classes(cssUtils.marginRight, cssUtils.inlineIcon)}>hide_source</Icon>
                {m.reportResponse[_]}
              </div>
            ),
            [ReportResponseTypes.Rejected]: _ => (
              <div className={classes(css.responseType, cssUtils.colorError)}>
                <Icon className={classes(cssUtils.marginRight, cssUtils.inlineIcon)}>cancel</Icon>
                {m.reportResponse[_]}
              </div>
            ),
          })}
          <div className={cssUtils.colorTxtSecondary}>
            {(response?.data.details as ReportResponse).consumerDetails}
          </div>

          {details.dgccrfDetails && details.dgccrfDetails !== '' && (
            <>
              <Txt bold size="big" gutterBottom className={cssUtils.marginTop}>{m.reportDgccrfDetails}</Txt>
              <div className={cssUtils.colorTxtSecondary}>{details.dgccrfDetails}</div>
            </>
          )}
          {fromNullable(files?.filter(_ => _.origin === FileOrigin.Consumer)).filter(_ => _.length > 0).map(f =>
            <ReportFiles hideAddBtn={true} onNewFile={console.log} reportId={reportId} files={f} fileOrigin={FileOrigin.Professional}/>
          ).toUndefined()}
        </div>
      )).getOrElse(
        <div>{m.noAnswerFromPro}</div>)
      }
    </PanelBody>
  )
}