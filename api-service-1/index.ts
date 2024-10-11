Bun.serve({
    fetch(req) {
        return new Response('Server 1 running')
    }
});