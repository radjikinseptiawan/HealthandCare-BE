import { addUpData, showUpData } from './utils'

export const route : any = [
    {
        path:'/',
        method:"GET",
        handler : showUpData
    },
    {
        path:"/add",
        method:"POST",
        handler : addUpData
    }
]