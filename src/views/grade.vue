<template>
  <div class="grid createGrade">
    <headerSearch
    @database="(data) => database = data"/>

    <article v-if="databaseExist">
      <div v-for="(aluno, index) in this.database.Alunos" :key="index">
        <h1>{{ aluno.Nome }}</h1>
        <h2>{{ asa }}</h2>
      </div>
    </article>
  </div>

</template> 

<script>
import { mapState } from 'vuex'
import headerSearch from '../components/headerSearch.vue'
export default {
  components: {
    headerSearch
  },
  computed: {
    ...mapState([

    ]),
    databaseExist() {
      return this.database?.id
    }
  },
  data() {
    return {
      database: {Alunos:[]}
    }
  },
  methods: {
    
  }
  
}
</script>

<style lang="scss">
.createGrade {
  grid-template-rows: 15% 20% auto;
}
</style>