<template>
<div class="d-flex justify-center align-center">
  <input type="text" v-model="search" class="search-input" placeholder="Search..."/>
  <v-btn fab @click="data" class="ml-3" large> <v-icon>mdi-magnify</v-icon> </v-btn>
</div>
</template>

<script>

export default {
  name: "search",
  data(){
    return{
      search:null
    }
  },
  methods:{
    data(){
      if(this.search !=null){
        try {
          this.$store.dispatch('searchWord/seachReasult',this.search)

        }catch (err){
          alert(err)
        }

      }

    }
  }
}
</script>

<style scoped>
.search-input{
  background-color: #F8F9FB;
  border: 1px solid #EBEEF3;
  padding: 10px;
  outline: none;
  font-size: 24px;
  width: 80%;
  border-radius: 8px;
  color: #425466;

}
</style>
