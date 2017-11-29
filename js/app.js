// guarda en un array las sedes
var sede = Object.keys(data); // ["AQP", "CDMX", "LIM", "SCL"]
console.log(sede);
// guarda en un array los objetos de cada sede es decir las generaciones
var generation = Object.values(data); // [{…}, {…}, {…}, {…}] tiene el valor de AQP, CDMX, LIM, SCL
console.log(generation);
// guarda las generaciones en un array
var generationAarequipa = Object.keys(generation[0]); // ["2016-2", "2017-1"]
console.log(generationAarequipa);
// guarda en un array los objetos de las generaciones que guardan students y ratings
var genArequipaObject = Object.values(generation[0]); // [{…}, {…}] tiene el valor 2016-2, 2017-1
var genMexicoObject = Object.values(generation[1]);
var genLimaObject = Object.values(generation[2]);
var genSantiagoObject = Object.values(generation[3]);

console.log(genArequipaObject);
console.log(genMexicoObject);
console.log(genLimaObject);
console.log(genSantiagoObject);
var areStudents= (Object.values(generation[0])[0])["students"]
//estudiantes y rating de arequipa
Object.values(generation[0])
//estudiantes y rating del 2016-2
Object.values(generation[0])[0]



var otro = data[sede[2]]['2016-2'];
var selectSede = document.getElementById('sede');
var selectGeneration = document.getElementById('generation');
var container = document.getElementById('container');
var AREQUIPA = 'arequipa';
var LIMA = 'lima';
var SANTIAGO = 'santiago';
var MEXICO = 'mexico'

function showPromo(event) {
  switch (true) {
  case event.target.value === 'LIM2016-2':
    // console.log(genLimaObject[0]);
    showStudents(genLimaObject[0], LIMA)
    // deberia tener aca alguna funcion que imprima todos los datos de lima
    break;
  case event.target.value === 'LIM2017-1':
    console.log(genLimaObject[1]);
    break;
  case event.target.value === 'LIM2017-2':
    console.log(genLimaObject[2]);
    break;
  case event.target.value === 'ARE2016-2':
  console.log(genArequipaObject[0]);
  break;
  case event.target.value === 'ARE2017-1':
  console.log(genArequipaObject[1]);
  break;
  case event.target.value === 'CHILE2016-2':
  console.log(genSantiagoObject[0]);
  break;
  case event.target.value === 'CHILE2017-1':
  console.log(genSantiagoObject[1]);
  break;
  case event.target.value === 'CHILE2017-2':
  console.log(genSantiagoObject[2]);
  break;
  case event.target.value === 'MEX2017-1':
    console.log(genMexicoObject[0]);
    break;
  case event.target.value === 'MEX2017-2':
  console.log(genMexicoObject[1]);
  break;
  }
}
selectSede.addEventListener('change', showPromo);

function showStudents(arr, promo) {

  for (var i = 0; i < arr.length; i++)
    createData(promo, arr[i]);
}

function createData(promo, nombre) {
  var element = document.createElement('div');
  container.appendChild(element)


  /* subImagesContainer.appendChild(img); */
  imagesContainer.appendChild(img);
}


// function info (){
    

// function showGeneration(sede, generation) {
//   for(i = 0; i> sede.length; i++)
// }


// Puedes hacer uso de la base de datos a través de la variable `data`
// console.log(data);