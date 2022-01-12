export const addcart = (product) => {
    return {
        type:"ADDITEM",
        payload:product
    }
}
export const deletecart = (product) => {
    return {
        type:"DELETE",
        payload:product
    }
}
