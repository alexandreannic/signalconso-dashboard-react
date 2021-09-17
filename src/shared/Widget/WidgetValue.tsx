import {makeStyles, Theme} from '@material-ui/core'
import {ReactNode} from 'react'
import {WidgetBody} from './WidgetBody'

const useStyles = makeStyles((t: Theme) => ({
  root: {
    fontSize: 36,
    lineHeight: 1,
  },
}))

interface Props {
  children: ReactNode
}

export const WidgetValue = ({children}: Props) => {
  const css = useStyles()
  return (
    <WidgetBody>
      <div className={css.root}>{children}</div>
    </WidgetBody>
  )
}
