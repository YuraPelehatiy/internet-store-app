const initialState = {
    products: {
        // [product.id]: {
        //     ...product
        // }
    },
    users: {
        // [user.id]: {
        //     ...user
        // }
    }
}

export default function entitiesReducer(state = initialState, action){
    if(action.payload && action.payload.entities){
        const newState = {...state};
        Object.keys(action.payload.entities).forEach(key => {
            Object.assign(newState[key], action.payload.entities[key])
        });

        return newState;
    }

    return state;
}