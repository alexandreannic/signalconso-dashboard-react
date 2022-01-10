import makeStyles from '@mui/styles/makeStyles'
import {Icon, Menu, MenuItem, Slide, Theme} from '@mui/material'
import logoGouvMobile from './gouv-mobile.svg'
import logoSignalConso from './signalconso.svg'
import logoDgccrf from './logo-dgccrf.png'
import {useI18n} from '../../i18n'
import {Btn, IconBtn} from 'mui-extension/lib'
import {config} from '../../../conf/config'
import {styleUtils} from 'core/theme'
import {headerHeight} from '../index'
import React from 'react'
import {ScMenuBtn} from '../Menu/ScMenuBtn'
import {useLayoutContext} from '../LayoutContext'
import {LayoutConnectedUser} from '../Layout'

const useStyles = makeStyles((t: Theme) => ({
  root: {
    minHeight: headerHeight,
    padding: t.spacing(0.5, 2),
    display: 'flex',
    alignItems: 'center',
    background: t.palette.background.paper,
    borderBottom: '1px solid ' + t.palette.divider,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
  logoGouvMobile: {
    height: 40,
    marginRight: t.spacing(2),
  },
  logoSignalConsoMobile: {
    height: 40,
    marginRight: t.spacing(1),
  },
  menu: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
  },
}))

interface Props {
  connectedUser?: LayoutConnectedUser
}

export const Header = ({connectedUser}: Props) => {
  const css = useStyles()
  const {m} = useI18n()
  const {isMobileWidth} = useLayoutContext()

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Slide direction="down" in={true} mountOnEnter unmountOnExit>
      <header className={css.root}>
        <div className={css.logo}>
          <img src={logoGouvMobile} alt={m.altLogoGouv} className={css.logoGouvMobile} />
          {!isMobileWidth && <img src={logoDgccrf} alt={m.altLogoDGCCRF} className={css.logoGouvMobile} />}
          <a href={config.appBaseUrl}>
            <img src={logoSignalConso} alt={m.altLogoSignalConso} className={css.logoSignalConsoMobile} />
          </a>
        </div>
        <div className={css.menu}>
          {isMobileWidth ? (
            <>
              <IconBtn aria-haspopup="true" onClick={handleClick}>
                <Icon>menu</Icon>
              </IconBtn>
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                <a href={config.appBaseUrl}>
                  <MenuItem>{m.home}</MenuItem>
                </a>
                <a href={config.appBaseUrl + '/comment-ça-marche'}>
                  <MenuItem>{m.howItWorks}</MenuItem>
                </a>
                <a href={config.appBaseUrl + '/centre-aide/consommateur'}>
                  <MenuItem>{m.helpCenter}</MenuItem>
                </a>
              </Menu>
            </>
          ) : (
            <nav>
              <HeaderItem href={config.appBaseUrl}>{m.home}</HeaderItem>
              <HeaderItem href={config.appBaseUrl + '/comment-ça-marche'}>{m.howItWorks}</HeaderItem>
              <HeaderItem href={config.appBaseUrl + '/centre-aide/consommateur'}>{m.helpCenter}</HeaderItem>
            </nav>
          )}
          <ScMenuBtn connectedUser={connectedUser} />
        </div>
      </header>
    </Slide>
  )
}

const useHeaderItemStyles = makeStyles((t: Theme) => ({
  root: {
    textTransform: 'initial',
    fontSize: styleUtils(t).fontSize.normal,
    padding: t.spacing(0, 2),
  },
}))

const HeaderItem = ({children, href}: {children: any; href: string}) => {
  const css = useHeaderItemStyles()
  return (
    <Btn color="primary" href={href} className={css.root}>
      {children}
    </Btn>
  )
}
