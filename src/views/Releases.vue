<template>
  <div class="main-container" >
    <h1>Lançamentos</h1>
    <InsertReleases />
  </div>
</template>
<script>
import InsertReleases from '../components/InsertReleases.vue'

export default {
  name: "Releases",
  components: {
    InsertReleases
  }
}
</script>
<style scoped>
  .main-container{
    margin: 20px;
  }
</style>

