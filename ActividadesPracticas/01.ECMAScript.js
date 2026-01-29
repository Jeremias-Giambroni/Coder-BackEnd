/*
Consigna:
Realizar una clase “ProductManager” que gestione un conjunto de productos. 

Aspectos a incluir

Debe crearse desde su constructor con el elemento products, el cual será un arreglo vacío. Cada producto que gestione debe contar con las propiedades:
.title (nombre del producto)
.description (descripción del producto)
.price (precio)
.thumbnail (ruta de imagen)
.code (código identificador)
.stock (número de piezas disponibles)

Debe contar con un método “addProduct” el cual agregará un producto al arreglo de productos inicial.
Validar que no se repita el campo “code” y que todos los campos sean obligatorios
Al agregarlo, debe crearse con un id autoincrementable

Debe contar con un método “getProducts” el cual debe devolver el arreglo con todos los productos creados hasta ese momento

Debe contar con un método “getProductById” el cual debe buscar en el arreglo el producto que coincida con el id
En caso de no coincidir ningún id, mostrar en consola un error “Not found”

*/

class ProductManager {

    constructor(){
        this.products = []
    }

    getProducts(){
        return this.products
    }

    agregarProductos(title, description, price, thumbnail, id, stock){

        let id_product = this.products.length; //Id del producto va a ser la cantidad de productos que se encuentren en el array por instancia + 1 ya que el indice delm array inicializa en 0

        let product = {
            title : title,
            description : description,
            price : price,
            thumbnail : thumbnail,
            id : ++id_product,
            stock : stock
        }
        this.products.push(product) //Enviamos el nuevo producto al Array "products"
        return this.products;
    }

    getProductById(id_product){
        let findProduct = this.products.find(element => element.id == id_product)
        if (findProduct){
            return findProduct
        }else{
            console.log("Not Found");
        }
    }

}

const productManager = new ProductManager();

productManager.agregarProductos("Zapatillas", "Nike SB", 250, "image_url", 1, 30)
productManager.agregarProductos("Campera", "Adidas Rompevientos", 110, "iamge_url", 2, 8)

console.log(productManager.getProducts())

console.log(productManager.getProductById(2));
