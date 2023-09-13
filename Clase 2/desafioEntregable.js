class ProductManager {

    constructor() {
        this.products = [];
    }

    addproduct = (title, description, price, thumbnail, code, stock) => {

        const product = { title, description, price, thumbnail, code, stock }

        if (title === undefined || description === undefined || price === undefined || thumbnail === undefined || code === undefined || stock === undefined) {
            console.log("campos incompletos");
        } else {
            if (this.products.some(product => product.title === title)) {

                console.log(`Este producto esta repetido`);

            } else {
                if (this.products.length === 0) {
                    product.code = 1
                } else {
                    product.code = this.products[this.products.length - 1].code + 1;
                }
                this.products.push(product)
            }

        }


    }

    getProducts() {
        console.log(instancia.products);
    }

    getProductById(id) {
        instancia.products[id - 1] ? console.log(instancia.products[id - 1])
            : console.log(`Producto no encontrado`);
    }
}

const instancia = new ProductManager
instancia.addproduct(`producto prueba`, `Este es un producto de prueba`, 200, `sin imagen`, 1, 10)
instancia.addproduct(`producto prueba`, `Este es un producto de prueba`, 200, `sin imagen`, 1, 10)
instancia.getProducts()
instancia.getProductById(1)
instancia.getProductById(99)
console.log(instancia.products);