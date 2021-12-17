import {useLogin} from '../../core/context/LoginContext'
import {useI18n} from '../../core/i18n'
import {Panel, PanelBody, PanelHead} from '../../shared/Panel'
import {ApiError, ReportTag} from '@signal-conso/signalconso-api-sdk-js'
import {Dispatch, SetStateAction, useEffect, useMemo, useState} from 'react'
import {Txt} from 'mui-extension/lib/Txt/Txt'
import {SelectMonth} from '../../shared/SelectMonth/SelectMonth'
import {useGetDateForMonthAndPreviousOne} from './useGetDateForMonthAndPreviousOne'
import {classes} from '../../core/helper/utils'
import {useCssUtils} from '../../core/helper/useCssUtils'

interface AsyncPercent {
  loading: boolean
  error?: string
  value?: {
    reportsInternets: number
    reportsInternetsWithCompany: number
    reportsInternetsWithCountry: number
    reportsInternetsWithoutAnything: number
  }
}

export const StatsReportsInternetPanel = () => {
  const {apiSdk: api} = useLogin()
  const {m} = useI18n()

  const currentMonth = useMemo(() => new Date().getMonth(), [])
  const [selectedMonth, setSelectedMonth] = useState<number>(currentMonth)

  const [asyncPercent, setAsyncPercent] = useState<AsyncPercent>({loading: false})
  const [asyncPercentLastMonth, setAsyncPercentLastMonth] = useState<AsyncPercent>({loading: false})

  const dates = useGetDateForMonthAndPreviousOne(selectedMonth)

  const cssUtils = useCssUtils()

  const fetch = (start: Date, end: Date) => {
    return Promise.all([
      api.public.stats.getReportCount({
        start,
        end,
      }).then(_ => _.value),
      api.public.stats.getReportCount({
        start,
        end,
        tags: [ReportTag.Internet],
      }).then(_ => _.value),
      api.public.stats.getReportCount({
        start,
        end,
        tags: [ReportTag.Internet],
        hasCompany: true,
      }).then(_ => _.value),
      api.public.stats.getReportCount({
        start,
        end,
        tags: [ReportTag.Internet],
        hasCompany: false,
        hasForeignCountry: true,
      }).then(_ => _.value),
      api.public.stats.getReportCount({
        start,
        end,
        tags: [ReportTag.Internet],
        hasCompany: false,
        hasForeignCountry: false,
      }).then(_ => _.value),
    ])
  }

  const getValues = async (start: Date, end: Date, setState: Dispatch<SetStateAction<AsyncPercent>>) => {
    setState(prev => ({...prev, loading: true}))
    fetch(start, end)
      .then(([
        reports,
        reportsInternets,
        reportsInternetsWithCompany,
        reportsInternetsWithCountry,
        reportsInternetsWithoutAnything,
      ]) => {
        setState({
          loading: false,
          error: undefined,
          value: {
            reportsInternets: +reportsInternets / +reports * 100,
            reportsInternetsWithCompany: +reportsInternetsWithCompany / +reportsInternets * 100,
            reportsInternetsWithCountry: +reportsInternetsWithCountry / +reportsInternets * 100,
            reportsInternetsWithoutAnything: +reportsInternetsWithoutAnything / +reportsInternets * 100,
          },
        })
      }).catch((err: ApiError) => setState(prev => ({...prev, error: err.message})))
  }

  useEffect(() => {
    setAsyncPercentLastMonth(prev => ({...prev, loading: true}))
    getValues(dates.current.start, dates.current.end, setAsyncPercent)
    getValues(dates.lastMonth.start, dates.lastMonth.end, setAsyncPercentLastMonth)
  }, [dates])

  return (
    <Panel loading={asyncPercent.loading || asyncPercentLastMonth.loading}>
      <PanelHead action={
        <SelectMonth value={selectedMonth} onChange={setSelectedMonth}/>
      }>
        {m.statsInternetsTitle}
      </PanelHead>
      <PanelBody>
        {asyncPercent.value && asyncPercentLastMonth.value && (
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center'}}>
            <Box
              className={cssUtils.marginRight}
              title={m.statsInternets_all}
              desc={m.statsInternets_all_desc}
              value={asyncPercent.value.reportsInternets}
              previousValue={asyncPercentLastMonth.value.reportsInternets}
            />
            <div className={cssUtils.marginLeft}>
              <Box
                title={m.statsInternets_withCompany}
                value={asyncPercent.value.reportsInternetsWithCompany}
                previousValue={asyncPercentLastMonth.value.reportsInternetsWithCompany}
              />
              <Box
                title={m.statsInternets_withCountry}
                desc={m.statsInternets_withCountry_desc}
                value={asyncPercent.value.reportsInternetsWithCountry}
                previousValue={asyncPercentLastMonth.value.reportsInternetsWithCountry}
              />
              <Box
                title={m.statsInternets_withNothing}
                desc={m.statsInternets_withNothing_desc}
                value={asyncPercent.value.reportsInternetsWithoutAnything}
                previousValue={asyncPercentLastMonth.value.reportsInternetsWithoutAnything}
              />
            </div>
          </div>
        )}
      </PanelBody>
    </Panel>
  )
}

interface BoxProps {
  className?: string
  value: number
  previousValue: number
  title: string
  desc?: string
}

const Box = ({
  className,
  value,
  previousValue,
  title,
  desc,
}: BoxProps) => {
  const cssUtils = useCssUtils()
  const evolution = useMemo(() => {
    return Math.round(value - previousValue)
  }, [value, previousValue])

  return (
    <Panel elevation={2} style={{maxWidth: 300}} className={className}>
      <PanelBody>
        <div style={{lineHeight: 1.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <span>
            <span style={{fontSize: 36}}>{Math.round(value)}</span>
            <span style={{fontSize: 22}}> %</span>
          </span>
          <span className={classes(cssUtils.txtBig, cssUtils.txtBold, evolution > 0 ? cssUtils.colorSuccess : cssUtils.colorError)}>
            {evolution > 0 ? '+' : '-'}{Math.abs(evolution)}
          </span>
        </div>
        <Txt block bold>{title}</Txt>
        <Txt block color="hint" size="small">{desc}</Txt>
      </PanelBody>
    </Panel>
  )
}
