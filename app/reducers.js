import uuid from 'node-uuid';

export const intitalState = { notes: [] };

export default (state = intitalState, action) => {
  switch(action.type) {
    case 'ADD_NOTE':
      return {
        ...state,
        notes: state.notes.concat({
          id: uuid.v4(),
          task: action.task
        })
      }
    case 'REMOVE_NOTE':
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.id)
      }
    case 'UPDATE_NOTE':
      return {
        ...state,
        notes: state.notes.map(note => {
          if (note.id === action.id) {
            return {
              ...note,
              task: action.task
            };
          }
          return note;
        })
      }
  }
  return state;
}
