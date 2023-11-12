import express,{ Express } from "express";
import path from "path";
import { routeNotFound, errorHandler } from "./middlewares/handler";
import userRouter from "./routes/user.route";
import movieRouter from "./routes/movie";
import cors from "cors";

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"../","public")));
app.use(cors({
  origin: "*"
}));

// routes
app.use("/api/",userRouter);
app.use("/api/movies/", movieRouter);

// route not found
app.use(routeNotFound);

// error handler
app.use(errorHandler);


export default app;
