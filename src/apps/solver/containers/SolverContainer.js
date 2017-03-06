import { connect } from 'react-redux'
import Solver from '../components/Solver'

import { solveSudoku } from 'ducks/game'

const mapActionCreators = {
  solveSudoku
}

const mapStateToProps = () => {
  return {}
}

export default connect(
  mapStateToProps,
  mapActionCreators
)(Solver)
