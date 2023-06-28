const tasksModel = require('./models/tasksModel.js');
try {
    const findAll = async () => {
        const tasks = await tasksModel.findAll();
        return tasks;
    };
    
    module.exports = {
        findAll,
    };
} catch(err) {
    console.error('Error in tasksService, Error: ',err);
}
