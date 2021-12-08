import {useEffect, useMemo, useState} from 'react'
import {useFetcher} from '@alexandreannic/react-hooks-lib'
import {useLogin} from '../../core/context/LoginContext'
import {useI18n} from '../../core/i18n'
import {endOfMonth, startOfMonth, subMonths, subYears} from 'date-fns'
import {Divider, MenuItem, Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material'
import {useConstantContext} from '../../core/context/ConstantContext'
import {useCssUtils} from '../../core/helper/useCssUtils'
import {classes} from '../../core/helper/utils'
import {Panel, PanelHead} from '../../shared/Panel'
import {ScSelect} from '../../shared/Select/Select'

export const StatsReportsByRegion = () => {
  const {apiSdk: api} = useLogin()
  const {m, formatLargeNumber} = useI18n()
  const currentMonth = useMemo(() => new Date().getMonth(), [])
  const currentYear = useMemo(() => new Date().getFullYear(), [])
  const cssUtils = useCssUtils()
  const _constant = useConstantContext()

  const [selectedMonth, setSelectedMonth] = useState<number>(currentMonth)

  const _countByDepCurrentMonth = useFetcher(api.secured.reports.getCountByDepartments)
  const _countByDepLastMonth = useFetcher(api.secured.reports.getCountByDepartments)

  const fetch = () => {
    const selectedDate = new Date(new Date().setMonth(selectedMonth))
    const selectedDateHandlingYear = selectedMonth > currentMonth + 1 ? subYears(selectedDate, 1) : selectedDate
    _countByDepCurrentMonth.fetch({clean: false}, {
      start: startOfMonth(selectedDateHandlingYear),
      end: endOfMonth(selectedDateHandlingYear),
    })
    _countByDepLastMonth.fetch({clean: false}, {
      start: startOfMonth(subMonths(selectedDateHandlingYear, 1)),
      end: endOfMonth(subMonths(selectedDateHandlingYear, 1)),
    })
  }

  useEffect(() => {
    _constant.regions.fetch({force: false})
  }, [])

  useEffect(() => {
    fetch()
  }, [selectedMonth])

  const positionByDep: {[key: string]: number} | undefined = useMemo(() => {
    if (_countByDepLastMonth.entity) {
      return _countByDepLastMonth.entity.reduce((acc, current, i) => ({...acc, [current[0]]: i}), {})
    }
  }, [_countByDepLastMonth.entity])

  return (
    <Panel>
      <PanelHead className={cssUtils.marginBottom2} action={
        <ScSelect value={selectedMonth} onChange={x => setSelectedMonth(x.target.value as number)} style={{margin: 0}}>
          {Object.entries(m.month_).map(([index, label]) =>
            <MenuItem key={index} value={+index - 1}>{label} {+index - 1 > currentMonth + 1 ? currentYear - 1 : currentYear}</MenuItem>,
          )}
        </ScSelect>
      }>
        {m.reportsDistribution}
      </PanelHead>
      <Divider/>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>{m.rank}</TableCell>
            <TableCell>{m.department}</TableCell>
            <TableCell>{m.reportsCount}</TableCell>
            <TableCell>{m.positionComparedToLastMonth}</TableCell>
          </TableRow>
        </TableHead>
        {_countByDepCurrentMonth.entity && positionByDep && _constant.departmentsIndex && (
          <TableBody>
            {_countByDepCurrentMonth.entity.slice(0, 20).map((_, i) => (
              <TableRow>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{_constant.departmentsIndex![_[0]]} <span className={cssUtils.colorTxtHint}>({_[0]})</span></TableCell>
                <TableCell>{formatLargeNumber(_[1])}</TableCell>
                <TableCell>{(() => {
                  const oldPosition = positionByDep[_[0]]
                  if (oldPosition === i) {
                    return <span className={classes(cssUtils.txtBold, cssUtils.colorTxtHint)}>=</span>
                  } else if (oldPosition > i) {
                    return <span className={classes(cssUtils.txtBold, cssUtils.colorError)}>+{oldPosition - i}</span>
                  } else {
                    return <span className={classes(cssUtils.txtBold, cssUtils.colorSuccess)}>{oldPosition - i}</span>
                  }
                })()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
    </Panel>
  )
}
