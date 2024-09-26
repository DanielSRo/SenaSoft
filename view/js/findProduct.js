ListProduct()
function ListProduct() {

    let objData = { "listUsers": "ok", "container": "products" }

    let objProduct = new Product(objData)
    objProduct.listProduct()
}