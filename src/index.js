const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')

const SECRET = 'rocha';

const app = express()
app.use(bodyParser.json())

const blacklist = []

app.get('/clientes', (req, res) => {
    const token = req.headers['authorization']

    const idtoken = blacklist.findIndex((item) => item === token)
    console.log(idtoken)
    if ( idtoken > 0) return res.status(404).end();

    if (token) {
        const llok = jwt.verify(token, SECRET, (err, decoded) => {
            if (err) return res.status(401).end();

            req.userID = decoded.userID;
            return res.json({ id: 3, name: 'alexxx' })
        })

    }

    return res.status(401).end();

})

app.post('/login', (req, res) => {
    if (req.body.usuario === 'alex' && req.body.senha === '123') {
        const token = jwt.sign({ id: 1 }, SECRET, { expiresIn: 300 })
        return res.json({ auth: true, token })
    }

    return res.status(401).end();
})


app.post('/logout', (req, res) => {

    const token = req.headers['authorization']

    console.log(token)
    
    if (!token) {
        return res.status(401).end();
    }

    blacklist.push(token)
    console.log(blacklist)

    return res.json({ auth: false })

})


app.listen(3500, (err, data) => {

    if (err) throw err

    console.log('Server Started')
})