import * as actionCreators from '../actions/gyms';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Gym from '../pages/Gym';

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
const App = connect(mapStateToProps, mapDispachToProps)(Gym);

export default App;
