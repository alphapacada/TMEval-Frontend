<template>
    <section class="section bg-secondary section-lg">
        <v-app class="bg-secondary">
         <div class="container">
             <div class="py-5 container">
                 {{ msg }}
                    <h3 class="display-1 mb-4">This tool assesses the performance accuracies of six Transmembrane Topology Prediction Methods.</h3>
             
                    <div class="row mb-5">
                        <div class="col-6">
                            <v-card min-height="170" :ripple="{ class: 'success--text' }" class="mr-1">
                                <!-- <a href="http://www.enzim.hu/hmmtop/html/adv_submit.html" target="_blank"> -->
                                    <v-card-title primary-title>
                                        <h4>
                                            <a href="http://www.enzim.hu/hmmtop/html/adv_submit.html" target="_blank">HMMTOP </a>
                                            <badge rounded type="success">HMM</badge>
                                        </h4>
                                    </v-card-title>
                                    <v-card-text>
                                        Predicts both the localization of helical transmembrane segments and the topology of transmembrane proteins.
                                    </v-card-text>
                                <!-- </a> -->
                            </v-card>
                        </div>
                        <div class="col-6" >
                            <v-card min-height="170" :ripple="{ class: 'default--text' }" class="ml-1">
                                <!-- <a href="http://cctop.enzim.ttk.mta.hu/" target="_blank"> -->
                                    <v-card-title primary-title>
                                        <h4>
                                            <a href="http://www.enzim.hu/hmmtop/html/adv_submit.html" target="_blank">CCTOP </a>
                                            <badge rounded type="default">Consensus</badge>
                                        </h4>
                                    </v-card-title>
                                    <v-card-text>
                                        Utilizes 10 different state-of-the-art topology prediction methods and incorporates topology information from existing experimental and computational sources.    
                                    </v-card-text>
                                <!-- </a> -->
                            </v-card>
                        </div>
                    </div>
                    <div class="row mb-5">
                        <div class="col-6" >
                            <v-card min-height="170" :ripple="{ class: 'red--text' }" class="mr-1">
                                <!-- <a href="http://www.yeastrc.org/philius/pages/philius/runPhilius.jsp" target="_blank"> -->
                                    <v-card-title primary-title>
                                        <h4>
                                            <a href="http://www.yeastrc.org/philius/pages/philius/runPhilius.jsp" target="_blank">Philius </a>
                                            <badge rounded type="danger">DBN</badge>
                                        </h4>
                                    </v-card-title>
                                    <v-card-text>
                                        Combined transmembrane topology and signal peptide predictor that extends Phobius by exploiting the power of dynamic Bayesian networks.    
                                    </v-card-text>
                                <!-- </a> -->
                            </v-card>
                        </div>
                        <div class="col-6" >
                            <v-card min-height="170" :ripple="{ class: 'primary--text' }" class="ml-1">
                                <!-- <a href="http://bioinf.cs.ucl.ac.uk/psipred/?memsatsvm=1" target="_blank"> -->
                                    <v-card-title primary-title>
                                        <h4>
                                            <a href="http://bioinf.cs.ucl.ac.uk/psipred/?memsatsvm=1" target="_blank">MEMSAT-SVM </a>
                                            <badge rounded type="primary">SVM</badge>
                                        </h4>
                                    </v-card-title>
                                    <v-card-text>
                                        Improved using SVMs. This method is capable of differentiating signal peptides from transmembrane helices.
                                    </v-card-text>
                                <!-- </a> -->
                            </v-card>
                        </div>
                    </div>
                    <div class="row mb-5">
                        <div class="col-6" >
                            <v-card min-height="170" :ripple="{ class: 'default--text' }" class="mr-1">
                                <!-- <a href="http://topcons.net/" target="_blank"> -->
                                    <v-card-title primary-title>
                                        <h4>
                                            <a href="http://topcons.net/" target="_blank">TOPCONS </a>
                                            <badge rounded type="default">Consensus</badge>
                                        </h4>
                                    </v-card-title>
                                    <v-card-text>
                                        Consensus prediction of membrane protein topology and signal peptides.
                                    </v-card-text>
                                <!-- </a> -->
                            </v-card>
                        </div>
                        <div class="col-6" >
                            <v-card min-height="170" :ripple="{ class: 'success--text' }" class="ml-1">
                                <!-- <a href="http://bioinf.cs.ucl.ac.uk/psipred/?memsatsvm=1" target="_blank"> -->
                                    <v-card-title primary-title>
                                        <h4>
                                            <a href="http://bioinf.cs.ucl.ac.uk/psipred/?memsatsvm=1" target="_blank">TMHMM </a>
                                            <badge rounded type="success">HMM</badge>
                                        </h4>
                                    </v-card-title>
                                    <v-card-text>
                                        Predicts both the localization of helical transmembrane segments and the topology of transmembrane proteins.
                                    </v-card-text>
                                <!-- </a> -->
                            </v-card>
                        </div>
                    </div>
                
                    <!-- Original -->
                    <!--
                    <div class="row">    
                        <div class="">
                            <h4 class=""><a href ="http://www.enzim.hu/hmmtop/html/adv_submit.html">HMMTOP </a>
                                <badge rounded type="success">HMM</badge>
                            </h4>
                            <div class="">
                                <p>Predicts both the localization of helical transmembrane segments and the topology of transmembrane proteins.</p>
                            </div>
                        </div>
                        <div class="">
                            <h4 class=""><a href="http://cctop.enzim.ttk.mta.hu/">CCTOP </a>
                                <badge rounded type="default">Consensus</badge>
                            </h4>
                            <div class="">
                                <p>Utilizes 10 different state-of-the-art topology prediction methods and incorporates topology information from existing experimental and computational sources.</p>
                            </div>
                        </div>
                        <div class="">
                            <h4 class=""><a href = "http://www.yeastrc.org/philius/pages/philius/runPhilius.jsp">PHILIUS </a>
                                <badge rounded type="danger">DBN</badge>
                            </h4>
                            <div class="">
                                <p>Combined transmembrane topology and signal peptide predictor that extends Phobius by exploiting the power of dynamic Bayesian networks.</p>
                            </div>
                            <h4 class=""><a href = "http://bioinf.cs.ucl.ac.uk/psipred/?memsatsvm=1">MEMSAT-SVM </a>
                                <badge rounded type="primary">SVM</badge>
                                <badge rounded type="warning">Inactive</badge>
                            </h4>
                            <div class="">
                                <p>Improved using SVMs. This method is capable of differentiating signal peptides from transmembrane helices.</p>
                            </div>
                            <h4 class=""><a href = "http://topcons.net/">TOPCONS </a>
                                <badge rounded type="default">Consensus</badge>
                            </h4>
                            <div class="">
                                <p>Consensus prediction of membrane protein topology and signal peptides.</p>
                            </div>
                            <h4 class=""><a href = "http://topcons.net/">TMHMM </a>
                                <badge rounded type="success">HMM</badge>
                            </h4>
                            <div class="">
                                <p>Predicts Transmembranes.</p>
                            </div>
                        </div>
                    </div>    
                    -->
                
            </div>
         </div>
        </v-app>
    </section>
    
</template>

<script>
import JobSection from "@/views/components/JobSection.vue";
export default {
    components:{
        JobSection
    },
    props: {
    msg: String
  }
}
</script>

<style>

</style>
