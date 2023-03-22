const http = require('http')
const fs = require('fs')

const server = http.createServer((request, response) => {
    switch(request.url) {
        case '/home': {
            const data = fs.readFileSync('tittle.html')
            response.write(data)
            break;
        }
        default: {
            response.write('404 not found')
        }
    }

    response.end()
})
server.listen(3003)