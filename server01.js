const http = require('http')

let requestsCounte = 0

const server = http.createServer((request, response) => {
    requestsCounte++
    switch(request.url) {
        case '/students':
            response.write('STUDENTS')
            break;
        case '/courses':
            response.write('FRONT + BACK')
            break;
        default:
            response.write('404 not found')
    }

    response.write(' IT-KAMASUTRA:' + requestsCounte)
    response.end()
})

server.listen(3003)