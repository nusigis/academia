'use strict';
(function(global){
    const alumnosService = (initialState) => {
        const state = initialState;
        const listeners = [];
        return {
            getAlumnos: () => ([...state.alumnos]),
            agregaAlumno: (alumno) => {
                state.alumnos.push(alumno);
                console.log(state);
                propagate();
            },
            agregarAlumnos: (alumnos) => {
                state.alumnos = state.alumnos.concat(alumnos);
                propagate();
            },
            subscribe: (fn) => {
                listeners.push(fn);
                return () => {
                    const index = listeners.indexOf(fn);
                    listeners.splice(index,1);
                }
            }
        }
        function propagate() {
            listeners.forEach((listener)=> listener(state) );
        }
    }

    global.alumnosService = alumnosService;
})(window);