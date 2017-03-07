import { connect } from 'react-redux'
import FileUpload from '../components/FileUpload'
import { uploadFile } from 'ducks/file_upload'

const mapActionCreators = {
  uploadFile
}

const mapStateToProps = (state) => {
  const { uploading, error } = state.fileUpload

  return {
    uploading,
    error
  }
}

export default connect(mapStateToProps, mapActionCreators)(FileUpload)
