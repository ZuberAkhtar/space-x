export default function (state , action) {
    switch (action.type) {
        case 'SET_PROGRAM_LIST' : {
            return action.payload;
        }
        case 'UPDATE_PROGRAM_LIST' :
            return action.payload;

        case'SET_LOADER' : 
            return {...state, ...action.payload}

        default:
            return {...action.payload, ...state} ;
    }
}