import React from 'react';
import Notes from './Notes.jsx';

class App extends React.Component {
  render() {
    return <div>
      <button onClick={this.addNote}>+</button>
      <Notes notes={this.props.notes}
        onEdit={this.editNote}
        onDelete={this.deleteNote} />
    </div>;
  }
  addNote = () => {
    this.props.dispatch({
      type: 'ADD_NOTE',
      task: 'New Note'
    });
  }
  editNote = (id, task) => {
    this.props.dispatch({
      type: 'UPDATE_NOTE',
      id,
      task
    });
  }
  deleteNote = (id, e) => {
    e.stopPropagation();

    this.props.dispatch({
      type: 'REMOVE_NOTE',
      id
    });
  }
}

App.propTypes = {
  notes: React.PropTypes.array.isRequired,
  dispatch: React.PropTypes.func.isRequired
}

export default App;
