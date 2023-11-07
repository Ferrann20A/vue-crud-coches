<template>
    <div class="container">
        <h1 class="text-success">Create Coche</h1>
        <br/>
        <form v-on:submit.prevent="insertCoche()">
            <label>Id Coche</label>
            <input type="number" class="form-control" v-model="coche.idCoche"/>
            <label>Marca</label>
            <input type="text" class="form-control" v-model="coche.marca"/>
            <label>Modelo</label>
            <input type="text" class="form-control" v-model="coche.modelo"/>
            <label>Conductor</label> 
            <input type="text" class="form-control" v-model="coche.conductor"/>
            <label>Imagen</label>
            <input type="text" class="form-control" v-model="coche.imagen"/>
            <br/>
            <button class="btn btn-success">Insertar Coche</button>
        </form>
    </div>
</template>

<script>
import ServiceCoches from './../services/ServiceCoches';
const service = new ServiceCoches();
    export default{
        name:"CreateCoche",
        data(){
            return{
                coche:{
                    idCoche:0,
                    marca:"",
                    modelo:"",
                    conductor:"",
                    imagen:""
                }
            }
        },
        methods:{
            insertCoche(){
                service.insertarCoche(this.coche).then(result=>{
                    console.log(result);
                    this.$router.push("/coches");
                })
            }
        }
    }
</script>

<style>

</style>