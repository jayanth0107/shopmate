
export default (state = [], action = {}) => {
  switch (action.type) {
    case "CART_TOTAL_COUNT": {
        console.log(state);    
        if(action.payload === 0) 
           return [];
        else if(action.payload === -1)
           return state.slice(1);
        else
          return [...state,  action.payload];
    }

    default:
      return state;
  }
};