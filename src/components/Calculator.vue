<template>
  
  <div class="container">
    <div>
      <a id="btn-back" @click="goBack"><i class="material-icons">chevron_left</i><span>Go back</span></a>    
    </div>    
    <div class="container">
      <div id="output">
      <h3>{{number}}</h3>
    </div>
    <div class="row">
      <div class="col s12">
        <h4 class="calculator-layout" @click="removeLast"><i class="material-icons">backspace</i></h4>
      </div>
      <div class="col s3 waves-effect waves-light">
        <h4 class="calculator-layout" @click="add('1')">1</h4>
      </div>
      <div class="col s3">
        <h4 class="calculator-layout" @click="add('2')">2</h4>
      </div>
      <div class="col s3">
        <h4 class="calculator-layout" @click="add('3')">3</h4>
      </div>
      <div class="col s3">
        <h4 class="calculator-layout" @click="add('*')">x</h4>
      </div>
      <div class="col s3 waves-effect waves-light">
        <h4 class="calculator-layout" @click="add('4')">4</h4>
      </div>
      <div class="col s3">
        <h4 class="calculator-layout" @click="add('5')">5</h4>
      </div>
      <div class="col s3">
        <h4 class="calculator-layout" @click="add('6')">6</h4>
      </div>
      <div class="col s3">
        <h4 class="calculator-layout" @click="add('-')">-</h4>
      </div>
      <div class="col s3 waves-effect waves-light">
        <h4 class="calculator-layout" @click="add('7')">7</h4>
      </div>
      <div class="col s3">
        <h4 class="calculator-layout" @click="add('8')">8</h4>
      </div>
      <div class="col s3">
        <h4 class="calculator-layout" @click="add('9')">9</h4>
      </div>
      <div class="col s3">
        <h4 class="calculator-layout" @click="add('+')">+</h4>
      </div>
      <div class="col s3 waves-effect waves-light">
        <h4 class="calculator-layout" @click="clearField">C</h4>
      </div>
      <div class="col s3">
        <h4 class="calculator-layout" @click="add('0')">0</h4>
      </div>
      <div class="col s3">
        <h4 class="calculator-layout" @click="add('/')">/</h4>
      </div>
      <div class="col s3">
        <h4 class="calculator-layout" @click="getResult">=</h4>
      </div>
    </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  props: {
    msg: String
  },
  data: ()=>{
    return{
      number : '0',      
    }
  },
  methods: {
    add(numberOrOperator){
      if (this.number==='0') {              
        if (numberOrOperator!='*' && numberOrOperator!='-' && numberOrOperator!='+' && numberOrOperator!='/') {
          this.number = numberOrOperator;
          this.lastNumber = this.number;
        }
      } else{                
        this.number += numberOrOperator;
      }
    },
    clearField(){
      this.number = '0';      
    },
    getResult(){
      this.number = eval(this.number);      
    },
    goBack(){
      this.$router.go(-1);
    },
    removeLast(){
      this.number = this.number.substring(0,this.number.length-1);
    }
  }
}
</script>

<style>
#output{
  padding: 10px 20px;
  background-color: #eeeeee;
  overflow-x: scroll;
}
#output h3{
  text-align: right;  
}
.calculator-layout{
  background-color: #eeeeee;
  padding-top: 10px;
  padding-bottom: 10px;  
}
.calculator-layout:hover{
  cursor: pointer;
}
.container{
  margin-top: 20px;
}
#btn-back span{
  vertical-align: middle;
}
#btn-back i{
  vertical-align: top
}
#app{
  margin-top: 45px;
}
</style>
