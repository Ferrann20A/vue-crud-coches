<template>
    <div class="container">
        <h1 class="text-primary">Update Coche</h1>
        <br/>
        <div v-if="coche">
            <form v-on:submit.prevent="updateCoche()">
                <label>Id Coche</label>
                <input type="number" class="form-control" disabled v-model="coche.idCoche"/>
                <label>Marca</label>
                <input type="text" class="form-control" v-model="coche.marca"/>
                <label>Modelo</label>
                <input type="text" class="form-control" v-model="coche.modelo"/>
                <label>Conductor</label>
                <input type="text" class="form-control" v-model="coche.conductor"/>
                <label>Imagen</label>
                <input type="text" class="form-control" v-model="coche.imagen"/>
                <br/>
                <button class="btn btn-warning">Update</button>
            </form>
        </div>
    </div>
</template>

<script>
import ServiceCoches from './../services/ServiceCoches'
const service = new ServiceCoches();
    export default{
        name:"UpdateCoche",
        data(){
            return{
                coche: null
            }
        },
        mounted(){
            let id = this.$route.params.id;
            service.findCoche(id).then(result=>{
                this.coche = result;
            })
        },
        methods:{
            updateCoche(){
                service.updateCoche(this.coche).then(result=>{
                    console.log(result);
                    this.$router.push("/coches");
                })
            }
        }
    }
</script>

<style>

</style>