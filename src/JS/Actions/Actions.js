import { ADD_CART, ADD_PRODUCT, DELETE_PRODUCT, AVAILABLE_PRODUCT, MIN, PLUS } from "../ActionTypes/ActionsTypes"

export const addProduct=(newProduct)=>{
    return{
        type:ADD_PRODUCT,
        payload:newProduct
    }
}

export const deleteProduct=(id)=>{
    return{
        type:DELETE_PRODUCT,
        payload:id
    }
}
export const availableProduct=(id)=>{
    return{
        type:AVAILABLE_PRODUCT,
        payload:id
    }
}

export const  plus=(id)=>{
    return{
        type:PLUS,
        payload:id
    }
}

export const  min=(id)=>{
    return{
        type:MIN,
        payload:id
    }
}


export const addCart =(id)=>{
return{
    type:ADD_CART,
    payload:id
}

}