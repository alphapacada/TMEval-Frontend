<template>
  <div>
    <base-checkbox v-model="cctopToggle">CCTOP</base-checkbox>
    <base-checkbox v-model="hmmtopToggle">HMMTOP</base-checkbox>
    <base-checkbox v-model="philiusToggle">Philius</base-checkbox>
    <base-checkbox v-model="otherToggle">Other Prediction</base-checkbox>
    <button @click="test">TEST RESET</button>
  </div>
  
</template>

<script>
export default {
  name: "tools-toggler",
  data(){
    return{
      cctopToggle: false,
      hmmtopToggle: true,
      philiusToggle: true,
      otherToggle: true
    };
  },
  methods:{
    test() {
      console.log("Button clicked!");
      this.cctopToggle = true;
      this.hmmtopToggle = true;
      this.philiusToggle = true;
      this.otherToggle = true;
    }
  }

};
</script>

<style>
</style>
