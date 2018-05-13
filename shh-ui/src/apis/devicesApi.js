class DevicesApi {
    static getAllDevices(){
        return fetch('http://localhost:4000/api/home/devices').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}

export default DevicesApi;
