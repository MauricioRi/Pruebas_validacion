const con = require('../DB/connection')

function getUsers(req, res) {
    con.query(`SELECT Id_user,Username,Rol,Mail,Password FROM usuario WHERE Status=1`, 
        function (err, result) {
            if (err){
                console.log("Error" , err)
                res.status(500).json({err})
            }else
                res.status(200).json({ clients:result })
                
        }
    )
}
//UPDATE table_name SET field1 = new-value1, field2 = new-value2

function setUser(req, res) {
   // UPDATE usuario SET Username='alfred', Rol='barra', Mail='juanito@gmail.com',Password='15417896da' WHERE Id_user=7
    con.query(`UPDATE usuario SET Username=?, Rol=?, Mail=?,Password=? WHERE Id_user=?`, 
        [req.body.Username , req.body.Rol, req.body.Mail , req.body.Password, req.body.Id_user ], 
        function (err, result) {
            if (err){
                console.log("Error" , err)
                res.status(500).json({err})
            }else
                res.status(200).json("Update 1 user")
        }
    )
}
//INSERT INTO `usuario` (`Id_user`, `Username`, `Password`, `Status`, `Rol`, `Mail) VALUES (NULL, '', '', '', '', '')
function insertUser(req, res) {
    con.query(`INSERT INTO usuario VALUES ('', ?, ?, ?,?, ?)`, 
        [req.body.Username, req.body.Password, req.body.Status, req.body.Rol,req.body.Mail], 
        function (err, result) {
        if (err){
            console.log("Error" , err)
            res.status(500).json({err})
        }else
            res.status(200).json("Insert 1 user")
    })
}

module.exports = {
    getUsers,
    setUser,
    insertUser
}