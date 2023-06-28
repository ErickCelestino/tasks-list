const tasksService = require('./tasksService.js');
try{
    const findAll = async (_req,res) => {
        const tasks = await tasksService.findAll();
        return res.status(200).json(tasks);
    };

    module.exports = {
        findAll,
    };
}catch(err) {
    console.error('Error in tasksService, Error: ',err);
}


