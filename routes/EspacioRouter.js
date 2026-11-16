import express from 'express';
import { 
        crearEspacio, 
        listarEspacios, 
        getActById,
        deleteActById,
        updeteActById 
    } from '../controllers/EspacioController.js';
import { validarJWT } from '../middlewares/auth.js';
const router = express.Router();

router.get('/', listarEspacios);
router.get('/:id', getActById);
router.delete('/:id', validarJWT, deleteActById);
router.put('/:id', validarJWT, updeteActById);
router.post('/', validarJWT, crearActividad);

export default router;