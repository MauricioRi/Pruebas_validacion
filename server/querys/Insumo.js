const con = require('../DB/connection')

function getInsumo(req, res) {
    con.query(`SELECT Id_insumo , Name , Quantity , Unitary_quantity , Status , Area_insumo ,Id_unit ,Stock_max ,Stock_min ,Stock_alert ,Cost FROM insumo WHERE Status=1;`,
        function (err, result) {
            if (err) {
                console.log("Error", err)
                res.status(500).json({ err })
            } else
                res.status(200).json({ insumo: result })

        }
    )
}

function setInsumo(req, res) {
    //UPDATE table_name SET field1 = new-value1, field2 = new-value2

    con.query(`UPDATE insumo SET  Name=? , Quantity=? , Unitary_quantity=? , Status=? , Area_insumo=? ,Id_unit=? ,Stock_max=? ,Stock_min=? ,Stock_alert=? ,Cost=?  WHERE Id_insumo ,=?`,
        [req.body.Name, req.body.Quantity, req.body.Unitary_quantity, req.body.Status, req.body.Area_insumo, req.body.Id_unit, req.body.Stock_max, req.body.Stock_min, req.body.Stock_alert, req.body.Cost, req.body.Id_insumo],
        function (err, result) {
            if (err) {
                console.log("Error", err)
                res.status(500).json({ err })
            } else
                res.status(200).json("Update 1 insumo")
        }
    )
}
//INSERT INTO `insumo` (`Id_insumo`, `Name`, `Quantity`, `Unitary_quantity`, `Status`, `Area_insumo`, `Id_unit`, `Stock_max`, `Stock_min`, `Stock_alert`, `Cost`) VALUES (NULL, '', '', '', '1', '', '', '', '', '', '')
function insertInsumo(req, res) {
    con.query(`INSERT INTO insumo VALUES ("", ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [req.body.Name, req.body.Quantity, req.body.Unitary_quantity, req.body.Status, req.body.Area_insumo, req.body.Id_unit, req.body.Stock_max, req.body.Stock_min, req.body.Stock_alert, req.body.Cost],
        function (err, result) {
            if (err) {
                console.log("Error", err)
                res.status(500).json({ err })
            } else
                res.status(200).json("Insert 1 insumo")
        })
}

module.exports = {
    getInsumo,
    setInsumo,
    insertInsumo
}