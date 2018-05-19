class ComponentApi {

    static getAllComponents(){
        return fetch('http://localhost:4000/api/components').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static getComponent(id){
        return fetch('http://localhost:4000/api/components/' + id).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static installComponent(id){
        return fetch('http://localhost:4000/api/components/' + id + '/install').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}

export default ComponentApi;
