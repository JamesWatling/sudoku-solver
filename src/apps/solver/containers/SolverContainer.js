import { connect } from 'react-redux'
import Solver from '../components/Solver'

import { solveSudoku } from 'ducks/game'

const mapActionCreators = {
  solveSudoku
}

export default connect(null, mapActionCreators)(Solver)
