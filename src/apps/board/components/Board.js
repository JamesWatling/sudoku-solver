import React from 'react'

export default class Board extends React.Component {

  static  propTypes = {
    board: React.PropTypes.array.isRequired
  }

  renderBoard () {
    const { board } = this.props

    return (
      <table>
        <tbody>
          {board.map((row, index) => {
            return <tr key={index}>
              {row.map((number, index) => {
                return <td key={index}>
                  {number}
                </td>
              })}
            </tr>
          })}
        </tbody>
      </table>
    )
  }

  render () {
    return (
      <div>
        {this.renderBoard()}
      </div>
    )
  }
}
