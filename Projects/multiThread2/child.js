setTimeout(()=>{
  process.on('message', (message) =>{
  process.send({meg: ' from WWW ', msg:message})
  process.exit(400)
  })

},3000 )