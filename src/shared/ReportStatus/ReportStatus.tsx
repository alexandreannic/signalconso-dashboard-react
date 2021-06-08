import {makeStyles, Theme} from '@material-ui/core'
import {ReportStatus} from '@signalconso/signalconso-api-sdk-js/build'
import {capitalize, classes} from '../../core/helper/utils'
import {utilsStyles} from '../../core/theme'
import {useMemo} from 'react'

const useStyles = makeStyles((t: Theme) => ({
  root: {
    whiteSpace: 'nowrap',
    borderRadius: 40,
    paddingTop: t.spacing(1 / 2),
    paddingBottom: t.spacing(1 / 2),
    paddingRight: t.spacing(2),
    paddingLeft: t.spacing(2),
    fontWeight: 'bold',
    border: `1px solid ${t.palette.divider}`,
    letterSpacing: '1px',
    display: 'inline-flex',
    minHeight: 24,
    alignItems: 'center',
  },
  dense: {
    fontWeight: '500' as any,
    fontSize: utilsStyles(t).fontSize.small,
    paddingRight: t.spacing(1),
    paddingLeft: t.spacing(1),
  },
  fullWidth: {
    width: '100%',
  }
}))

interface ReportStatusChipProps {
  status: ReportStatus
  dense?: boolean
  className?: string
  fullWidth?: boolean
}

const reportStatusColor = {
  [ReportStatus.NA]: '#fff',
  [ReportStatus.EmployeeConsumer]: '#fff',
  [ReportStatus.InProgress]: '#FFE49E',
  [ReportStatus.Unread]: '#c9d3df',
  [ReportStatus.UnreadForPro]: '#f7d5d2',
  [ReportStatus.Transmitted]: '#FFE49E',
  [ReportStatus.ToReviewedByPro]: '#FFE49E',
  [ReportStatus.Accepted]: '#D6F0FF',
  [ReportStatus.Rejected]: '#c9d3df',
  [ReportStatus.ClosedForPro]: '#daf5e7',
  [ReportStatus.Ignored]: '#c9d3df',
  [ReportStatus.NotConcerned]: '#c9d3df',
}

export const ReportStatusChip = ({status, fullWidth, dense, className}: ReportStatusChipProps) => {
  const css = useStyles()
  const statusLabel = useMemo(() => capitalize(status.replace('Signalement ', ''), false), [status])
  return (
    <div
      aria-label="Statut du signalement"
      className={classes(className, css.root, dense && css.dense, fullWidth && css.fullWidth)}
      style={{background: reportStatusColor[status]}}>
      {statusLabel}
    </div>

  )
}
