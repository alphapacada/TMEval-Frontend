<template>

<div id="assessment" class="row">
    <div id="sidebar-container" class="col-3">
        <v-navigation-drawer
    value="true">
    <v-list>
      
      <v-list-tile to="/evaluation/table">
        <v-list-tile-title class="pl-3">TMeval Dataset</v-list-tile-title>
      </v-list-tile>

      <v-list-group>
        <template v-slot:activator>
          <v-list-tile to="/evaluation/dataset-comparison#dc-header">
            <v-list-tile-title class="pl-3">Prediction Methods vs. TMeval Dataset Comparison</v-list-tile-title>
          </v-list-tile>
        </template>
            <v-list-tile to="/evaluation/dataset-comparison#dc-cctop">
              <v-list-tile-title class="pl-5">CCTOP</v-list-tile-title>
            </v-list-tile>
            <v-list-tile to="/evaluation/dataset-comparison#dc-hmmtop">
              <v-list-tile-title class="pl-5">HMMTOP</v-list-tile-title>
            </v-list-tile>
            <v-list-tile to="/evaluation/dataset-comparison#dc-philius">
              <v-list-tile-title class="pl-5">PHILIUS</v-list-tile-title>
            </v-list-tile>
            <v-list-tile to="/evaluation/dataset-comparison#dc-tmhmm2">
              <v-list-tile-title class="pl-5">TMHMM2</v-list-tile-title>
            </v-list-tile>
            <v-list-tile to="/evaluation/dataset-comparison#dc-topcons2">
              <v-list-tile-title class="pl-5">TOPCONS2</v-list-tile-title>
            </v-list-tile>
      </v-list-group>

      <v-list-tile>
        <v-list-tile-title class="pl-3">Prediction Results</v-list-tile-title>
      </v-list-tile>

      <v-list-tile >
        <v-list-tile-title class="pl-3">N Terminal Locations</v-list-tile-title>
      </v-list-tile>

      <v-list-tile>
        <v-list-tile-title class="pl-3">SOV analysis</v-list-tile-title>
      </v-list-tile>
      
      <!-- <v-list-tile>
        <v-list-tile-title class="pl-3">Confusion Matrix</v-list-tile-title>
      </v-list-tile> -->
       <v-list-group>
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-title class="pl-3">Confusion Matrix</v-list-tile-title>
          </v-list-tile>
        </template>
            <v-list-tile to="/evaluation/dataset-comparison#dc-cctop">
              <v-list-tile-title class="pl-5">CCTOP</v-list-tile-title>
            </v-list-tile>
            <v-list-tile to="/evaluation/dataset-comparison#dc-hmmtop">
              <v-list-tile-title class="pl-5">HMMTOP</v-list-tile-title>
            </v-list-tile>
            <v-list-tile to="/evaluation/dataset-comparison#dc-philius">
              <v-list-tile-title class="pl-5">PHILIUS</v-list-tile-title>
            </v-list-tile>
            <v-list-tile to="/evaluation/dataset-comparison#dc-tmhmm2">
              <v-list-tile-title class="pl-5">TMHMM2</v-list-tile-title>
            </v-list-tile>
            <v-list-tile to="/evaluation/dataset-comparison#dc-topcons2">
              <v-list-tile-title class="pl-5">TOPCONS2</v-list-tile-title>
            </v-list-tile>
      </v-list-group>

      <v-list-tile>
        <v-list-tile-title class="pl-3">Performance Evaluation</v-list-tile-title>
      </v-list-tile>

    </v-list>
  </v-navigation-drawer>
    </div>
    <div class="dummy col-3">
    </div>
    <div class="col-9">
        <div id="page-content" class="col-11">
           <fade-transition origin="center" mode="out-in" :duration="100">
            <router-view></router-view>
             </fade-transition>
        </div>
    </div>
  </div>

</template>
<script>
import { FadeTransition } from "vue2-transitions";

export default {
    components: {
      FadeTransition
    },
    data: () => ({
      admins: [
        ['Management', 'people_outline'],
        ['Settings', 'settings']
      ],
      cruds: [
        ['Create', 'add'],
        ['Read', 'insert_drive_file'],
        ['Update', 'update'],
        ['Delete', 'delete']
      ]
    })
};
</script>
<style>

.v-list .primary--text {
  color:#2dce89 !important;
  caret-color: #2dce89 !important;
}
.v-list a:hover{
  color:#2dce89 !important;
}
.theme--light.application {
  background-color: #ffffff
}
#assessment {
  padding: 60px 0px 0px 0px;
}

#sidebar-container{
    display: inline-block;
    padding-bottom: 10px;
    position:fixed;
}
#page-content{
    display: inline-block;
    padding-bottom: 10px;
}
.dummy{
  z-index: -1 !important;
}
</style>