import {FileOrigin, Id, UploadedFile} from 'core/api'
import {makeStyles, Theme} from '@material-ui/core'
import React, {useEffect, useState} from 'react'
import {ReportFileAdd} from './ReportFileAdd'
import {ReportFile} from './ReportFile'
import {useI18n} from '../../../core/i18n'
import {Txt} from 'mui-extension/lib/Txt/Txt'

export interface ReportFilesProps {
  files?: UploadedFile[]
  onNewFile?: (f: UploadedFile) => void
  onRemoveFile?: (f: UploadedFile) => void
  reportId: Id
  fileOrigin: FileOrigin
  hideAddBtn?: boolean
}

const useReportFilesStyles = makeStyles((t: Theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginRight: t.spacing(-1),
    marginLeft: t.spacing(-1),
  }
}))

export const ReportFiles = ({
  reportId,
  fileOrigin,
  files,
  hideAddBtn,
  onRemoveFile = () => void 0,
  onNewFile = () => void 0,
}: ReportFilesProps) => {
  const css = useReportFilesStyles()
  const [innerFiles, setInnerFiles] = useState<UploadedFile[]>()
  const {m} = useI18n()

  useEffect(() => {
    setInnerFiles(files)
  }, [files])

  const newFile = (f: UploadedFile) => {
    onNewFile(f)
    setInnerFiles(prev => [f, ...prev ?? []])
  }

  const removeFile = (f: UploadedFile) => {
    onRemoveFile(f)
    setInnerFiles(prev => prev?.filter(_ => _.id !== f.id))
  }

  return (
    <>
      <div className={css.root}>
        {innerFiles?.filter(_ => _.origin === fileOrigin).map(_ =>
          <ReportFile key={_.id} file={_} onRemove={hideAddBtn ? undefined : removeFile}/>,
        )}
        {!hideAddBtn && <ReportFileAdd reportId={reportId} fileOrigin={fileOrigin} onUploaded={newFile}/>}
      </div>
      {hideAddBtn && innerFiles?.length === 0 && (
        <Txt block color="hint">{m.noAttachment}</Txt>
      )}
    </>
  )
}

