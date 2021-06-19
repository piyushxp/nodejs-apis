console.log(require("./data/Items"));

const fastify = require("fastify")({ logger: false });
const PORT = process.env.PORT || 5000;

fastify.get("/items", (req, res) => {
	res.send({ test: "hello" });
});

fastify.get("/items/:id", (req, res) => {
	let { id } = req.params;

	const item = items.find((item) => item.id == id);
	res.send(item);
});

const start = async () => {
	try {
		await fastify.listen(PORT);
	} catch (error) {
		fastify.log.error(error);
		process.exit(1);
	}
};

start();
