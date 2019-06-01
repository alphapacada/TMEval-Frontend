<template>
    <div id="data-comparison-container" class="container">
        <div id="dc-header" class="row">
            <div class="col">
                <h1 class="pt-3 pb-5">
                    Dataset Comparison
                </h1>
            </div>
        </div>
        <div id="dc-cctop" class="row pt-2">
            <div class="col">
                <div class="row">
                    <div class="col">
                        <h3>
                            CCTOP
                        </h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-8">
                        <img src="/img/boi.png" class="img-fluid" >
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <p>
                            The keyboard warrior is formidable opponent and a reliable ally for as long as it can hide behind its keyboard.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <v-divider></v-divider>
         <div id="dc-hmmtop" class="row pt-2">
            <div class="col">
                <div class="row">
                    <div class="col">
                        <h3>
                            HMMTOP
                        </h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-8">
                        <img src="/img/boi.png" class="img-fluid" >
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <p>
                            The keyboard warrior is formidable opponent and a reliable ally for as long as it can hide behind its keyboard.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <v-divider></v-divider>
        <div id="dc-philius" class="row pt-2">
            <div class="col">
                <div class="row">
                    <div class="col">
                        <h3>
                            Philius
                        </h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-8">
                        <img src="/img/boi.png" class="img-fluid" >
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <p>
                            The keyboard warrior is formidable opponent and a reliable ally for as long as it can hide behind its keyboard.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <v-divider></v-divider>
        <div id="dc-tmhmm2" class="row pt-2">
            <div class="col">
                <div class="row">
                    <div class="col">
                        <h3>
                            TMHMM2
                        </h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-8">
                        <img src="/img/boi.png" class="img-fluid" >
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <p>
                            The keyboard warrior is formidable opponent and a reliable ally for as long as it can hide behind its keyboard.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <v-divider></v-divider>
        <div id="dc-topcons2" class="row pt-2">
            <div class="col">
                <div class="row">
                    <div class="col">
                        <h3>
                            TOPCONS2
                        </h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-8">
                        <img src="/img/boi.png" class="img-fluid" >
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <p>
                            The keyboard warrior is formidable opponent and a reliable ally for as long as it can hide behind its keyboard.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            predictionMethods:[],
            selectedMethod:'Method',
            selectedMethodIndex: 0,
            rawResult:'',
            processedResult:''
        }
    },
    mounted(){
        var fakeApiResults ={
            "methods":[
            {"id":"0", "name":"CCTOP"}, 
            {"id":"1", "name":"HMMTOP"},
            {"id":"2", "name":"Philius"},
            {"id":"3", "name":"Other prediction"}
            ]
        };
        this.predictionMethods = fakeApiResults.methods;
        this.selectedMethod = this.predictionMethods[0].name;

        this.rawResult = 'Raw results for ' + this.selectedMethod;
        this.processedResult = 'Refined results for ' + this.selectedMethod;
    },
    methods:{
        setSelectedMethod(index){
            this.selectedMethod = this.predictionMethods[index].name;
            this.selectedMethodIndex = index;

            this.rawResult = 'Raw results for ' + this.selectedMethod;
            this.processedResult = 'Refined results for ' + this.selectedMethod;
        }
    }
}
</script>
<style>
textarea {
    resize:none;
}

#content-result{
    padding-top:5rem;
}
</style>