<template>
<section class="section-hero section-shaped my-0">
        <div class="shape shape-style-1 shape-dark">
            <span class="span-150"></span>
            <span class="span-50"></span>
            <span class="span-50"></span>
            <span class="span-75"></span>
            <span class="span-100"></span>
        </div>
        
        <div class="container shape-container align-items-center">
            <div  id="content-result">
            <div class="row">
                <div class="col-md-9">
                    <h1 class="text-white display-2">Prediction results</h1>
                </div>
                <div class="col-md-3 align-items-right">
                    <base-dropdown>
                        <base-button slot="title" type="secondary" class="dropdown-toggle">
                            {{ selectedMethod }}
                        </base-button>

                       <li style="cursor:pointer" @click="setSelectedMethod(index)" class="dropdown-item" :key=method.id v-for="(method,index) in predictionMethods">{{ method.name }}</li>


                    </base-dropdown>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <h5 class="text-white">Raw results</h5>
                    <textarea v-model="rawResult" class="form-control col" rows="20" readonly></textarea>
                </div>
                <div class="col-sm-6">
                    <h5 class="text-white">Processed results</h5>
                    <textarea v-model="processedResult" class="form-control col" rows="20" readonly></textarea>
                </div>
            </div>
            </div>
        </div>
    </section>
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