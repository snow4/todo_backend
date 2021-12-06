
var List=[];

exports.addObject = (req, res) => {
    console.log("req", req)
    const obj = {
        Name: req.body.name,
        Type: req.body.type,
        Size: req.body.size
    }

    List.push(obj)
    res.send({ status: 'SUCCESS', data: List });
}

exports.deleteObject = (req, res) => {

    res.send(List.splice(req.body.id,1))
}

exports.getObject = (req,res) =>{
    res.send(List)
}

