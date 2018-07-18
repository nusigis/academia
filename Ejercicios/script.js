'use strict';
(() => {
    const rAppend = appendLI('reprobados');
    const aAppend = appendLI('asesorias');
    const bAppend = appendLI('becados');
    // const alumnos = window.alumnos;
    // const alumnosState = alumnosService({ alumnos:alumnos });
    const alumnosState = alumnosService({ alumnos: [] });
    //informa sobre cambios:
    imprimirAlumnos(alumnosState.getAlumnos());
    alumnosState.subscribe((state) => {
        console.log('subscribe', state);
        limpiar();
        imprimirAlumnos(state.alumnos);
    });
    //document.querySelectorAll('ul');//en consola(en practica)
    //function imprimirAlumnos-----------------------------------
    function imprimirAlumnos(alumnos) {
        alumnos.forEach(alumno => {
            bAppend(alumno.nombre);
            if (alumno.promedio < 30) {
                rAppend(alumno.nombre);
            }
            if (alumno.promedio >= 30 && alumno.promedio < 80) {
                aAppend(alumno.nombre);
            }
            if (alumno.promedio >= 80 || (alumno.destacado && alumno.promedio >= 30)) {
                bAppend(alumno.nombre);
            }
        });
    }
    //==========================================================

    //function appendLI------------------------------------------
    function appendLI(id) {
        const list = document.getElementById(id);
        return (text) => {
            const listItem = document.createElement('li');
            listItem.appendChild(document.createTextNode(text));
            list.appendChild(listItem);
        }
    }
    //==========================================================

    //FETCH /alumnos--------------------------------------------
    //http://localhost:3000/alumnos
    fetch('/alumnos')//fetch('/alumnos?promedio=1')
        .then((res) => res.json())
        .then((alumnos) => alumnos.forEach((alumno) => alumnosState.agregaAlumno(alumno)));
    // .then((res) => {
    //     const resJSON = res.json();
    //     console.log(resJSON);
    //     return resJSON;
    // })
    // .then((alumnos) => {

    // console.log(alumnos);
    // //const alumnosNames = alumnos.map((car) => car.name);//map sirbe paraa trasformar un array en otro array
    // // const alumnosNames = alumnos.map((alumno) => {
    // //     return {
    // //         nombre: alumno.nombre,
    // //         promedio: alumno.promedio
    // //     }
    // // });
    // const initialValue = {
    //     alumnosReprobados: [],
    //     alumnosAsesorias: [],
    //     alumnosBecados: []
    // }
    // const { alumnosReprobados, alumnosAsesorias, alumnosBecados } = alumnos.reduce((acumulador, alumno) => {
    //     if (alumno.promedio < 30) {
    //         acumulador.alumnosReprobados.push(alumno);
    //     }
    //     if (alumno.promedio >= 30 && alumno.promedio < 80) {
    //         acumulador.alumnosAsesorias.push(alumno);
    //     }
    //     if (alumno.promedio >= 80 || (alumno.destacado && alumno.promedio >= 30)) {
    //         acumulador.alumnosBecados.push(alumno);
    //     }
    //     return acumulador;
    // }, initialValue);

    // alumnosReprobados.forEach(el => rAppend(el.nombre));
    // alumnosAsesorias.forEach(el => aAppend(el.nombre));
    // alumnosBecados.forEach(el => bAppend(el.nombre));

    // //imprime el promedi de los alumnos reprobados:
    // const promR = promedios(alumnosReprobados) + "";
    // const list = document.getElementById('reprobados');
    // const listItem = document.createElement('li');
    // listItem.appendChild(document.createTextNode(promR));
    // list.appendChild(listItem);
//})

function limpiar(){
    document.getElementById('reprobados').innerHTML = '';
    document.getElementById('asesorias').innerHTML = '';
    document.getElementById('becados').innerHTML = '';
}

function promedios(alumnos) {
    let sumaCalif = 0;
    alumnos.forEach(alumno => {
        sumaCalif += alumno.promedio;
    });
    return sumaCalif / alumnos.length;
}
// .then((alumnos) => {
//     console.log(alumnosNames);
//     imprimirAlumnos(alumnos);
// });
//==========================================================

document.getElementById('borrar').addEventListener('click', (e) => {
    //console.log(e.target.dataset);
    alumnosState.agregaAlumno({ nombre: 'Ismael', promedio: 4, destacado: true });
});

    //function borrarAlumno-------------------------------------
    // function borrarAlumno(){
    //     fetch('/alumnos?promedio=1')
    //     .then((res) => {
    //         return res.json();
    //     })
    //     .then((alumnos) => {

    //     })
    // }
    //==========================================================


}) ();
