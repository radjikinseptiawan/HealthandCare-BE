import { addUpData, deleteData, showUpData } from './utils'

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
    }
]