import { timeLog } from 'console'
import { data } from './data'
import { nanoid } from 'nanoid'


export const showUpData = (request : any ,h :any) : void=>{
    const response = h.response({
        status:200,
        data:{
            task: data
        }
    })
    return response
}

export const addUpData = (request : any, h : any) : void =>{
    const {task,description} = request.payload
    const time = Date.now();
    const idTasks = nanoid(16)
    
    const buildTask = 
    {
        id:idTasks,
        task : task,
        description : description,
        time : time,
        status : false
    }
    data.push(buildTask)

    const isSuccess = data.map((task)=> buildTask.task === task)
    if(isSuccess){
        const response = h.response({
            status:'success',
            message : "success add an task" 
         })
         response.code(201);
         return response
         }
}
