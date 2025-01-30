const Fastify = require('fastify');

const fastify = new Fastify({
    logger: true,
});

fastify.get('/', (request , replay ) => {
    return {
        Message : "Hello world"
    }
} )

const start = async () => {
    const port = process.env.PORT || 4000;

    try {
            await fastify.listen({port : port})
            console.log(`server start at http://localhost:${port}`);
        
    } catch (error) {
        fastify.log.error(error);
        process.exit(1);
    }
}

start();