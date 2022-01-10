import * as React from 'react'
import {ReactNode} from 'react'
import {Theme} from '@mui/material'
import createStyles from '@mui/styles/createStyles'
import makeStyles from '@mui/styles/makeStyles'
import classNames from 'classnames'
import {LayoutProvider, useLayoutContext} from './LayoutContext'
import {Header} from './Header/Header'
import {Roles} from '@signal-conso/signalconso-api-sdk-js'

export const sidebarWith = 220

const useStyles = makeStyles((t: Theme) =>
  createStyles({
    root: {
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
    },
    rootDesktop: {
      marginLeft: sidebarWith,
    },
  }),
)

export interface LayoutConnectedUser {
  firstName: string
  lastName: string
  email: string
  role: Roles
  logout: () => void
}

export interface LayoutProps {
  title?: string
  children?: ReactNode
  mobileBreakpoint?: number
  connectedUser?: LayoutConnectedUser
}

export const Layout = ({title, mobileBreakpoint, children, connectedUser}: LayoutProps) => {
  return (
    <LayoutProvider title={title} mobileBreakpoint={mobileBreakpoint}>
      <LayoutUsingContext connectedUser={connectedUser}>{children}</LayoutUsingContext>
    </LayoutProvider>
  )
}

const LayoutUsingContext = ({children, connectedUser}: any) => {
  const classes = useStyles()
  return (
    <>
      <Header connectedUser={connectedUser} />
      <main className={classNames(classes.root)}>{children}</main>
    </>
  )
}
