import express from "express";

import { createCourses } from "./routes";

const app = express();
app.get("/", createCourses);
app.listen(3333);
