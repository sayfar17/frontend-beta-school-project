import { ROLES } from './roles';

export const INITIAL_USERS = [
  { id: 1, name: 'Admin Principal', email: 'admin@colegio.edu.pe', role: ROLES.ADMIN, password: 'admin' },
  { id: 2, name: 'Prof. Carlos Perez', email: 'docente@colegio.edu.pe', role: ROLES.DOCENTE, password: 'profe' },
  { id: 3, name: 'Est. Maria Lopez', email: 'alumno@colegio.edu.pe', role: ROLES.ALUMNO, password: 'est' },
  { id: 4, name: 'Sr. Juan Lopez', email: 'padre@colegio.edu.pe', role: ROLES.PADRE, password: 'padre' }
];

export const INITIAL_ALUMNOS = [
  { id: 101, dni: '76543210', nombres: 'Maria', apellidos: 'Lopez', grado: '3ro Secundaria', seccion: 'A', estado: 'Matriculado', idPadre: 4 },
  { id: 102, dni: '76543211', nombres: 'Jose', apellidos: 'Gomez', grado: '3ro Secundaria', seccion: 'A', estado: 'Matriculado', idPadre: null },
];
