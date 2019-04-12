<template>
    <div>
        <img class="vue-logo" alt="Vue logo" src="../assets/logo.png">        
        <h4 class="white-text">Simple Calculator with VueJS</h4>
        <button class="btn" @click="movePage">Take me there</button>
        <!-- <h6 class="white-text">Visit <a href="http://github.com/affand20"><u>my repo</u></a> for full code !</h6> -->
        <br>
        <a href="http://github.com/affand20" class="tooltipped" data-position="right" data-tooltip="Visit my repo for full code !">
            <img class="github-logo" alt="Vue logo" src="../assets/github-120.png">
        </a>        
    </div>
</template>

<script>
export default {
    name: 'Splash',
    methods:{
        movePage(){
            this.$router.push({
                name: 'Calculator'
            })
        }
    }
}
</script>

<style>
html, body{
    background-color: #2196f3;
    color: #fff;
}
.github-logo{
    /* margin-top: 50px; */
    position: absolute;
    bottom: 25px;
    transform: translateX(-50%);
}
a{    
    color: #fff!important;
}
.vue-logo{
    height: 175px;
}
</style>
