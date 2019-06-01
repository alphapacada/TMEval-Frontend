<template>
    <section class="section bg-secondary section-lg">
        <v-app class="bg-secondary">
            <div class="container bg-white pt-3">
                <div id="tmeval-dataset" class="row">
                    <div class="col">
                        <h3>
                            TMeval Dataset
                        </h3>
                        <table class="container">
                            <tr class="row" :key="index" v-for="(file, index) in tmevalDataset">
                                <td @click="downloadFile(file.name)" v-ripple="true" class="table-entry col" >
                                    <tr class="row">
                                        <td  class="col-1 pr-1 text-center align-items-center">
                                            <a target="_blank">
                                                
                                            </a>
                                            <span @click="downloadFile(file.name)" class="text-blue">Download</span>
                                        </td>
                                        <td class="col-10">
                                            <tr class="row col pb-1">
                                                <td class="file-name col">
                                                    {{ file.name }} ({{ file.size }})
                                                </td>
                                            </tr>
                                            <tr class="row col">
                                                <td rowspan="2" class="file-description col">
                                                    <p class="ml-2">
                                                        {{ file.description }}
                                                    </p>
                                                </td>
                                            </tr>
                                        </td>
                                    </tr>
                                </td>
                            </tr>    
                        </table>
                    </div>
                </div>
                <a style="display:none" ref="download">
                    
                </a>
                <div id="training-dataset" class="row">
                    <div class="col">
                        <h3>
                            Training Dataset
                        </h3>
                        <table class="container">
                            <tr class="row" :key="index" v-for="(file, index) in trainingDataset">
                                <td v-ripple="true" class="table-entry col" >
                                    <tr class="row">
                                        <td class="col-1 pr-1 text-center align-items-center">
                                            <span @click="downloadFile(file.name)" class="download-text">Download</span>
                                        </td>
                                        <td class="col-10">
                                            <tr class="row col pb-1">
                                                <td class="file-name col">
                                                    {{ file.name }} ({{ file.size }})
                                                </td>
                                            </tr>
                                        </td>
                                    </tr>
                                </td>
                            </tr>    
                        </table>
                    </div>
                </div>
            </div>
        </v-app>
    </section>
</template>
<script>
import $backend from '../api'
export default {
    data() {
        return {
            tmevalDataset: [
                {
                    name: "Doggo.gz",
                    size: "5 DoggoBytes",
                    description: "Relevant af",
                    link: "http://facebook.com"
                },
                {
                    name:"Catto.gz",
                    size: "1 niggaByte",
                    description: "List of useless records.",
                    link: ""
                }
            ],
            trainingDataset: [
                {
                    name: "CCTOP.tar.xz",
                    size: "147.4 kB",
                },
                {
                    name: "HMMTOP.tar.xz",
                    size: "520 bytes",
                },
                {
                    name: "Memsat-svm.tar.xz",
                    size: "531.3 kB"
                },
                {
                    name: "philius.tar.xz",
                    size: "803.1 kB"
                },
                {
                    name: "tmhmm2.tar.xz",
                    size: "114.5 kB"
                },
                {
                    name: "TOPCONS2.tar.xz",
                    size: "1.8 MB"
                },
                {
                    name: "TOPDB.tar.xz",
                    size: "4.5 MB"
                }
            ]
        }
    },
    methods:
    {
        downloadFile(filename)
        {
                console.log($backend.getBaseURL());
                this.$refs.download.href = $backend.getBaseURL() + 'files/datasets/prediction/' + filename;
                this.$refs.download.click();
                // console.log("Downloading: ", filename);
                // $backend.getDownloadable(filename)
                // .then(response => {
                // console.log("NIGGA",response.headers['content-type']);
                // let blob = new Blob([response.data], {type: response.headers['content-type']}),
                // url=window.URL.createObjectURL(blob)
                // window.open(url)
            // })
            
        }
    }
}
</script>
<style>
    .table-entry :hover{
        background-color:rgb(188, 248, 188);
    }
    .download-text{
        color:blue;
        cursor:pointer;
    }
</style>