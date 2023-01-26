import { Router } from 'express'
import ProductManager from '../helpers/ProductManager.js'

const router = Router()
let productosCargados = ProductManager.getProducts()

router.get('/', (req, res) => {
  res.render('home', {productosCargados})
})

export default router;