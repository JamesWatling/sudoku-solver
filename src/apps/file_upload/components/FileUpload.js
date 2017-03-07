import React from 'react'

export default class FileUpload extends React.Component {

  static propTypes = {
    uploadFile: React.PropTypes.func.isRequired,
    error: React.PropTypes.string
  }

  handleOnChange = (e) => {
    e.preventDefault()
    const { uploadFile } = this.props

    uploadFile(e.target.files[0])
  }

  errorDisplay () {
    const { error } = this.props
    if (!error) { return null }
    return (
      <div style={{ color: 'red' }}>
        Error has occured: {error}
      </div>
    )
  }

  render () {
    return (
      <div>
        <input type='file' onChange={this.handleOnChange} />
        {this.errorDisplay()}
      </div>
    )
  }
}
