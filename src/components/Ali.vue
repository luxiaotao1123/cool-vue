<template>
    <div>{{ msg }}</div>
</template>

<script>
import http from '../service.js'

export default {
    data(){
        return{
            msg:'..'
        }
    },
    methods: {
        toAli(){
            let that = this;
            http.get("/api/user/test")
            .then(function(response){
                if(response.status == 200){
                    console.log(response.data);
                    that.msg = response.data;
                }
            })
        }
    },
    mounted(){
        this.toAli();
    }
}
</script>

<style>

</style>
