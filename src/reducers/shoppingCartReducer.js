import _ from 'lodash';

export default (state = [], action) => { 
    
    switch(action.type) { 
        case 'ADD':
                console.log('current state below');
                console.log(state);
                let  partition1, partition2;
                if(state.length > 0) {  

                        let r = _.find(state, pi => pi.name === action.payload.name && pi.color === action.payload.color && pi.size === action.payload.size)

                        if(r){
                            // find the location of identical state obj and separate other entries
                            partition1 = _.reject(state, {'name':action.payload.name, 'color':action.payload.color , 'size' : action.payload.size});                            

                            // update the qty for separated object
                            partition2 = _.filter(state, {'name':action.payload.name, 'color':action.payload.color , 'size' : action.payload.size});                            
                            partition2[0].quantity = ++partition2[0].quantity;
                           
                            // return state
                            return [...partition1, partition2[0]];                            
                        }
                        
                }
                return [...state, action.payload];  
        case 'REMOVE':
                const firstMatchIndex = state.indexOf(action.payload);
                return state.filter((item,index) => index !== firstMatchIndex)
        default:
                return state;
    }
        
};


