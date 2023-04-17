// Se creará una instancia de la clase “ProductManager”

class ProductManager {
  constructor() {
    this.products = [];
  }

  getProducts() {
    return this.products;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    const id = Math.random().toString(36).substring(2, 15);
    const product = { id, title, description, price, thumbnail, code, stock };
    const productIndex = this.products.findIndex(p => p.code === code);

    if (productIndex !== -1) {
      return new Error('El código del producto ya existe');
    }

    this.products.push(product);

    return product;
  }

  getProductById(id) {
    const product = this.products.find(p => p.id === id);

    if (!product) {
      return new Error('Producto no encontrado');
    }

    return product;
  }
}

const productManager = new ProductManager();

// Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
console.log(productManager.getProducts()); // []

// El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE
const result1 = productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
if (result1 instanceof Error) {
  console.error(result1.message); // El código del producto ya existe
} else {
  console.log(result1);
}

// Se llamará el método getProducts nuevamente, esta vez debe aparecer el producto recién agregado
console.log(productManager.getProducts()); // [{ id: 'aleatorio', title: 'producto prueba', description: 'Este es un producto prueba', price: 200, thumbnail: 'Sin imagen', code: 'abc123', stock: 25 }]

// Llamar al método addProduct con los mismos campos de arriba, debe devolver un error porque el código estará repetido.
const result2 = productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
if (result2 instanceof Error) {
  console.error(result2.message); // El código del producto ya existe
} else {
  console.log(result2);
}

// Llamar al método getProductById
const result3 = productManager.getProductById('aleatorio');
if (result3 instanceof Error) {
  console.error(result3.message); // Producto no encontrado
} else {
  console.log(result3); // { id: 'aleatorio', title: 'producto prueba', description: 'Este es un producto prueba', price: 200, thumbnail: 'Sin imagen', code: 'abc123', stock: 25 }
}

// Llamar al método getProductById con un id que no existe, debe devolver un error
const result4 = productManager.getProductById('idinexistente');
if (result4 instanceof Error) {
  console.error(result4.message); // Producto no encontrado
} else {
  console.log(result4);
}