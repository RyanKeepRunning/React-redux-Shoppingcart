export default (state=[],action)=>{
    switch(action.type){
        case 'AddItem':
            console.log(state); 
            return(
                [...state,action.item]
            )
        case 'DeleteItem':
            return(
               [...state.slice(0,action.index),...state.slice(action.index+1)]
            )
        default:
            return(
                state
            )

    }
}