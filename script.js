let arrayHeroes = [
    { "name": "Zeus", "power": 300, "price": 10000 },
    { "name": "Hades", "power": 200, "price": 6000 },
    { "name": "Poseidon", "power": 175, "price": 5000 },
    { "name": "Achille", "power": 165, "price": 4500 },
    { "name": "Cyclope", "power": 100, "price": 3000 },
    { "name": "Titan", "power": 250, "price": 8000 },
    { "name": "Dragon Noir", "power": 220, "price": 6800 },
    { "name": "Chevalier", "power": 65, "price": 1800 }
]

// forEach:permet de faire une boucle dans un tableau
// Ici ça nous affiche tour à tour le nom des differents personnages

/*
arrayHeroes.forEach(element => {
    console.log(element.name);
})
*/

/*
resultat:

Zeus
Hades
Poseidon
Achille
Cyclope
Titan
Dragon Noir
Chevalier
*/

//----------------------------------------------------------

//Map:prend un tableau et le convertie en un autre tableau
/*cree un tableau qui va contenir les personnages .Pour cela on utilise le tableau
peronnage et on fait un map dessus. Pour chaque personnage on va recuperer son nom.*/

/*
let heroes = arrayHeroes.map(element => {
    return element.name
})

console.log(heroes);
*/

/*
resultat:
[
    'Zeus',
    'Hades',
    'Poseidon',
    'Achille',
    'Cyclope',
    'Titan',
    'Dragon Noir',
    'Chevalier'
  ]
  */

//-------------------------------------------------------

//le prix des personnages en reduction de 30%
/*
let reduction = arrayHeroes.map(element => {
    return element.price - 0.3 * element.price
})

console.log(reduction);
*/

/*
[
    7000, 4200, 3500,
    3150, 2100, 5600,
    4760, 1260
  ]
*/

//------------------------------------------

//filter : permet de realiser un filtre sur un tableau et de recuperer une partie de ce tableau
//recuperer les persos dont la puissance est superieur a 150

/*
let powerful = arrayHeroes.filter(element => {
    return element.power > 150
})

console.log(powerful);
*/

/*
  [
    { name: 'Zeus', power: 300, price: 10000 },
    { name: 'Hades', power: 200, price: 6000 },
    { name: 'Poseidon', power: 175, price: 5000 },
    { name: 'Achille', power: 165, price: 4500 },
    { name: 'Titan', power: 250, price: 8000 },
    { name: 'Dragon Noir', power: 220, price: 6800 }
  ]
*/

//-----------------------------------------------------

// find : permet de trouver un element dans un tableau

// Que veut dire ce qui suit : trouve moi l'element dont le nom est achille. Il va renvoyer l'objet achille dans son integralité

/*
let achille = arrayHeroes.find(element => {
return element.name === "Achille"
})

console.log(achille)
*/

//{ name: 'Achille', power: 165, price: 4500 }

//---------------------------------------------

//some : renvoie true ou false si des elements respectent une condition dans le tableau. 
//est ce quil y a des elements dans le tableau dont le prix dépasse les 6000

/*
let expensive = arrayHeroes.some(element => {
  return element.price > 6000
})

console.log(expensive)
*/

// true

//-----------------------------------------------------------

/*every ( ressemble beaucoup à some seulement cette fois ci elle renverra true 
si tous les elements du tableau respectent une certaine condition*/
// ici on se pose la question"est ce que tous les elements ont la puissance qui depasse 100?""

/*
let togetherStrong = arrayHeroes.every(element => {
   return element.power > 10
})

console.log(togetherStrong)
*/

//true ( tous les elements du tableau ont une puissance qui depasse 10)

//----------------------------------------------------------------------------

//reduce : permet de faire une operation sur un tableau et renvoyer une combinaison des opérations
//je veux par exemple la somme des prix de tous les personnages
/*2 parametres :
- 'acc' est un accumulateur qui va s'accumuler au fur et a mesure 
- 'element' actuellement analysé et traversé par la boucle.
 Il y a aussi un autre parametre '0' qui est la valeur de depart.*/
/*En effet,quand on rentre dans le reduce, la valeur de depart c'est 0 et a chaque fois qu'on 
rencontre un prix, on l'ajoute a l'accumulateur ( 0 + 10000 + 6000 + 5000+ ...)*/

/*
let pricesSum = arrayHeroes.reduce((acc, element)=>{
    return acc + element.price
},0)

console.log(pricesSum)
*/

// 45100

//----------------------------------------------------------------------------

//include(ne prend pas une fonction mais un simple argument)

let notes = [1, 4, 5, 20];
let isPresent = notes.includes(20);
console.log(isPresent);
// true


