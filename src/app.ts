import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

// middlewares
import errorMiddleware from "./middlewares/errorMiddleware";

// routes
import demo from "./routes/demo";

const app = express();

const options = {
  origin: "*",
  credentials: true,
};

app.use(cors(options));
app.use(bodyParser.json());

const baseURL = "/api/" + process.env.API_VERSION || "v1";

app.use(baseURL.concat("/democall"), demo);

app.use(errorMiddleware);

export default app;
