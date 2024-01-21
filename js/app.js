//Prototipo
const fruta=new String("Papaya");
console.log(fruta);

//Protipo String
const fruta2="Mango";
//Nos muestra el tamaño de la cadena
console.log(fruta2.length);
//Transforma la cadena a minuscula
console.log(fruta2.toLowerCase());
//Transforma la cadena a mayuscula
console.log(fruta2.toUpperCase());

//Protipo Number

const peso=85.50;
//formate a un decimal
console.log(peso.toFixed(1));
console.log(peso)
//Redondera un numero
let redondear=Math.round(peso);
console.log(redondear);
//Convertir un string a numero
let pesoJuan="54";
console.log(Number.parseInt(pesoJuan));
//Comprobar si un nuevo es entero
console.log(Number.isInteger(pesoJuan));


//Array
const frutasNuevas=["Papaya","Mango","Melocon"];
console.log(typeof frutasNuevas);
//Calcula el tamaño del arreglo
console.log(frutasNuevas.length);
//Indices
//Obteneo el primer elemento de las frutas
let primeraFruta=frutasNuevas[0];
console.log(primeraFruta);
//Agregar un elemento al final de un arreglo
frutasNuevas.push("Maracuya");
console.log(frutasNuevas);
//Eliminar el ultimo elemento de un arreglo en es te caso maracuya
frutasNuevas.pop();
//Objetos
//Objeto de Cursos
const curso = {
    titulo: "Programación en JavaScript",
    duracion: 8, 
    instructor: "Juan Pérez",
    nivel: "Intermedio"
};
//Mostra la informacion de los cursos
console.log(curso.titulo);
console.log(curso.duracion);
console.log(curso.nivel);
//Arregla propiedad
curso.salon="301";
console.log(curso);
//Quitar una propiead
delete curso.salon;
console.log(curso);
//Unir Objetos
const cicloUniversitario = {
    nombre: "Ingeniería Informática",
    duracion: 4, // en años
    asignaturas: ["Programación", "Bases de Datos", "Redes", "Matemáticas"],
    nivel: "Licenciatura"
}
const unirobjeto= Object.assign(curso,cicloUniversitario);
console.log(unirobjeto);
//uso de la palbra reservada this
const trabajador={
    nombre:"Juan",
    edad:26,
    titulo:"Ingeniero de Sistemas",
    saludar(){
        return `Hola ${this.nombre}`;
    }
}
//Destructuring
const {titulo, duracion, instructor,nivel} =curso;
console.log(titulo);
console.log(duracion);
console.log(instructor);
console.log(nivel);

//Funciones
//Funcion declarativa
function saludo(nombre){
    console.log("Hola "+nombre);
}
saludo("Pepe");
//Funcion por expresion
//Funcion con parametro y argumentos
const saludocompleto=function(nombre, apellido){
        console.log(`Hola me llamo ${nombre} ${apellido}`);
}
saludocompleto("Juan","Perez");
//Comunicar funciones entre si
iniciarApp();

function iniciarApp(){
    console.log('Iniciando App');
    segundaFuncion();
}

function segundaFuncion(){
    console.log('Desde la segunda funcion');
    usuarioAutenticado('Pablo');
}

function usuarioAutenticado(usuario){
    console.log("Autenticando usuario");
    console.log(`Usuario ${usuario} autenticado exitosamente`);
}

//Funciones de flecha
const aprendiendo = function(){
    console.log('Aprendiendo JavaScript');
}
const aprendiendo2 = ()=>{
    console.log('Aprendiendo JavaScript');
}

aprendiendo2();