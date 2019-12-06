export const open = (idCategory,idSubcategory) => {
    console.log('pauload',idCategory);
    
    return {
        type: 'OPEN',
        payload: { idCategory,idSubcategory}
    }
}

export const change = (option) => {
    return {
        type: 'CHANGE',
        payload: option
    }
}

export const menuOption = (option) => {
    return {
        type: 'MENU_OPTION',
        payload: option
    }
}

export const menuOpen = (open) => {
    return {
        type: 'MENU_OPEN',
        payload: open
    }
}