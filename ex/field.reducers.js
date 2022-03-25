const INITIAL_STATE = { value: 'teste' };

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'VALUE_CHANGE': 
            return {
                value: action.payload
            }
        break;

        default: 
            return state;
    }
}