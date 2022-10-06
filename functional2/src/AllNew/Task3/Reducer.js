export const initialState={
    tasks:[]
}
function taskReducer(state=initialState,action){
    switch(action.type){
        case 'add_task':
            const temp=state.tasks.find((item)=>item.name===action.payload.name)
            if(temp!==undefined) {
                temp.time+=action.payload.time
                return{
                    tasks:[...state.tasks]
                }
            }
            else return{
                tasks:[...state.tasks,action.payload]
            }
        default:
            return state
    }
}
export default taskReducer