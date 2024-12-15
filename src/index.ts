import Hapi from '@hapi/hapi'
import { route } from './route'

async function init(){
    const server = Hapi.server({
        port:3000,
        host : 'localhost'
    })

    server.route(route)

    await server.start()
    console.log(`Server running on ${server.info.uri}`)
}

init()