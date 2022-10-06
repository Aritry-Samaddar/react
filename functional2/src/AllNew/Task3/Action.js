export const addTask=(obj)=>async (dispatch)=>{
    return dispatch(
        {
            type:'add_task',
            payload:obj
        }
    )
}