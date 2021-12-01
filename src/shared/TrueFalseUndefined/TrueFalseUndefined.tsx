import {Theme, ToggleButton, ToggleButtonGroup} from '@mui/material'
import React, {forwardRef, useMemo} from 'react'
import {useI18n} from '../../core/i18n'
import {SxProps} from '@mui/system'

interface Props {
  className?: string
  gutter?: boolean,
  value?: boolean
  onChange: (_?: boolean) => void
}

const buttonStyle: SxProps<Theme> = {
  textTransform: 'none',
  // paddingTop: .5,
  // paddingBottom: .5,
  paddingRight: 1.5,
  paddingLeft: 1.5,
}

export const TrueFalseUndefined = forwardRef(({
  gutter,
  value,
  onChange,
  ...props
}: Props, ref: any) => {
  const {m} = useI18n()
  const parsedValue = useMemo((() => {
    if ([true, 'true'].includes(value as any)) return 'true'
    if ([false, 'false'].includes(value as any)) return 'false'
    return ''
  }), [value])

  return (
    <ToggleButtonGroup
      {...props}
      exclusive
      sx={gutter ? {
        mt: 1,
        mb: .5,
        display: 'block',
      } : {}}
      size="small"
      color="primary"
      ref={ref}
      style={{flexDirection: 'row'}}
      value={parsedValue}
      onChange={(e, value: string | null) => {
        if (value !== null) {
          const valueAsBoolean = {true: true, false: false}[value]
          onChange(valueAsBoolean)
        }
      }}
    >
      <ToggleButton sx={buttonStyle} value="true">{m.yes}</ToggleButton>
      <ToggleButton sx={buttonStyle} value="false">{m.no}</ToggleButton>
      <ToggleButton sx={buttonStyle} value="">{m.indifferent}</ToggleButton>
    </ToggleButtonGroup>
  )
})