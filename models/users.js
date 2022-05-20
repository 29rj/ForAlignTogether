const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'api',
  password: '12345',
  port: 5432,
});


const getUser = (req,res)=>{
    const id = req.params.id;
    pool.query('SELECT * FROM users WHERE user_id = $1',[id],(err,result)=>{
      if(result.rowCount == 0){
        return res.status(200).send(`User Does Not Exist With ID : ${id}`);
      }
      else{
        return res.status(200).json(result.rows);
      }
    })
  }
  
  module.exports = {
      getUser
  }
