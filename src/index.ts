import http from "http";

import app from "./app";

const PORT = process.env.port || 4000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log("server is running on port : ", PORT);
});

export default app;
