import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const esquema = new Schema({
    nombre: {
        type: String,
        required: [true, "Falta el campo nombre"]
    },
    cupo: {
        type: number,
        required: [true, "Falta el campo cupo"]
    },
    dias: String,
    horario: String,
    costo: Number,
    imagen: {
    type: String,
    default: './public/img/cursoNuevo.png' // Opcional: una imagen base si el usuario no sube nada
  }
});

const Espacio = mongoose.model('Espacio', esquema);

export default Espacio;