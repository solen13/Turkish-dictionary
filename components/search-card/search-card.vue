<template>
 <main class=" d-flex justify-center">

   <v-card v-if="searchResult != null" class="blue white--text mt-8 " width="98%"  >

     <v-card-title class="blue lighten-3 black--white  font-weight-bold">Bulunan Kelime: {{ searchResult.madde}}</v-card-title>

     <v-row>

       <v-col cols="12" sm="6">

         <v-card-title>Anlamı</v-card-title>
         <v-card-text v-for="(i, index) in searchResult.anlamlarListe" class="d-flex  mt-2">
           {{index+1}}) {{i.anlam}}
         </v-card-text>

       </v-col>


       <v-col v-if="searchResult.atasozu" cols="12"  sm="6">

           <v-card-title>Atasözü</v-card-title>
           <v-card-text v-for="(i,index) in searchResult.atasozu" class=""> {{index+1}}) {{i.madde}},</v-card-text>

       </v-col>

     </v-row>

    <v-divider/>

     <v-row class="d-flex justify-center">
        <v-col   class="mt-1 proposals  " cols="12" sm="6" >

          <v-btn v-for="item in proposal"  @click="proposalsBtn(item)" :key="item" small >
            {{item}}
          </v-btn>

        </v-col>
     </v-row>

   </v-card>
 </main>
</template>

<script>
export default {
  name: "search-card",

  data(){
    return{
      searchText:'',
    }
  },
  methods:{
    proposalsBtn(proposal){

      let proposals=proposal.trim()
        this.$store.dispatch('searchWord/seachReasult',proposals)
      console.log(proposals)

    }
  },

  computed:{
    searchResult(){
      return this.$store.state.searchWord.search
    },
    proposal(){
      if( this.searchResult.birlesikler !=null){
        let birlesikItem=this.searchResult.birlesikler.split(",")
       return  birlesikItem.slice(0,6)
      }
    },

  }

}
</script>

<style scoped>
.proposals{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: wrap;
  gap: 10px;
}
</style>
