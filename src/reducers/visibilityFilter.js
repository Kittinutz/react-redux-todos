import { VisibilityFilters } from "../actions";

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    if(action.type == 'SET_VISIBILITY_FILTER'){
        return action.filter
    }
    return state
}

export default visibilityFilter;