import { combineReducers } from 'redux';
import SettingsReducer from './settings.reducer';
import SearchReducers from './search.reducer';

export default combineReducers({
  settings: SettingsReducer,
  searchs: SearchReducers,
});
