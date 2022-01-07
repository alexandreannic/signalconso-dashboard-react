import {CompanySearchResult, isGovernmentCompany} from '@signal-conso/signalconso-api-sdk-js'
import {ScRadioGroupItem} from '../RadioGroup/RadioGroupItem'
import {Txt} from 'mui-extension/lib/Txt/Txt'
import {Icon, Theme} from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import {classes} from '../../core/helper/utils'
import {ScRadioGroup} from '../RadioGroup/RadioGroup'
import React from 'react'
import {useCssUtils} from '../../core/helper/useCssUtils'
import {useI18n} from '../../core/i18n'
import {AddressComponent} from '../Address/Address'

interface Props {
  companies: CompanySearchResult[]
  onChange: (_: CompanySearchResult) => void
}

const useStyles = makeStyles((t: Theme) => ({
  root: {
    maxWidth: 400,
  },
  address: {
    marginTop: t.spacing(1 / 2),
  },
}))

export const SelectCompanyList = ({companies, onChange}: Props) => {
  const cssUtils = useCssUtils()
  const css = useStyles()
  const {m} = useI18n()

  return (
    <ScRadioGroup>
      {companies.map(company => {
        const isGovernment = isGovernmentCompany(company)
        return (
          <ScRadioGroupItem key={company.siret} value={company.siret!} className={css.root} onClick={() => onChange(company)}>
            <Txt truncate block bold>
              {company.name}
            </Txt>
            {company.brand && <Txt block>{company.brand}</Txt>}
            {company.isHeadOffice && (
              <Txt color="primary">
                <Icon className={cssUtils.inlineIcon}>business</Icon>
                &nbsp;
                {m.isHeadOffice}
              </Txt>
            )}
            {!company.isHeadOffice && company.activityLabel && (
              <Txt color="hint">
                <Icon className={cssUtils.inlineIcon}>label</Icon>
                &nbsp;
                {company.activityLabel}
              </Txt>
            )}
            {isGovernment && (
              <Txt color="error" bold>
                <Icon className={cssUtils.inlineIcon}>error</Icon>
                {m.governmentCompany}
              </Txt>
            )}
            {company.address && (
              <Txt color="hint" block size="small" className={css.address}>
                <AddressComponent address={company.address} />
              </Txt>
            )}
          </ScRadioGroupItem>
        )
      })}
    </ScRadioGroup>
  )
}
