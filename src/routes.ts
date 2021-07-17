import { Request, Response } from "express";

import CreateCourseService from "./CreateCourseService";

export function createCourses(request: Request, response: Response) {
  CreateCourseService.execute({
    name: "NodeJS",
    educator: "Dani",
    duration: 19,
  });

  CreateCourseService.execute({
    name: "ReactJS",
    educator: "Diego Fernandes",
  });
  return response.send();
}
