
//=================== MENSAJES DE SOCKET ============//
const { io } = require('../index');

io.on('connection', client => {

    console.log('CLIENTE CONECTADO ..........!');

    client.on('disconnect', () => { 
        console.log('CLIENTE DESCONECTADO   XXXXXXXXX !');
        
     });
     
     //---- RECIBE MENSAJE DESDE EL SERVIDOR---//
     
     client.on('mensaje',(payload)=>{
         console.log( 'EL MENSAJE...', payload);
        });
        
        
        //---- EMITE MENSAJE A TODOS LOS CLIENTES CONECTADOS---//

     
     io.emit('mensaje',{admin:"ES UN MENSAJE PARA TODOS"});






  });