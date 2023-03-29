const http = require('http')
const fs = require('fs')

const server = http.createServer((request, response) => {
    switch(request.url) {
        case '/home': {
            fs.readFile('tittle.html', (err, data) => {
                if (err) response.write('500, some error occured')
                else response.write(data)
                response.end()
            })
            break;
        }
        case '/about': {
            setTimeout(() => {
                response.write('ABOUT COURSE')
                response.end()
            }, 3000)
            break;
        }
        default: {
            response.write('404 not found')
            response.end()
        }
    }
})
server.listen(3003)