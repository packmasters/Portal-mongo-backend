function callback(res,err,status,data){
    if(err){
        console.error(err)
    }
    res.status(status).send(data)
}

module.exports = {callback}