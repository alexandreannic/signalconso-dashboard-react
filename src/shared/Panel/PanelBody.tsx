import * as React from 'react'
import {ReactNode} from 'react'
import {CardContent as MuiCardContent, makeStyles, Theme} from '@material-ui/core'
import {classes} from '../../core/helper/utils'
import {styleUtils} from '../../core/theme'

const useStyles = makeStyles((t: Theme) => ({
  root: {
    borderRadius: 2,
    padding: styleUtils(t).spacing(2, 2, 2, 2),
    margin: styleUtils(t).spacing(0, 0, 0, 0),
    // padding: '0 !important',
    // margin: t.spacing(1),
    // margin: padding(),
  },
}))

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  className?: any
  children: ReactNode
}

export const PanelBody = ({className, children, ...other}: Props) => {
  const css = useStyles()
  return (
    <MuiCardContent {...other} className={classes(css.root, className)}>
      {children}
    </MuiCardContent>
  )
}
