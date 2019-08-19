export const deleteItem = index => {
    return(
        {
            type:'DeleteItem',
            index:index
        }
    )
}

export const addItem = (name,quantity)=>{
    return({
        type:'AddItem',
        item:{name,quantity}
    })
}