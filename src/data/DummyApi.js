export class DummyApi {
    static BASE_URL = 'https://dummyjson.com/'; // EndPoint
    static GET_PRODUCTS = 'products?limit=50';
    static GET_PRODUCTS_INFO = (id) => `products/${id}`;
    static HEADERS = { 'app-id': '62e1a2cc275dc21b56032db4' };

    static getProducts() { //getUsers retorna una Promise

        return fetch(this.BASE_URL + this.GET_PRODUCTS, {
            method: 'GET',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
                ...this.HEADERS
            }
        });

    }

    static getProductsInfo(id) {

        return fetch(this.BASE_URL + this.GET_PRODUCTS_INFO(id), {
            method: 'GET',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
                ...this.HEADERS
            }
        });

    }

}