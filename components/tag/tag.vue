<template>
<v-row class="d-flex justify-center" >
  <v-col   class=" mt-8  btn"  >
    <v-btn  v-for="item in tag" :key="item" @click="itemTag(item.tag)"  >{{ item.tag }}</v-btn>
  </v-col>
</v-row>

</template>

<script>
import tagList from '../../constant/tag'
export default {
  name: "tag",
  data(){
    return{
      tag:null
    }
  },
  methods:{
    itemTag(tags){

      this.$store.dispatch('searchWord/seachReasult',tags)
    }
  },
  created() {
    this.tag=tagList
  }
}
</script>

<style scoped>
.btn{

  gap: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: wrap;
}
</style>
