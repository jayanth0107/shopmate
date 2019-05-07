export default (state = {}, action) => {
    
    switch(action.type) { 
        case 'SEARCH':        
                // return [
                //     ...state, 
                //     {searchTerm: action.searchTerm}                   
                // ];    
                return {
                    ...state, 
                    searchResults: action.payload,
                    searchResultsCount: action.searchCount
                };         
        default:
                return state;
    }
        
};

