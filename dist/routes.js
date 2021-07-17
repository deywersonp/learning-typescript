"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourses = void 0;
var CreateCourseService_1 = __importDefault(require("./CreateCourseService"));
function createCourses(request, response) {
    CreateCourseService_1.default.execute({
        name: "NodeJS",
        educator: " Dani",
        duration: 19,
    });
    CreateCourseService_1.default.execute({
        name: "ReactJS",
        educator: "Diego Fernandes",
    });
    return response.send();
}
exports.createCourses = createCourses;
