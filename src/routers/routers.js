const { Router} = require("express");
const router = Router();
const apiRoute = '/api';
const clientsController= require('../controllers/cliente_controller')

//cliente
router.get(apiRoute+'/clientes',clientsController.getAll)
router.post(apiRoute+'/clientes',clientsController.create)

module.exports = router;