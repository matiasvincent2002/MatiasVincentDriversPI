const initialState = {
  drivers: [],
  teams: [],
  currentPage: 1,
  itemsPerPage: 9,
  sortOrder: 'asc',
  selectedTeam: null,
  selectedOrigin: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DRIVERS_SUCCESS':
      return {
        ...state,
        drivers: action.payload,
      };
    case 'GET_TEAMS_SUCCESS':
      return {
        ...state,
        teams: action.payload,
      };
    case 'CREATE_DRIVER':
      return {
        ...state,
        formData: action.payload,
      };
    case 'GET_DRIVER_BY_ID_SUCCESS':
      return {
        ...state,
        selectedDriver: action.payload,
      };
    case 'GET_DRIVER_NAME_SUCCESS':
      return {
        ...state,
        drivers: action.payload,
      };
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.payload,
      };
    case 'SORT_DRIVERS_ASCENDING':
      return {
        ...state,
        drivers: [...state.drivers.sort((a, b) => a.name.localeCompare(b.name))],
        sortOrder: 'asc',
      };
    case 'SORT_DRIVERS_DESCENDING':
      return {
        ...state,
        drivers: [...state.drivers.sort((a, b) => b.name.localeCompare(a.name))],
        sortOrder: 'desc',
      };
    case 'SORT_ORDEN_BY_DATE_ASC':
      return {
        ...state,
        drivers: [...state.drivers.sort((a, b) => new Date(a.dob) - new Date(b.dob))],
        sortOrder: 'asc',
      };
    case 'SORT_ORDEN_BY_DATE_DESC':
      return {
        ...state,
        drivers: [...state.drivers.sort((a, b) => new Date(b.dob) - new Date(a.dob))],
        sortOrder: 'desc',
      };
    case 'FILTER_DRIVERS_BY_TEAM':
      return {
        ...state,
        filterTeam: action.payload,
      };
    case 'FILTER_DRIVERS_BY_ORIGIN':
      return {
        ...state,
        filterOrigin: action.payload,
      };
    case 'FILTER_BY_TEAM':
      return {
        ...state,
        selectedTeam: action.payload,
        currentPage: 1,
      };
    case 'FILTER_BY_ORIGIN':
      return {
        ...state,
        selectedOrigin: action.payload,
        currentPage: 1,
      };
    default:
      return state;
  }
};

export default reducer;
