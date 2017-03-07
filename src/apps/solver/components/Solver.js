import React from 'react'

export default class Solver extends React.Component {

  static propTypes = {
    solveSudoku: React.PropTypes.func.isRequired
  }

  handleOnClick = () => {
    const { solveSudoku } = this.props
    solveSudoku()
  }

  render () {
    return (
      <button onClick={this.handleOnClick}>
        Solve Sudoku
      </button>
    )
  }
}
