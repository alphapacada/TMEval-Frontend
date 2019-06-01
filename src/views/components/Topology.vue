<template>
    <div class="up_pftv_category_TOPOLOGY">
        <div class="up_pftv_category text-center">
            <div class="up_pftv_category-viewer">
                <svg width="760" height="40">
                    <!-- <g>
                        <path class="up_pftv_highlight" d="M-1,-1" transform="translate(-1,-1)" height="40"></path>
                    </g> -->
                    <g class="up_pftv_category-viewer-group">
                        <path tabindex="0" v-for="p in paths" v-b-popover.hover.top="p.popover.popover_msg" :title="p.popover.title" :content="p.popover.popover_msg" :class="p.class" :key="p.id" :d="p.d" :transform="p.transform">
                            
                        </path>
                    
                    </g>
                </svg>
                <!-- <base-button size="sm" type="primary" class="btn-tooltip"
               v-b-tooltip.hover.top title="Tooltip on top">On top
                    </base-button> -->
                <!-- <div class="up_pftv_tooltip-container" style="left: 202.906px; top: 15.0312px; display: block; opacity: 1;"><span class="up_pftv_tooltip-close">x</span><table><tr><th colspan="2">TOPO_DOM 18-701</th></tr><tr><td>Description</td><td>Extracellular</td></tr><tr class="up_pftv_evidence-col"><td>Evidence</td><td>Curated (Manual assertion inferred by curator)</td></tr><tr><td>Tools</td><td><span><a href="http://www.uniprot.org/blast/?about=P05067[18-701]&amp;key=Topological domain" target="_blank">BLAST</a></span></td></tr></table></div> -->

            </div>
        </div>
    </div>
</template>

<script>
/*
{
                name:"TOPOLOGY_0",
                class:"up_pftv_feature up_pftv_topo_dom",
                d:FeatureFactory.getFeature('transmem',1,10,300),
                transform:"translate(0,12.5)",
                popover:{
                    popover_msg :  "'I am popover content!'",
                    title: "Popover Title"
                }


            },
            {
                name:"TOPOLOGY_1",
                class:"up_pftv_feature up_pftv_transmem",
                d:FeatureFactory.getFeature('topo_dom',1,10,200),
                transform:"translate(300,12.5)",
                popover:{
                    popover_msg :  "",
                    title: ""
                }
            },
            {
                name:"TOPOLOGY_2",
                class:"up_pftv_feature up_pftv_topo_dom",
                d:"M-0.48051948051948035,0L45.64935064935063,0L45.64935064935063,13L-0.48051948051948035,13Z",
                transform:"translate(703.8701298701299,12.5)",
                 popover:{
                    popover_msg :  "",
                    title: ""
                }
            
            
            }
            */
import BPopover from "bootstrap-vue/es/directives/popover/popover";
import FeatureFactory from 'ProtVista/src/FeatureFactory';
export default {
    name:'topology',
    directives: {
        BPopover
    },
    props:{
        seq: String
    },
    data() {
        return {
            sequence:'',
            paths:[]
        };
        
    },
    methods:{
        loadPaths(){
            this.paths = [];
            console.log('+loadPaths()');
            this.sequence = this.seq;
            var length = this.sequence.length;
            console.log('length: ' + length);
            var newPath = {};
            var tOffset = 0,
                pathCount = 0,
                currentLength = 0,
                currentIndex = 0,
                currentClass = '',
                currentChar = '',
                currentText = '';
                
            if(length > 0)
            {
                currentChar = this.sequence.charAt(currentIndex);
                for(currentIndex = 0;currentIndex <= length; currentIndex++)
                {
                    if(this.sequence.charAt(currentIndex) == currentChar)
                    {
                        currentLength++;
                    }
                    else
                    {
                        switch(currentChar)
                        {
                            case 'i':
                            case 'I':
                                currentClass = 'up_pftv_feature up_pftv_topo_dom';
                                currentText= 'Inside\n' + 
                                                'Length: ' + currentLength.toString();
                                break;
                            case 'o':
                            case 'O':
                                currentClass = 'up_pftv_feature up_pftv_topo_dom';
                                currentText= 'Outside\n' + 
                                                'Length: ' + currentLength.toString();
                                break;
                            case 'M':
                                currentClass = 'up_pftv_feature up_pftv_transmem';
                                currentText= 'Transmembrane\n' + 
                                                'Length: ' + currentLength.toString();
                                break;
                            case 'S':
                                currentClass = 'transmem_green';
                                currentText= 'Signal Peptide\n' + 
                                                'Length: ' + currentLength.toString();
                                break;
                            default:
                                currentText= '\"' + currentChar + '\"' + '\n' + 
                                                'Length: ' + currentLength.toString();
                                currentClass = 'transmem_default';
                        }
                        newPath = {
                        'name':"TOPOLOGY_" + pathCount,
                        'class':currentClass,
                        'd':FeatureFactory.getFeature('transmem',1,10,(currentLength / length) * 760 ),
                        'transform':'translate(' + tOffset + ',12.5)',
                        'popover':{
                                'popover_msg' : currentText,
                                'title': 'Details'
                            }
                        };
                        this.paths.push(newPath);
                        currentChar = this.sequence.charAt(currentIndex);
                        pathCount++;
                        tOffset += (currentLength / length) * 760;
                        currentLength = 0;
                        currentIndex--;
                    }
                }

            }
            else
            {
                this.paths = [];
            }
            console.log('-loadPaths()');
        }
    },
    mounted(){
        console.log('Mounted!');
        this.loadPaths();
    }
}
</script>

<style>
.transmem_green
{
    fill:green;
    stroke: darkgreen;
}

.transmem_default
{
    stroke:gray;
    fill: transparent;
}
</style>
