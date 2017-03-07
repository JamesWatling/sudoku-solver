import { connect } from 'react-redux'
import Board from '../components/Board'

const mapStateToProps = (state) => {
  const { board } = state.game

  return {
    board
  }
}

export default connect(mapStateToProps, {})(Board)
