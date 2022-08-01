//Declara las variables y arreglos
let palabras;
let a;
let palabraEnJuego;
let numCaracteres;
let letraClave = [];
let letraJugada = [];
let LetrasFalladas = [];
let yaEsaLetraJugo = 'no';
let acierto = 0;
let yerros = 0;

// Inicializa el arreglo de palabras
palabras = [
    'ARGENTINA',
    'BRASIL',
    'BOLIVIA',
    'COLOMBIA',
    'CHILE',
    'ECUADOR',
    'URUGUAY',
    'VENEZUELA',
    'PERU'
];

//sortea una de las diez palabras y la guarda en la variable
a = Math.floor(Math.random()*9);
palabraEnJuego = palabras[a];
console.log('La palabra sorteada fue la número ' + a);

//determina el número de caracteres de la palabra sorteada
numCaracteres = palabraEnJuego.length;
console.log('El número de caracteres es ' + numCaracteres);

//Coloca espacios en la interfaz para que aparezcan las letras de la palabraEnJuego.
//Son tantos espacios como caracteres tenga la palabra
for (let i =  0; i < numCaracteres; i++) {
  const espacioLetra = document.createElement('p');
  espacioLetra.setAttribute("id", i)
  const selectTitulo = document.getElementById('titulo');
  document.body.insertBefore(espacioLetra,selectTitulo);
};

//Crear arreglo con las letras de la palabra

for (let i = 0; i < numCaracteres; i++) {
  letraClave.push(palabraEnJuego[i]);

};
console.log(letraClave);



//Detecta el código Ascii de la letra entrada
document.addEventListener('keydown', (event) => {
  let code = event.keyCode;
  let keyValue = event.key;
  
  

  if (code >= 65 && code <= 90) {
    let letra = keyValue.toUpperCase();
    

    for (let i = 0; i < letraJugada.length; i++) {
      if (letraJugada[i] == letra) {
        yaEsaLetraJugo = 'si';
      }
    }

    letraJugada.push(letra);

    if (yaEsaLetraJugo == 'si') {
      alert('Ya probaste con esa letra');
    }else if(yaEsaLetraJugo == 'no'){
      for (let i = 0; i < numCaracteres; i++) {
        if (letra == letraClave[i] ) {
            const insertLetra = document.createTextNode(letra);
            const selecEspacio = document.getElementById(i);
            selecEspacio.replaceChildren(insertLetra);
            acierto = acierto + 1;

            //Está pendiente del número de aciertos
            if (acierto == numCaracteres) {
              alert('GANASTE');
            };
            
            }
       }
    }
    yaEsaLetraJugo = 'no'
    
  }
  
}, false);
