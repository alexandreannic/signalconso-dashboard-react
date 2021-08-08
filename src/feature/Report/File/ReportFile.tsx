import {UploadedFile} from '../../../core/api'
import {Icon, makeStyles, Theme, Tooltip} from '@material-ui/core'
import {extensionToType, FileType, reportFileConfig} from './reportFileConfig'
import {useLogin} from '../../../core/context/LoginContext'
import {fromNullable, some} from 'fp-ts/lib/Option'
import {Config} from '../../../conf/config'
import React, {useEffect} from 'react'
import {stopPropagation} from '../../../core/helper/utils'
import {useFetcher} from '@alexandreannic/react-hooks-lib/lib'
import {IconBtn} from 'mui-extension/lib'
import {useToast} from '../../../core/toast'

export interface ReportFileProps {
  file: UploadedFile
  dense?: boolean
  onRemove?: (file: UploadedFile) => void
}

const removeBtnSize = 30
const cardMargin = 1

const useStyles = makeStyles((t: Theme) => ({
  root: {
    display: 'block',
    position: 'relative',
    padding: t.spacing(cardMargin),
    '&:hover > $removeBtn': {
      display: 'flex !important'
    },
  },
  image: {
    display: 'inline-flex',
    border: '1px solid ' + t.palette.divider,
    borderRadius: reportFileConfig.cardBorderRadius,
    height: reportFileConfig.cardSize,
    width: reportFileConfig.cardSize,
    color: t.palette.text.hint,
    overflow: 'hidden',
    transition: t.transitions.create('all'),
    '&:hover': {
      boxShadow: t.shadows[4],
    },
    '& > div': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundSize: 'cover',
      height: '100%',
      width: '100%',
    }
  },
  removeBtn: {
    display: 'none !important',
    position: 'absolute',
    top: (removeBtnSize - t.spacing(cardMargin)) / -2,
    right: (removeBtnSize - t.spacing(cardMargin)) / -2,
    width: removeBtnSize,
    height: removeBtnSize,
    borderRadius: removeBtnSize,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: t.shadows[4],
    background: t.palette.background.paper + ' !important',
  },
  imgPdf: {
    color: '#db4537',
  },
  imgDoc: {
    color: '#4185f3',
  },
}))

export const ReportFile = ({file, dense, onRemove}: ReportFileProps) => {
  const fileType = extensionToType(file.filename)
  const css = useStyles()
  const {apiSdk} = useLogin()
  const _remove = useFetcher(apiSdk.secured.document.remove)
  const {toastError} = useToast()

  const fileUrl = some(apiSdk.public.document.getLink(file)).map(_ => Config.isDev
    ? _.replace(Config.apiBaseUrl, 'https://signal-api.conso.gouv.fr')
    : _
  ).toUndefined()

  const remove = async () => {
    await _remove.fetch({}, file)
    onRemove?.(file)
  }

  useEffect(() => {
    fromNullable(_remove.error).map(toastError)
  }, [_remove.error])

  return (
    <Tooltip title={file.filename}>
      <a target="_blank" href={fileUrl} className={css.root}>
        {onRemove && (
          <IconBtn loading={_remove.loading} size="small" className={css.removeBtn} onClick={stopPropagation(remove)}>
            <Icon>clear</Icon>
          </IconBtn>
        )}
        <div className={css.image}>
          {(() => {
            switch (fileType) {
              case FileType.Image: {
                return <div style={{backgroundImage: `url(${fileUrl})`}}/>
              }
              case FileType.PDF: {
                return (
                  <div>
                    <Icon className={css.imgPdf}>picture_as_pdf</Icon>
                  </div>
                )
              }
              case FileType.Doc: {
                return (
                  <div>
                    <Icon className={css.imgDoc}>article</Icon>
                  </div>
                )
              }
              default: {
                return (
                  <div>
                    <Icon>insert_drive_file</Icon>
                  </div>
                )
              }
            }
          })()}
        </div>
      </a>
    </Tooltip>
  )
}
