Bun.serve({
    fetch(req) {
        return new Response('Server 2 running')
    }
});