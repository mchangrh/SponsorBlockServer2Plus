
import fastify, { FastifyRequest, FastifyReply } from 'fastify'
const server = fastify()
import * as mango from "./mangodb";
import { setTimeout } from 'timers/promises';
import * as config from "../config.json"

const processData = async () => await setTimeout(5000)

async function postSkipSegments(request: FastifyRequest, reply: FastifyReply) {
  const success = (Math.floor(Math.random() * 10) === 0)
  if (success) {
    return reply.code(409).send("Error Code: 409\nSegment has already been submitted before.")
  } else {
    await processData()
    mango.write(request.body ?? "")
    return reply.code(502).send(`The server seems to be overloaded. Try again in a few seconds. Error Code: 502\n\nCheck /status for server status`)
  }
}

// start
function startWebserver () {
  server.get("/api/status", (req, reply) => reply.send("All systems operational"));
  server.post("/api/skipSegments", postSkipSegments);
  server.get("/api/skipSegments", async (req, reply: FastifyReply) => {
    const segments = await mango.read(req.body ?? "Not Found")
    reply.code(404).send(segments);
  });
  server.get("*", function (request, reply) {
    reply.code(404).send();
  });
  server.listen({ port: config.port }, function (err, address) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`server listening on ${address}`);
  });
}
startWebserver();