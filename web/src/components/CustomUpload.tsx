import type { CustomCharacter } from '../slices/types'

import { useEffect, useState } from 'react'

import { localizationBC } from '../assets/localizationBC'
import { useAppDispatch } from '../hooks/hooks'
import { useCharacters } from '../slices/characters/charactersSelectors'
import { uploadCharacter, setUploadingStatus } from '../slices/characters/charactersSlice'
import { toggleCharacterUpload } from '../slices/preferences/preferencesSlice'

import { Modal } from './Modal'

export const CustomUpload: React.FC = () => {
  const dispatch = useAppDispatch()
  const [uploadFile, setUploadFile] = useState<any>()
  const { isUploading } = useCharacters()
  const [uploadPressed, setUploadPressed] = useState<boolean>(false)

  const onChangeHandler = (event: any) => {
    setUploadFile(event.target.files[0])
  }

  const onSubmitHandler = () => {
    setUploadPressed(true)
    const reader = new FileReader()
    reader.onload = (evt: any) => {
      const uploadedChar: CustomCharacter = JSON.parse(evt.target.result)
      dispatch(
        uploadCharacter({
          character: uploadedChar,
          callback: () => {
            dispatch(setUploadingStatus(false))
          },
        })
      )
    }
    reader.readAsText(uploadFile)
  }

  const close = () => {
    setUploadPressed(false)
    dispatch(toggleCharacterUpload())
    dispatch(setUploadingStatus(false))
  }

  useEffect(() => {
    if (!isUploading && uploadPressed) {
      close()
    }
  }, [isUploading])

  return (
    <>
      <Modal
        title={localizationBC.components.customUpload.uploadCustomCharacter}
        onOk={onSubmitHandler}
        okText={localizationBC.components.customUpload.upload}
        okDisabled={!uploadFile}
        loading={isUploading}
        loadingText={localizationBC.components.customUpload.loadingText}
        onCancel={close}
        description=""
      >
        <input type="file" accept=".json" onChange={onChangeHandler} />
      </Modal>
    </>
  )
}
