const initialState = {
    idCategory: 765432,
    idSubcategory:0,
}

const categoryReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'OPEN':
            return action.payload
        default:
            return state
    }

}

export default categoryReducer