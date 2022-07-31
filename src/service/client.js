import http from "../common/http-common";

class Client {
    getAll(path, params) {
        return params ? http.get(`${path}`, { params }) : http.get(`${path}`);
    }
    get(path) {
        return http.get(`${path}`);
    }
    create(path, data) {
        return http.post(`${path}`, data);
    }
    update(path, data) {
        return http.put(`${path}`, data);
    }
    delete(path) {
        return http.delete(`${path}`);
    }
}
export default new Client();