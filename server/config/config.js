/**
 * PUERTO
 */
process.env.PORT = process.env.PORT || 3000;

/**
 * ENTORNO
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

/**
 * BASE DE DATOS
 */
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    //VARAILBE EN HEROKU
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

/**
 * VENCIMIENTO DEL TOKEN
 * 60 SEGUNDOS
 * 60 MINUTOS
 * 24 HORAS
 * 30 DIAS
 */
//  process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;
process.env.CADUCIDAD_TOKEN = '48h';


 /**
  * SEED DE AUTENTICACIÓN
  */
  process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

  /**
   * GOOGLE CLIENT ID
   */
  process.env.CLIENT_ID = process.env.CLIENT_ID || '1077805038766-c64kfee62gpdtnlanv37q3rr5d2tbsb4.apps.googleusercontent.com';