import axios_service from "./axios_service";
var config = require('../config/config')
class CustomerService {
    constructor() {
        this.axiosService = new axios_service();
    }
    customer(data) {
        let url = config.url + 'customerDetails'
        return this.axiosService.post(url, data, false);
    }
}
export default new CustomerService();