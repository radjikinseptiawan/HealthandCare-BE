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
            message : "success add a task" 
         })
         response.code(201);
         return response
         }
}

export const deleteData = (request : any, h : any) : void =>{
        const { id } = request.params;
        const index : any= data.findIndex(data => data.id === id);

        if(index !== -1){
            data.splice(index, 1)
            const response = h.response({
                status : "success",
                message : "Task berhasil di hapus!"
            })
            response.code(201)
            return response
        }

        const response = h.response({
            status : "failed",
            message : "Task gagal di hapus!"
        })
        response.code(201)
        return response
}
