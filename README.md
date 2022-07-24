# jwtTokenTeste

# Aplicação em NODE usando jwt com express

## apos login 






## Demo

### sign - funcao que cria TOKEN
const token = jwt.sign({ id: 1 }, SECRET, { expiresIn: 300 })
return res.json({ auth: true, token })



### funcao para validar o TOKEN Enviado no HEADER
    const token = req.headers['authorization']

    const idtoken = blacklist.findIndex((item) => item === token)
   
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






## Documentation


