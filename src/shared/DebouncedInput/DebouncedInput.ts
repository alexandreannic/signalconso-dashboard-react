import {useCallback, useEffect, useState} from 'react'
import lodashDebounce from 'lodash.debounce'

interface DebouncedInputProps<V> {
  debounce?: number
  value?: V
  onChange: (e: V) => void
  children: (value: V | undefined, onChange: (e: V) => void) => any
}

// FIXME(Alex) Trigger only one onChange but 2 API calls.
export const DebouncedInput = <V>({debounce = 400, value, onChange, children}: DebouncedInputProps<V>) => {
  const [innerValue, setInnerValue] = useState<V | undefined>(value)
  const debounced = useCallback(lodashDebounce(onChange, debounce), [onChange])

  useEffect(() => {
    if (!innerValue || (innerValue as any) === '') {
      // We cannot setInnerValue on every [value] change because if would override the innerValue
      // Also, cannot setInnerValue on mount because when reading from querystring, it is initially undefined
      // before to be set.
      setInnerValue(value)
    }
  }, [value])

  const innerOnChange = (newValue: V) => {
    setInnerValue(newValue)
    debounced(newValue)
  }
  return children(innerValue, innerOnChange)
}
