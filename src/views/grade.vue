<template>
  <div class="grid createGrade">
    <headerSearch
    @database="(data) => database = data"
    @load="this.load()"/>

    <table class="table-fixed	bg-[#edede9]" v-if="databaseExist">
      <thead class="bg-[#5e5e5ea2] w-100">
        <tr>
          <th>Nome</th>
          <th v-for="(element,index) in notas[0].nota" :key="index">{{element.Nome}} | Nota Maxima: 
            <input type="number" class="w-8 rounded-md bg-[#fcfaf9] p-1 text-center" 
            placeholder="element.notaMaxima" min="0" v-model="element.notaMaxima" @change="ValorSoma(0,true)"></th>
          <th>Total: {{notas[0].notaBimestral}}</th>
        </tr>
      </thead>  

      <tbody>
        <tr v-for="(aluno, index) in notas" :key="index">
          <td>{{ aluno.Nome }}</td>
          <td v-for="(atividade,index2) in aluno.nota" :key="index2">
            <input :placeholder="atividade.Valor" v-model="atividade.Valor" min="0" @change="ValorSoma(index,false)"
                    class="w-30 h-8 rounded-lg p-1 pl-2 m-1 focus:outline-none focus:border-[#48e5c3bb] focus:ring-2 focus:ring-[#48e5c3bb]"
                    :class="{'ouline-none border-red-200 ring-2 ring-red-200': atividade.Valor <= atividade.notaMaxima*6/10 || atividade.Valor > atividade.notaMaxima}">
          </td>
          <td>{{aluno.notasSomadas}}</td>
        </tr>
      </tbody>
    </table>
  </div>

</template> 
<script>
import { mapState } from 'vuex'
import headerSearch from '../components/headerSearch.vue'

export default {
  components: {
    headerSearch,
  },
  computed: {
    ...mapState([
      'filterList'
    ]),
    databaseExist() {
      return this.database?.id
    },
  },
  data() {
    return {
      database: {Alunos:[]},
      notas: [],
    }
  },
  methods: {
    load() {
      const {bimester} = this.filterList
      const alunos = this.database.Alunos
      alunos.forEach(aluno =>{
        let notasAlunos = aluno.Dados[0].bimestres[bimester-1].nota
        const somatorio = this.soma(notasAlunos,false)
        let notaAluno = {
          Nome: aluno.Nome,
          nota: notasAlunos,
          notasSomadas: somatorio,
          notaBimestral: aluno.Dados[0].bimestres[bimester-1].notaBimestral
        }
        this.notas.push(notaAluno)
      })
      console.log(this.notas)
    },
    ValorSoma(indexAluno,total) {
      const notas = this.notas[indexAluno].nota
      const somatorio = this.soma(notas,total)
      if (total) {
        this.notas[indexAluno].notasSomadas = somatorio
      } else {
        this.notas[indexAluno].notaBimestral = somatorio
      }
    },
    soma(array, total) {
      let somatorio = 0
      for (let i=0; i < array.length; i++){
        if(total) return somatorio += Number(array[i].notaMaxima)
        else {somatorio += Number(array[i].Valor)}
      }
      return somatorio
    }
  }
  
}
</script>

<style lang="scss">
.createGrade {
  grid-template-rows: 15% 20% auto;
}

</style>