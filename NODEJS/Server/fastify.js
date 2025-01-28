const Fastisy = require('fastify');

const fastify = new Fastisy({
    logger : true,
});


fastify.get('/', (req , res) => {
    return {
        message : "hello "
    }
})

const Start = async() => {
    const PORT = process.env.PORT || 4000;

    try {
        await fastify.listen({ port : PORT});
        console.log(`Server Start at http://localhost:${PORT}`)    
    } catch (error) {
        fastify.logger.error(error);
        process.exit(1);
    }
    
};

Start();

