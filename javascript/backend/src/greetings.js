
const greetings = (_req,res) => {
    console.log('teste');
    const result = res.send('Hello world');
    return result;
};

module.exports = {
    greetings,
};