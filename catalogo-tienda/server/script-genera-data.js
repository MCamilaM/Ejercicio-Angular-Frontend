// database-faker.js

let faker = require('faker/locale/es');
let fs = require('fs');

let generateProducts = () => {
    let productos = [];

    for (let id = 1; id <= 20; id++) {
        productos.push({
            "id": id,
            "nombre": faker.commerce.productName(),
            "descripcion": faker.commerce.productDescription(),
            "precio": faker.commerce.price(),
            "cantidad": faker.datatype.number(99),
            "imagen": faker.image.nature(width = 640, height = 480, randomize =  true) 
        });
    }
    //faker.random.image()
    return { "productos": productos }
}
const generateData = generateProducts();
fs.writeFileSync('./server/database.json', JSON.stringify(generateData, null, "\t"))
