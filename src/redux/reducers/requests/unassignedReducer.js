import * as unassignedTypes from '../../actions/actionTypes/requests/unassignedTypes'

const INITIAL_STATE = {
    activeRequest = 0,
    activeFilters = new Map(), //schema : filterCategory <string> : filteredValues <stringArray>  
    filters = [] 
}

const unassignedReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case unassignedTypes.SET_ACTIVE_REQUEST:            
            return {
                ...state,
                activeRequest : action.payload
            }
        case unassignedTypes.SET_ACTIVE_REQUEST:            
            return {
                ...state,
                activeRequest : 0
            }

        case unassignedTypes.GET_ALL_FILTERS:            
            return {
                ...state,
                filters : [...action.payload]
            }
        case unassignedTypes.SET_FILTER:            
            
            let myFilters = state.activeFilters.set(action.payload[0], [...state.activeFilters.get(action.payload[0]),...action.payload[1]])
            return {
                ...state,
                activeFilters : myFilters
            }
        case unassignedTypes.REMOVE_FILTER:

            let myFilters = state.activeFilters.delete(action.payload)
            return {
                ...state,
                activeFilters : myFilters
            }
        
        case unassignedTypes.CLEAR_ALL_FILTERS:

            let myFilters = state.activeFilters.clear()
            return {
                ...state,
                activeFilters : myFilters
            }
    
        default: return state
    }
}

export default unassignedReducer