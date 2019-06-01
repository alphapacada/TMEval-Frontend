<template>
    
    <div id="topdiv">
      <v-app>
      <v-card id="filter-card">
        <div class="row">
          <div class="col">
            <v-card-title primary-title class="mb-0 pb-0">
              <h2 class="mb-0 pb-0">Filters</h2>
            </v-card-title>
          </div>
          
        </div>
        <div class="row">
          <div class="col">
            <v-card-text>
            Use options below to narrow down results then click "Apply" at the lower left.
            </v-card-text>
          </div>
        </div>
        
      <div id="parameter-container" class="container">
        <div class="row">
          <div class="col-sm-4">
            Transmembrane: 
            <base-dropdown>    
                <base-button slot="title" type="secondary" class="dropdown-toggle">
                    {{ selectedParameter1Text }}
                </base-button>
                <li style="cursor:pointer" @click="setParameter1(index)" class="dropdown-item" :key=choice.value v-for="(choice,index) in parameter1Choices">{{ choice.text}}</li>
            </base-dropdown>           
          </div>
          <div class="col-sm-4">
              Signal Peptide: 
              <base-dropdown>
                  <base-button slot="title" type="secondary" class="dropdown-toggle">
                      {{ selectedParameter2Text }}
                  </base-button>
                  <li style="cursor:pointer" @click="setParameter2(index)" class="dropdown-item" :key=choice.value v-for="(choice,index) in parameter2Choices">{{ choice.text}}</li>
              </base-dropdown>
            </div>
            <div class="col-sm-4">
              Taxonomy: 
              <base-dropdown>
                  <base-button slot="title" type="secondary" class="dropdown-toggle">
                      {{ selectedParameter3Text }}
                  </base-button>
                  <li style="cursor:pointer" @click="setParameter3(index)" class="dropdown-item" :key=choice.value v-for="(choice,index) in parameter3Choices">{{ choice.text}}</li>
              </base-dropdown>
            </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            # of TM Helices: 
            <base-dropdown>
                <base-button slot="title" type="secondary" class="dropdown-toggle">
                    {{ selectedParameter4Text }}
                </base-button>
                <li style="cursor:pointer" @click="setParameter4(index)" class="dropdown-item" :key=choice.value v-for="(choice,index) in parameter4Choices">{{ choice.text}}</li>
            </base-dropdown>           
          </div>
          <div class="col-sm-4">
              Topology Type: 
              <base-dropdown>
                  <base-button slot="title" type="secondary" class="dropdown-toggle">
                      {{ selectedParameter5Text }}
                  </base-button>
                  <li style="cursor:pointer" @click="setParameter5(index)" class="dropdown-item" :key=choice.value v-for="(choice,index) in parameter5Choices">{{ choice.text}}</li>
              </base-dropdown>
            </div>
            <div class="col-sm-4">
              Sequence Identity: 
              <base-dropdown>
                  <base-button slot="title" type="secondary" class="dropdown-toggle">
                      {{ selectedParameter6Text }}
                  </base-button>
                  <li style="cursor:pointer" @click="setParameter6(index)" class="dropdown-item" :key=choice.value v-for="(choice,index) in parameter6Choices">{{ choice.text}}</li>
              </base-dropdown>
            </div>
          </div>
        </div>
        <v-card-actions>
          <v-btn flat color="green" style="font-weight:bold" @click="sendParameters">APPLY</v-btn>
          <v-btn flat color="red" style="font-weight:bold" @click="resetParameters">RESET</v-btn>
        </v-card-actions>
      </v-card>
      <v-card class="mt-4">
    <v-card-title primary-title class="align-middle">
      <h2 class="pb-0 mb-0">
        TMeval Results
      </h2>
      <v-spacer></v-spacer>
      <v-text-field
        class="align-middle pt-0" 
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
        <v-data-table 
               :headers="mainHeaders"
               :items="mainItems"
               :loading="loadInProgress"
               :no-data-text="tableText"
               item-key="name"
               expand
               :rows-per-page-items="rows"
               :search="search"
               class="elevation-1">
  <template slot="items" slot-scope="props">
    <tr @click="props.expanded = !props.expanded">
      <td class="text-xs">{{ props.item.name }}</td>
      <td class="text-xs">{{ props.item.length }}</td>
      <td class="text-xs">{{ props.item.organism }}</td>
      <td class="text-xs">{{ props.item.orientation }}</td>
      <td class="text-xs">{{ props.item.taxonomy }}</td>
      <td class="text-xs">{{ props.item.tm }}</td>
      <td class="text-xs">{{ props.item.sp }}</td>
      <td class="text-xs">{{ props.item.topo_type }}</td>
      <td class="text-xs">{{ props.item.count }}</td>
    </tr>
  </template>
  <!-- <template slot="expand" slot-scope="props">
    <v-card class="elevation-10">
      <v-card-text>

        <v-data-table :headers="subHeaders"
                      :items="subItems"
                      item-key="color"
                      hide-actions
                      class="elevation-10">
          <template slot="items" slot-scope="props">
            <td class="text-xs">{{ props.item.color }}</td>
            <td class="text-xs">{{ props.item.value }}</td>
          </template>
        </v-data-table>

      </v-card-text>
    </v-card>
  </template> -->
 </v-data-table>
 </v-card>
 </v-app>
    </div>
    
