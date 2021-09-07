const mongoose= require('mongoose')

const demandaSchema = new mongoose.Schema({
   nombresDemandante:{
       type: String, 
       required: true
   },
   apellidosDemandante:{
       type: String, 
       required: true
   },
   tipoDocDemandante:{
       type: String, 
       required: true
   },
   numeroDocDemandante:{
      type: Number,   //verificar si este tipo de dato no genera conflicto.
       required: true
   },
   nacimientoDemandante:{
       type: String,   //Dado que la fecha ya viene dada en un formato, se guarda como string para evitar conflictos. 
       required: true
   },
   edadDemandante:{
       type: Number,   //verificar si este tipo de dato no genera conflicto.
       required: true
   },
   lugarDocDemandante:{
       type: String,
       required: true
   },
   direccionDemandante:{
       type: String,
       required: true
   },
   ciudadDemandante:{
       type: String,
       required: true
   },
   genero:{
       type: String,
       required: true
   },
   correoDemandante:{
       type: String,
       required: true
   },
   celularDemandante:{
       type: String,
       required: true
   },
   demandanteCreado:{
       type: Date, 
       default: Date.now      // Genera automáticamente una fecha de creación de la información del demandante
   },
   nombreEmpresa:{              //Información de la empresa
       type: String, 
       required: true
   },
 
   identificaEmpresa:{
       type: String, 
       required: true
   },
   nitEmpresa:{
      type: Number,   
       required: true
   },
   direccionEmpresa:{
       type: String,   
       required: true
   },
  
   ciudadEmpresa:{
       type: String,
       required: true
   },
   telefonoEmpresa:{
       type: Number,
       required: true
   },
   correoEmpresa:{
       type: String,
       required: true
   },
   tipoContrato: {                       //Información del contrato
       type: String,
       requiired: true
   },   
   inicioContrato:{
       type: String, 
       required: true
   },
   finContrato: {
       type: String,
       required: true
   },
   salario: {
       type: Number,
       required: true
   },
   cargo:{
       type: String,
       required: true
   },
   funciones:{
       type: String,
       required: true
   }, 


   tipoConflicto:{     //Tipo de conflicto
       type: String,
       required: true
   },

   fechaFinal:{
       type: String,
       required:false
   },
   hechos:{
       type: Array,
       required: false
   },
   indemnizacionDesp:{    // Indemnización por despido sin justa causa
       type: Number,
       required: true
   }
     
}); 

module.exports= mongoose.model('Demanda', demandaSchema); 