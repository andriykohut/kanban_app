import { connect } from 'react-redux';
import App from '../components/App.jsx';

const AppContainer = connect(state => ({
  notes: state.notes
}))(App);

export default AppContainer;
