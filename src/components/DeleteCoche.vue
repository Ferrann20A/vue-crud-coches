<template>
    <div class="container">
        <h1 class="text-danger">Delete Coche</h1>
    </div>
</template>

<script>
import ServiceCoches from './../services/ServiceCoches';
const service = new ServiceCoches();
    export default{
        name:"DeleteCoche",
        mounted(){
            let id = this.$route.params.id;
            service.deleteCoche(id).then(result=>{
                console.log(result);
                this.$router.push("/coches");
            })
        }
    }
</script>

<style>

</style>