import React from 'react'

export class Board extends React.Component {
  renderBoard = () => {
    const { board } = this.props

    return <table>
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
  }

  render () {
    return (
      <div>
        {this.renderBoard()}
      </div>
    )
  }
}

Board.propTypes = {
  board: React.PropTypes.array.isRequired
}

export default Board