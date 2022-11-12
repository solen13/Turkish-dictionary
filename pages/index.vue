<template>
  <v-main class="d-flex justify-center">

    <search class="mt-8"/>
    <tag/>
    <search-card/>

  </v-main>
</template>

<script>

import Search from "@/components/footer-end-header/foo";
import SearchCard from "@/components/search-card/search-card";
import Tag from "@/components/tag/tag";
export default {
  name: 'IndexPage',
  components:{Tag, SearchCard, Search},
}
</script>
