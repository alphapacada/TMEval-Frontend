<template>
    <div>

        <div class="position-relative">
          <tm-hero></tm-hero>
          <evaluation></evaluation>
          <prediction></prediction>
          
         
        </div>
        
    </div>
</template>
<script>
import tmHero from "./components/tmHero";
import Prediction from "./components/Prediction";
import Evaluation from "@/views/components/Evaluation";


export default {
  name: "tmLanding",
  components: {
    tmHero,
    Prediction,
    Evaluation,
  }
};
</script>
