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
    const {task,description, status = false} = request.payload
    const time = Date.now();
    const idTasks = nanoid(16)
    
    const buildTask = 
    {
        id:idTasks,
        task : task,
        description : description,
        time : time,
        status : status
    }
    data.push(buildTask)

    const isSuccess = data.map((task)=> buildTask.task === task)
    if(isSuccess){
        const response = h.response({
            status:'success',
            message : "sukses menambah data" 
         })
         response.code(201);
         return response
         }

         const response = h.response({
            status: "failed",
            message : 'Gagal menambahkan data'
         })
         response.code(400)
         return response
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
            response.code(204)
            return response
        }

        const response = h.response({
            status : "failed",
            message : "Task gagal di hapus!"
        })
        response.code(404)
        return response
}

export const editData = (request : any, h:any) : void =>{
    const {id} = request.params;
    const { task,description, status } = request.payload;
    const index = data.findIndex(index => index.id === id);

    if(index !== -1){  
    data[index] = {
        ...data[index],
        task:task,
        description : description,
        status : status
    }

    const response = h.response({
        message : "Berhasil mengedit data",
        status: "success"
    })
    response.code(200)
    return response
    }

    const response = h.response({
        message : "Gagal mengedit data",
        status : 'fail'
    })
    response.code(404)
    return response
}

export const seeDetailData = (request : any,h : any) : any=>{
    const {id} = request.params;
    const filterId = data.filter(ftr => ftr.id === id)

    if(filterId){
        const catchData = h.response({
            status : 'success',
            data : {
                filterId
            },
        })
        catchData.code(20)
        return catchData 
    }
    const response = h.response({
        message : "Gagal!, data tidak ditemukan",
        status: "failed"
    })
    response.code(404)
    return response
}

export const changeStatus = (request:any, h:any) =>{
    const { id } = request.params;
    const {status} = request.payload
    const indexing = data.findIndex(dataTask => dataTask.id === id)

    if(indexing !== -1){
        data[indexing] = {
            ...data[indexing],
            status : status
        }
        const response = h.response({
            status : 'success',
            message : 'Berhasil mengubah status!'
        })
        response.code(200)
        return response
    }

    const response = h.response({
        status : 'failed',
        message : 'Gagal mengubah status!. id tidak ditemukan'
    })
    response.code(404)
    return response
}