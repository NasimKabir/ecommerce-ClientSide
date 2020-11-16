import axios from'axios'
const API_URL = 'http://localhost:8080/api/v1/signup'
class UserRegister{
    createEmployee(employee){
        return axios.post(API_URL, employee);
    }

    getEmployees(){
        return axios.get(API_URL);
    }

    createEmployee(employee){
        return axios.post(API_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(API_URL + '/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(API_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(API_URL + '/' + employeeId);
    }
}
export default new UserRegister()