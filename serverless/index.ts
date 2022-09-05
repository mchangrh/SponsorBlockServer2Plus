export default {
	async fetch(
		request: Request,
		env,
		ctx: ExecutionContext
	): Promise<Response> {
		return await handleRequest(request)
	},
};

const processData = async () => await scheduler.wait(5000)

async function postSkipSegments(request: Request): Promise<Response> {
  const success = (Math.floor(Math.random() * 10) === 0)
  if (success) {
    return new Response("Error Code: 409\nSegment has already been submitted before.", {
      status: 409
    })
  } else {
    await processData()
    return new Response(`The server seems to be overloaded. Try again in a few seconds. Error Code: 502\n\nCheck /status for server status`, {
      status: 502
    })
  }
}

async function handleRequest(request: Request): Promise<Response> {
  const { pathname, searchParams } = new URL(request.url)
  const method = request.method
  if (pathname === "/") {
    return new Response(null, { status: 301, headers: { Location: "https://github.com/mchangrh/SponsorBlockServer2Plus#readme" } })
  } else if (pathname === "/api/status") {
    return new Response("All systems operational")
  } else if (pathname === "/api/skipSegments" && method === "GET") {
    return new Response("Not Found", { status: 404 })
  } else if (pathname === "/api/skipSegments" && method === "POST") {
    return postSkipSegments(request)
  } else if (request.method === "POST") {
    await processData()
    return new Response(null, { status: 200})
  } else {
    return new Response(null, { status: 404 })
  }
}