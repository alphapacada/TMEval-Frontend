<template>
   
     <section class="section bg-secondary section-lg">
         <div class="container">
             <div class="pt-5">
                <base-button size="sm" type="primary" class="btn-tooltip"
               v-b-tooltip.hover.left title="Tooltip on left">On left
                </base-button>
                 <base-button size="sm" type="default"
               v-b-popover.hover.top ="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'"
               title="Popover On Left">On left
                </base-button>
                <div v-for="t in topologies" :key="t.id">
                    <h6>{{t.name}}</h6>
                    <topology :seq="t.sequence"></topology>
                 </div>
                 <!-- <topology></topology>
                 <topology></topology> -->
    
             </div>
         </div>
     </section>
    
</template>

<script>
import ProtVista from 'ProtVista';
import Topology from './components/Topology';
import BTooltip from "bootstrap-vue/es/directives/tooltip/tooltip";
import BPopover from "bootstrap-vue/es/directives/popover/popover";
export default {
    components: {
        Topology,
    },
    directives: {
        BTooltip,
        BPopover
    },
    data(){
        return{
            topologies:[]
        }
    },
    mounted(){
    //     new ProtVista({
    //     el:yourDiv,
    //     uniprotacc: 'P05067',
    //     inclusions: ['TOPOLOGY']
    //     });
        var fakeApiResults ={
            "data":[
            {"id":"0", "name":"CCTOP", "sequence":"oooiiMMMMMMMMMiioooo"}, 
            {"id":"1", "name":"HMMTOP", "sequence":"oooiiMMMiiMMMMiioooo"},
            {"id":"2", "name":"Philius", "sequence":"oooiiMMiiioooMMMMiioooo"},
            {"id":"3", "name":"Other prediction", "sequence":"oooiiMMMMiiiiioooo"}
            ]
        };
        this.topologies = fakeApiResults.data;
    }
    
}
</script>


<style lang="scss">


</style>
