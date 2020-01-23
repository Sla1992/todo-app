import axios from 'axios'

class HelloWorldService {
    executeHelloWorldService() {
        //console.log('executed service)
        return axios.get('http://localhost:8080/hello-world');

    }

    executeHelloWorldBeanService() {
        //console.log('executed service)
        return axios.get('http://localhost:8080/hello-world-bean');
    }

    executeHelloWorldPathVariableService(name){
        let username = 'Frolian'
        let password = 'sml12345'

        let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password);

        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`),
            {
                headers : {
                    authorization: basicAuthHeader
                }
            }
    }

    executeHelloWorldError(){
        return axios.get(`http://localhost:8080/hello-world/error`)
    }
}

export default new HelloWorldService()