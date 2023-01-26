const {Router} = require('express')
const { io } = require('socket.io-client')
const socket = io()

const router = Router()

router.get('/', (req,res)=>{
    res.render('index.handlebars')
})

router.post('/',(req,res)=>{
    socket.emit('newProduct', product)
})

router.get('/realtimeproducts', (req,res)=>{
})

res.render('realTimeProducts.handlebars')
module.exports = router