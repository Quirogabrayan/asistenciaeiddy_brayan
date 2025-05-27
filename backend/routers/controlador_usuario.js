class UsuariosController {
    Construct() {

    }

    async consultarDetalle(req,res){
        try{
            const admin = require('./firebaseAdmin');
            let iden = req.query.iden;
            const userDoc = await admin.firestore().collection('users').doc(iden).get();

            if (!userDoc.exists) {
                return res.status(404).json({ error: 'Usuario no encontrado' + ' ' + iden });
            }
            const userData = userDoc.data();
            return res.status(200).json(userData);

            }catch (err){
                res.status(500).send(err.message );
            }
        }
    async ingresar(req, res) {
        try {
            const admin = require('./firebaseAdmin');
            /* 
            const { dni,nombre,apellidos,email } = req.body;
            console.log("Documento de identidad:..."+dni);
            console.log("Nombres con apellidos:" + nombre+ ' ' + apellidos);
            console.log("Email: " + email);
            */
           //asignando nombre del documento
           //const docRef =await admin.firestore().collection('users').doc("users645").setireq.body);
           //adicionando con nombre de documento asignado dinamicamente
            const docRef = await admin.firestore().collection('users').add(req.body);
                res.status(200).send("usuario agregado");
        }catch (err) {
            res.status(500).send(err.message);
        }    
    }
}
module.exports = new UsuariosController();