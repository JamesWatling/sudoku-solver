import { connect } from 'react-redux'
import Board from '../components/Board'

const mapActionCreators = {
}

const mapStateToProps = (state) => {
  const { board } = state.game

  return {
    board
  }
}

export default connect(
  mapStateToProps,
  mapActionCreators
)(Board)
