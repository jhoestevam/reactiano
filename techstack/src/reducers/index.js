import {cobineReduces} from 'redux';
import LibraryReducer from './LibraryReducer';

export default cobineReduces({
    libraries: LibraryReducer
});