import axios from 'axios';
import Global from './../Global';

export default class ServiceCoches{
    getCoches(){
        return new Promise(function(resolve){
            let request = "api/coches";
            let url = Global.URL_ApiCoches + request;
            let coches = [];
            axios.get(url).then(response=>{
                coches = response.data;
                resolve(coches);
            })
            return coches;
        })
    }

    insertarCoche(coche){
        return new Promise(function(resolve){
            let request = "api/coches/insertcoche";
            let url = Global.URL_ApiCoches + request;
            axios.post(url,coche).then(response=>{
                resolve(response);
            })
        })
    }
}