import axios from 'axios'



const API_URL = 'http://localhost:5000';
let $axios = axios.create({
        baseURL: 'http://192.168.254.103:5000/api/v1/',
        timeout: 0,
        headers: { 'Content-Type': 'application/json' },
        // credential: 'same-origin'
    })
    // https://github.com/gtalarico/flask-vuejs-template/blob/master/src/backend.js

export default {
    getBaseURL() {
        return $axios.defaults.baseURL;
    },
    fetchResource() {
        return $axios.get(`resource/xxx`)
            .then(response => response.data)
    },

    fetchSecureResource() {
        return $axios.get(`secure-resource/zzz`)
            .then(response => response.data)
    },
    getLongTask(task_id) {
        return $axios.get(`longtask/${task_id}`)
            .then(response => response.data)
    },
    getPredResults(task_id) {
        return $axios.get(`predict/${task_id}`)
    },
    postLongTask() {
        return $axios.post('longtask/')
            .then(response => response.data)

    },
    getPredTools() {
        return $axios.get('predict/tools')
            .then(response => response.data)
    },
    postFasta(data) {
        return $axios.post('predict/', data)
            .then(response => response.data)
            .catch(error => {
                console.log("error")
                console.log(error)
            })
    },
    getProteins(query) {
        console.log('backend: ', query);
        return $axios.get('proteins', {
                params: query,
                timeout: 100000
            })
            .then(response => response.data)
    },
    getDownloadable(name) {
        return $axios.get(`files/datasets/prediction/${name}`)
            .then(response => response)
    }


    // headers: { 'Access-Control-Allow-Origin': true }
    //github.com/axios/axios#handling-errors
    // axios.put(this.apiBaseEndpoint + '/' + id, input)
    //   .then((response) => {

    //   })
    //   .catch(error) => {
    //     if (error.response) {

    //     } else if (error.request) {
    //       console.log(error.request)
    //     } else {
    //       console.log('Error', error.message);

    //     }
    //     console.log(error.config)
    //   });


}