const expressJwt = require('express-jwt');

function authJwt(){
    const secret= process.env.secret
    return expressJwt({
        secret,
        algorithms: ['HS256']
    }).unless({
        // excluding APIs from authentication
        path:[
            '/api/login',
            '/api//signup'
        ]
    })
}

module.exports = authJwt