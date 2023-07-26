<template>
  <div class="grid createGrade">
    <headerSearch
    @database="(data) => database = data"/>

    <article>
      <div v-for="(aluno, index) in this.alunos" :key="index">
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

    ])
  },
  data(){
    return {
      alunos: [...this.database.Alunos]
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