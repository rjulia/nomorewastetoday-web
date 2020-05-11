import {
  SEARCH_LOCATIONS,
  SEARCH_GET_LOCATIONS,
  SEARCH_GET_LOCATION,
  SEARCH_CLEAN_FILTER,
  SEARCH_CLEAN_LOCATIONS,
  SEARCH_CLEAN_LOCATION,
  SEARCH_GET_EVENT,
} from '../actions/types';

const InitialSettingsState = {
  search: {},
  locations: [],
  id: '',
  id_event: '',
  locationsLoading: false,
  isOnSearching: false,
  error: '',
};

export default function SearchReducers(state = InitialSettingsState, action) {
  switch (action.type) {
    case SEARCH_LOCATIONS:
      return {
        ...state,
        isOnSearching: true,
        search: {
          ...state.search,
          ...action.payload.filter,
        },
      };

    case SEARCH_GET_LOCATIONS:
      return {
        ...state,
        locations: action.payload.locations,
      };
    case SEARCH_GET_LOCATION:
      return {
        ...state,
        id_event: undefined,
        id: action.payload.id,
      };
    case SEARCH_CLEAN_FILTER:
      return {
        ...state,
        id: '',
        isOnSearching: false,
        search: {},
      };
    case SEARCH_CLEAN_LOCATIONS:
      return {
        ...state,
        locations: [],
      };
    case SEARCH_CLEAN_LOCATION:
      return {
        ...state,
        id: '',
        id_event: '',
      };
    case SEARCH_GET_EVENT:
      return {
        ...state,
        id: undefined,
        id_event: action.payload.id,
      };
    default:
      return state;
  }
}
