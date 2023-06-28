const pool = require('../../database/postgres.connection.js');

try {
    const findAll = async () => {
        const tasks = await pool.query('select * from tasks');
        return tasks.rows;
    };
    
    module.exports = {
        findAll,
    };
}catch(err) {
    console.error('Error in tasksModel, Error: ',err);
}