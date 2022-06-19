const clientsController = {};
const clients = require('../clientes.json')


//obtener datos
clientsController.getAll = (req,res)=>{
    res.json(clients);
}
clientsController.create = (req,res)=>{
    
    const id= clients.length+1;
    const newClient = req.body;
    newClient["id"]= id; 
    clients.push(newClient);
    res.json(newClient);
}


module.exports = clientsController