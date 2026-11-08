// Built by Railpack (no Dockerfile); listens on the port the platform gives it.
const http = require("http");
const port = process.env.PORT || 3000;
http.createServer((req, res) => res.end("railpack ok\n")).listen(port, () => console.log(`listening on ${port}`));
