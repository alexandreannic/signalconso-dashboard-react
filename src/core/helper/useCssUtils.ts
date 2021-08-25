import {Theme} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {styleUtils} from '../theme'

export const useCssUtils = makeStyles((t: Theme) => {
  return {
    vaMiddle: {
      verticalAlign: 'middle',
    },
    hidden: {
      visibility: 'hidden',
    },
    flex: {
      display: 'flex',
    },
    txtTitle: {
      fontSize: t.typography.fontSize * 1.25,
    },
    txtBig: {
      fontSize: t.typography.fontSize * 1.125,
    },
    txtSmall: {
      fontSize: t.typography.fontSize * 0.875,
    },
    txtBold: {
      fontWeight: t.typography.fontWeightBold ?? 'bold',
    },
    colorTxtSecondary: {
      color: t.palette.text.secondary + ' !important',
    },
    colorError: {
      color: t.palette.error.main,
    },
    colorSuccess: {
      color: styleUtils(t).color.success,
    },
    colorWarning: {
      color: styleUtils(t).color.warning,
    },
    colorInfo: {
      color: styleUtils(t).color.info,
    },
    colorTxtHint: {
      color: t.palette.text.hint + ' !important',
    },
    colorDisabled: {
      color: t.palette.text.disabled + ' !important',
    },
    colorPrimary: {
      color: t.palette.primary.main + ' !important',
    },
    truncate: styleUtils(t).truncate,
    divider: {
      marginTop: t.spacing(2),
      marginBottom: t.spacing(2),
    },
    inlineIcon: {
      display: 'inline !important',
      fontSize: 'inherit',
      lineHeight: 1,
      verticalAlign: 'text-top',
    },
    txtCenter: {
      textAlign: 'center',
    },
    txtRight: {
      textAlign: 'right',
    },
    marginTop2: {
      marginTop: t.spacing(2),
    },
    marginTop: {
      marginTop: t.spacing(1),
    },
    marginBottom: {
      marginBottom: t.spacing(1),
    },
    marginBottom2: {
      marginBottom: t.spacing(2),
    },
    marginBottom3: {
      marginBottom: t.spacing(3),
    },
    marginRight: {
      marginRight: t.spacing(1),
    },
    marginLeft: {
      marginLeft: t.spacing(1),
    },
    paddingTop: {
      paddingTop: t.spacing(1),
    },
    paddingBottom: {
      paddingBottom: t.spacing(1),
    },
    paddingRight: {
      paddingRight: t.spacing(1),
    },
    paddingLeft: {
      paddingLeft: t.spacing(1),
    },
    marginLeftAuto: {
      marginLeft: 'auto',
    },
    fullWidth: {
      width: '100%',
    },
    nowrap: {
      whiteSpace: 'nowrap',
    },
  }
})
