<template>
    <div class="container">
        <h1>Coches</h1>
        <br/>
        <div v-if="status === true">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Conductor</th>
                        <th>Imagen</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="c in coches" :key="c">
                        <td>{{c.marca}}</td>
                        <td>{{c.modelo}}</td>
                        <td>{{c.conductor}}</td>
                        <td><img :src="c.imagen" alt="img_coche" width="200"/></td>
                        <td><router-link class="btn btn-outline-primary" :to="`/update/${c.idCoche}`">Update</router-link></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import ServiceCoches from './../services/ServiceCoches';
const service = new ServiceCoches();
    export default{
        name:"CochesComponent",
        data(){
            return{
                coches:[],
                status:false
            }
        },
        mounted(){
            service.getCoches().then(result=>{
                this.coches = result;
                this.status = true;
            })
        }
    }
</script>

<style>

</style>