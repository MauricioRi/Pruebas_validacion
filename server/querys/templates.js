const con = require('../DB/connection')

function gettemplates(req, res) {
    con.query(`SELECT idTemplate, jsonTemplate FROM templates`, 
        function (err, result) {
            if (err){
                console.log("Error" , err)
                res.status(500).json({err})
            }else
                res.status(200).json({ templates :result })
        }
    )
}

module.exports = {
    gettemplates
}