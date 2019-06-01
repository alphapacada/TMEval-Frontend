<template>
    <section id="view_assessment" class="section bg-secondary section-lg">
        <div class="container">
            <div id="yourDiv"></div>
            <!-- <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="174" height="200" viewbox="0 0 173.20508075688772 200" style="filter: drop-shadow(rgba(255, 255, 255, 0.5) 0px 0px 10px);"><path fill="#fff" d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"></path></svg> -->
            <span>
                <h1 class="display-1">Assessment Results</h1>
            </span>
            <tabs id="evaltabs" fill>
                <card shadow>
                    <tab-pane title="Basics">
                        <!-- <p class="description">Raw denim you probably haven't heard of them jean shorts
                    Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                    cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
                    keffiyeh dreamcatcher synth.</p> -->
                        <ul>
                            <li>Prediction Results</li>
                            <li>N-terminal Locations</li>
                            <li>Performance Evaluation</li>
                            <li>SOV</li>
                        </ul>

                    </tab-pane>
                    <tab-pane title="Prediction Results">
                        
                    </tab-pane>
                    <tab-pane title="N Locations">
                    </tab-pane>
                    <tab-pane title="Evaluation">
                    </tab-pane>
                    <tab-pane title="SOV">
                    </tab-pane>
                </card>
            </tabs>
        </div>
    </section>
</template>
<script>
import ProtVista from 'ProtVista';
export default {
    // mounted(){
    //     var yourDiv = document.getElementById('yourDiv');
    //     var instance = new ProtVista({
    //         el: yourDiv,
    //         uniprotacc: 'P05067',

    //         //These categories will **not** be rendered at all
    //         //exclusions: ['SEQUENCE_INFORMATION', 'STRUCTURAL', 'TOPOLOGY', 'MUTAGENESIS', 'MOLECULE_PROCESSING']
    //     })
    // },
    name:"evaluation",
};
</script>
<style>
</style>
