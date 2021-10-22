import * as React from 'react'
import {ReactNode} from 'react'
import { Theme } from '@mui/material';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import classNames from 'classnames'

const useStyles = makeStyles((t: Theme) =>
  createStyles({
    root: {
      paddingTop: t.spacing(1),
      paddingBottom: t.spacing(1),
      borderTop: '1px solid ' + t.palette.divider,
      borderBottom: '1px solid ' + t.palette.divider,
    },
  }),
)

export interface SidebarHeaderProps {
  className?: string
  children?: ReactNode
}

export const SidebarHeader = ({className, children}: SidebarHeaderProps) => {
  const classes = useStyles()
  return <header className={classNames(classes.root, className)}>{children}</header>
}
