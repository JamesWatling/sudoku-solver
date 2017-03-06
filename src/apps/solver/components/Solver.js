import React from 'react'

export class Solver extends React.Component {
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

Solver.propTypes = {
  solveSudoku: React.PropTypes.func.isRequired
}

export default Solver
