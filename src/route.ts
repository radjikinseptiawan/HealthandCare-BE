import { addUpData, deleteData, editData, showUpData } from './utils'

export const route : any = [
    {
        path:'/task',
        method:"GET",
        handler : showUpData
    },
    {
        path:"/task",
        method:"POST",
        handler : addUpData
    },
    {
        path : "/task/{id}",
        method:"DELETE",
        handler : deleteData
    },{
        path : "/task/{id}",
        method:"PUT",
        handler : editData
    }
]