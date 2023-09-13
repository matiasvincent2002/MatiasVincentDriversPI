const initialState = {
  drivers: [],
  copyDrivers: [],
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
        copyDrivers : action.payload,
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
    case 'FILTER_BY_APIDB':
        
      
        if(action.payload === 'db'){
          const filtered = state.copyDrivers.filter((driver)=>{
          if(isNaN(driver.id)){
            return driver;
          }
        })
        return {...state, drivers: filtered}
      
      }else if(action.payload === 'api'){
        const filtered = state.copyDrivers.filter((driver)=>{
          if(Number(driver.id)){
            return driver;
          }
        })
        return{...state, drivers: filtered}
        
      }
      else{
        return{
          ...state,
          drivers: state.copyDrivers
        }
      }
          
    case 'FILTER_BY_TEAM':
      console.log(state.drivers)
      const filtered = state.copyDrivers.filter((driver)=>
        driver.teams? driver.teams?.includes(action.payload):driver.Teams?.find((team)=>team.name.toLowerCase() === action.payload.toLowerCase()))
       
        return{...state,
          drivers: filtered
        }
     

      
    default:
      return state;
  }
};

export default reducer;
