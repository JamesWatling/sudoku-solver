import React from 'react'

export class FileUpload extends React.Component {
  handleOnChange = (e) => {
    e.preventDefault()
    const { uploadFile } = this.props

    uploadFile(e.target.files[0])
  }
  render () {
    const { error } = this.props

    return (
      <div>
        <input type='file' onChange={this.handleOnChange} />
        {error && <div style={{ color: 'red' }}>
          Error has occured: {error}
        </div>}
      </div>
    )
  }
}

FileUpload.propTypes = {
}

export default FileUpload