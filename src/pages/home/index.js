import React from 'react'
import FileUpload from 'apps/file_upload'
import Board from 'apps/board'
import Solver from 'apps/solver'

export const Home = (props) => {
  return (
    <div>
      <h1>Sudoku Solver</h1>
      <FileUpload />
      <Board />
      <Solver />
    </div>
  )
}

export default Home
