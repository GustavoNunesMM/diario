<template>
    <div v-for="(aluno, index) in this.alunos" :key="index" class="flex flex-row rounded-s-md text-center align-middle m-1 p-2 bg-[#EDEDE9]" >
        <p class="grow text-start">{{aluno.Nome}}</p>        
        <label class="relative items-center cursor-pointer end-1 basis-1/10 mr-35 ml-20">
            <input type="checkbox" class="sr-only peer" checked @click="validade(aluno, this.toggleButton);this.toggleButton = !this.toggleButton">
            <div class="w-11 h-6 b g-gray-200 rounded-full peer-focus:ring-[#48E5C2] dark:peer-focus:ring-[#48E5C2] peer-checked:after:translate-x-full bg-[#cccccc]
                        peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-[#EDEDE9] after:border 
                        after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#48E5C2]">
            </div>
        </label>

    </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
const url = 'http://localhost:3000/Turmas/'

export default {
    props: {
        database: {type: Object},
        bimestre: {type: Number}
    },
    computed: {
        ...mapState([
            'date'
        ])
    },
    data() {
        return {
            alunos: [...this.database.Alunos],
            toggleButton: false,
        }
    },
    mounted() {
        this.alunos.forEach(e=> this.validade(e, true))
        console.log("validação inicial feita")
        
    },
    methods:{
        validade(aluno, statusToggle) {
            const newAluno = { ...aluno }
            newAluno.Dados =  newAluno.Dados.map(dado => {
                return {
                    ...dado,
                    bimestres: dado.bimestres.map(bimestre => {
                        const isVerifyPresencaExisty = bimestre.presencas.some(presenca => presenca.date === this.date)

                        if(isVerifyPresencaExisty) {
                            return {
                                ...bimestre,
                                presencas:  bimestre.presencas.map(presenca => {
                                    return {
                                        ...presenca,
                                        status: presenca.date === this.date ? statusToggle : presenca.status
                                    }
                                })
                            }
                        } 

                        return {
                            ...bimestre,
                            presencas:  [...bimestre.presencas, { date: this.date, status: statusToggle }]
                        }
                    })
                }
            })
            this.alunos = this.alunos.map(aluno => aluno.id === newAluno.id ? newAluno : aluno)
        },
        save() {
            console.log(this.alunos)
            axios.put(`${url}/${this.turma.id}`, {id: this.turma.id, Alunos: this.alunos})
        }
    }
}
</script>