</template>
<script>
import $backend from '../api'
const LOADING_MSG = 'Download in progress...'
export default {
    data () {
        return {
        tableText: '',
        loadInProgress: false,
        parameters: {
          tm: '',
          sp: '',
          tx: '',
          count: '',
          topo_type: '',
          reduced: 30
        },
        selectedParameter1Text:'ALL',
        selectedParameter2Text:'ALL',
        selectedParameter3Text:'ALL',
        selectedParameter4Text:'ANY',
        selectedParameter5Text:'ANY',
        selectedParameter6Text:'30',
        parameter1Choices:[
          {text:'ALL', value:''},
          {text:'TRUE', value:true},
          {text:'FALSE', value:false}
        ],
        parameter2Choices:[
          {text:'ALL', value:''},
          {text:'TRUE', value:true},
          {text:'FALSE', value:false}
        ],
        parameter3Choices:[
          {text:'ALL', value:''},
          {text:'BACTERIA', value:'Bacteria'},
          {text:'VIRUSES', value:'Viruses'},
          {text:'ARCHAEA', value:'Archaea'},
          {text:'EUKARYOTES', value:'Eukaryotes'}
        ],
        parameter4Choices:[
          {text:'ANY', value:''},
          {text:'1', value: '1'},
          {text:'2', value: '2'},
          {text:'3', value: '3'},
          {text:'4', value: '4'},
          {text:'5', value: '5'},
          {text:'6', value: '6'},
          {text:'7', value: '7'},
          {text:'8', value: '8'},
          {text:'9', value: '9'},
          {text:'10', value: '10'},
          {text:'11', value: '11'},
          {text:'12', value: '12'},
          {text:'13+', value: '[13 TO *]'},
        ],
        parameter5Choices:[
          {text:'ANY', value:''},
          {text: 'I', value:'type I'},
          {text: 'II', value:'type II'},
          {text: 'III', value:'type III'},
          {text: 'IV', value: 'type IV'}
        ],
        parameter6Choices:[
          {text:'25', value:25},
          {text:'30', value:30},
          {text:'40', value:40},
          {text:'70', value:70}
        ],
        search: '',
        mainHeaders: [
          { text: 'Name', value: 'name'},
          { text: 'Length', value: 'length'},
          { text: 'Organism', value: 'organism'},
          { text: 'Orientation', value: 'orientation'},
          { text: 'Taxonomy', value: 'taxonomy'},
          { text: 'TM', value: 'tm'},
          { text: 'SP', value: 'sp'},
          { text: 'Topology', value: 'topo_type' },
          { text: 'Count', value: 'count'}
        ],
        rows: [5],
        mainItems: [],
        defaultParams: [],
        }
    },
    methods: {
      loadProteins(parameters) {
        this.mainItems = [];
        this.tableText = LOADING_MSG;
        console.log('Downloading data...');
        this.loadInProgress = true;
        console.log(parameters);
         $backend.getProteins(parameters)
          .then(responseData => {
            console.log('Download complete');
            console.log(responseData);
            this.tableText = '';
            this.mainItems = responseData;
            this.loadInProgress = false;
            if(this.mainItems.length == 0)
              this.tableText = 'No matches.';
            console.log("mainitems: ", this.mainItems);
          }).catch(responseData => {
            this.loadInProgress = false;
            this.tableText = 'Download failed!';
            console.log('Download failed!');
          })
      },
      sendParameters(){
        var parameters = JSON.parse(JSON.stringify(this.parameters));
        this.loadProteins(parameters)
        console.log(parameters);
        console.log("Parameters sent!");
      },
      resetParameters(){
        this.setParameter1(0);
        this.setParameter2(0);
        this.setParameter3(0);
        this.setParameter4(0);
        this.setParameter5(0);
        this.setParameter6(1);
        console.log("Parameters reset!");
        this.sendParameters();
      },
      setParameter1(index){
        this.selectedParameter1Text = this.parameter1Choices[index].text;
        this.parameters.tm = this.parameter1Choices[index].value;
      },
      setParameter2(index){
        this.selectedParameter2Text = this.parameter2Choices[index].text;
        this.parameters.sp = this.parameter2Choices[index].value;
      },
      setParameter3(index){
        this.selectedParameter3Text = this.parameter3Choices[index].text;
        this.parameters.tx = this.parameter3Choices[index].value;
      },
      setParameter4(index){
        this.selectedParameter4Text = this.parameter4Choices[index].text;
        this.parameters.count = this.parameter4Choices[index].value;
      },
      setParameter5(index){
        this.selectedParameter5Text = this.parameter5Choices[index].text;
        this.parameters.topo_type = this.parameter5Choices[index].value;
      },
      setParameter6(index){
        this.selectedParameter6Text = this.parameter6Choices[index].text;
        this.parameters.reduced = this.parameter6Choices[index].value;
      }
    },
    mounted() {
      var parameters = JSON.parse(JSON.stringify(this.parameters));
      console.log("huehue")
      this.loadProteins(parameters);
      this.loadInProgress = true;
      this.tableText = LOADING_MSG;
    },
}
</script>
<style>
.v-card__title .primary--text{
  color:#2dce89 !important;
  caret-color: #2dce89 !important;
}

.v-input + .primary--text{
  color:#2dce89 !important;
  caret-color: #2dce89 !important;
}

#filter-card{
  margin-top:10px;
}
/* @import 'vuetify/dist/vuetify.min.css' */
</style>
