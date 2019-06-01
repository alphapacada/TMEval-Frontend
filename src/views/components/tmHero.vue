<template>
    <section class="section-hero section-shaped my-0">
        <div class="shape shape-style-1 shape-dark">
            <span class="span-150"></span>
            <span class="span-50"></span>
            <span class="span-50"></span>
            <span class="span-75"></span>
            <span class="span-100"></span>
        </div>
        <div class="container shape-container d-flex align-items-center">
            <div class="col px-0">
                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-7 text-center pt-lg">
                        <img src="img/brand/tmbrand.png" style="width: 300px;" class="img-fluid">
                        <p class="lead text-white mt-4 mb-5">Evaluator for Transmembrane Protein Prediction Methods</p>
                        <div class="btn-wrapper">
                            <base-button tag="a"
                                href="/evaluation"
                                class="mb-3 mb-sm-0"
                                type="success"
                                icon="fa fa-bar-chart">
                                View Assessment
                            </base-button>
                            <!-- <base-button tag="a"
                                                 href="#submit_sequences"
                                                 class="mb-3 mb-sm-0"
                                                 type="success"
                                                 icon="fa fa-upload">
                                        Choose Protein Groups
                            </base-button> -->
                            <base-button tag="a"
                                key="hello"
                                href="#predict_sequences"
                                class="mb-3 mb-sm-0"
                                type="secondary"
                                icon="fa fa-upload">
                                Submit Sequences for Prediction
                            </base-button>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center justify-content-around stars-and-coded">
                    <!-- <div class="col-sm-4">
                        <span class="text-white alpha-7 ml-3">Star us on</span>
                        <a href="https://github.com/creativetimofficial/argon-design-system" target="_blank" title="Support us on Github">
                            <img src="img/brand/github-white-slim.png" style="height: 22px; margin-top: -3px">
                        </a>
                    </div>
                    <div class="col-sm-4 mt-4 mt-sm-0 text-right">
                        <span class="text-white alpha-7">Coded by</span>
                        <a href="https://www.creative-tim.com" target="_blank" title="Creative Tim - Premium Bootstrap Themes and Templates">
                            <img src="img/brand/creativetim-white-slim.png" class="ml-3" style="height: 30px;">
                        </a>
                    </div> -->
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: "tm-hero",
};
</script>
<style>
</style>
