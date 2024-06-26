import { useEffect, useReducer } from 'react';

export type NoteProps = {
  id: string;
  title: string;
  content: string;
  createDate: string;
  editDate: string;
  like: boolean;
};

export type ActionProps =
  | { type: 'INIT'; data: NoteProps[] }
  | { type: 'CREATE'; data: NoteProps }
  | { type: 'REMOVE'; targetId: string }
  | { type: 'EDIT'; data: NoteProps }
  | { type: 'TOGGLE_LIKE'; targetId: string };

const reducer = (state: NoteProps[], action: ActionProps): NoteProps[] => {
  let newState: NoteProps[] = [];
  switch (action.type) {
    case 'INIT': {
      newState = action.data;
      break;
    }
    case 'CREATE': {
      newState = [action.data, ...state];
      break;
    }
    case 'REMOVE': {
      newState = state.filter((note) => note.id !== action.targetId);
      break;
    }
    case 'EDIT': {
      newState = state.map((note) =>
        note.id === action.data.id ? { ...note, ...action.data } : note,
      );
      break;
    }
    case 'TOGGLE_LIKE': {
      newState = state.map((note) =>
        note.id === action.targetId ? { ...note, like: !note.like } : note,
      );
      break;
    }
    default:
      return state;
  }
  localStorage.setItem('noteData', JSON.stringify(newState));
  return newState;
};

export const useFetchData = () => {
  const initialState = JSON.parse(localStorage.getItem('noteData') || '[]');
  const [data, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const loadedData = JSON.parse(localStorage.getItem('noteData') || '[]');
    dispatch({ type: 'INIT', data: loadedData });
  }, []);

  return { data, dispatch };
};
