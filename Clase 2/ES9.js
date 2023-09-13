// const objeto1 = {
//     prop1: 2,
//     prop2: "b",
//     prop3: true
// }

// const objeto2 = {
//     prop4: false,
//     prop5: [1,2,3,4,5],
// }


// ACTIVIDAD EN CLASE

// const objetos =  [
// 	{
// 		manzanas:3,
// 		peras:2,
// 		carne:1,
// 		jugos:5,
// 		dulces:2
// 	},
// 	{
// 		manzanas:1,
// 		sandias:1,
// 		huevos:6,
// 		jugos:1,
// 		panes:4
// 	}
// ]

// Asi lo resolví yo, pero la segunda parte no pude resolverla

// const objeto1 = objetos[0]
// const objeto2 = objetos[1]

// const objetosJuntos = {...objeto1, ...objeto2}

// console.log(Object.keys(objetosJuntos));

// const soloValues = Object.entries(objetosJuntos)

// const total = soloValues.reduce((init,acum) => init+acum) //18


const objetos = [
    {
        manzanas: 3,
        peras: 2,
        carne: 1,
        jugos: 5,
        dulces: 2
    },
    {
        manzanas: 1,
        sandias: 1,
        huevos: 6,
        jugos: 1,
        panes: 4
    }
]


const newArray = []
let total = 0

objetos.forEach(objeto => {
    
    const keys = Object.keys(objeto);
    const values = Object.values(objeto);

    total += values.reduce((init,acum)=> init+acum)

    keys.forEach(key => {
        if (!newArray.includes(key)) {
            newArray.push(key)
        }
    })
    
})

console.log(newArray);
console.log(total);