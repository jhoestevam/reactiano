import {cobineReduces} from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default cobineReduces({
    libraries: LibraryReducer,
    selectedLibrary: SelectionReducer
});