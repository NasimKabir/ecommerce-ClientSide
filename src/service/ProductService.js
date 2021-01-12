import axios from'axios';
const API_URL = 'http://localhost:8080/api/v1/product';

class ProductService  {

    getProducts(){
        return axios.get(API_URL);
    }

    getProductById(id){
        return axios.get(API_URL+ '/' +id)
    }

}

export default new ProductService();