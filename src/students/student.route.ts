import { Hono } from 'hono';
import { createStudent, getStudents, updateStudent, deleteStudent } from './student.controller.js';

const studentRoute = new Hono();

studentRoute.get('/', getStudents);
studentRoute.post('/', createStudent);
studentRoute.put('/:id', updateStudent);
studentRoute.delete('/:id', deleteStudent);

export default studentRoute;