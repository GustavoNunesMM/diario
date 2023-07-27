<template>
    <header class="menuLists static">
            <menuList
                class="menuList"
                nameComponent="Ano"
                :arr="year"
                tipo="year"
                :canDelete="false">
            </menuList>

            <menuList
                class="menuList"
                nameComponent="Turma"
                :arr="fClasses"
                tipo="class"
                :canDelete="false">
            </menuList>

            <menuList
                class="menuList"
                nameComponent="Bimestre"
                :arr="bimestre"
                tipo="bimester"
                :canDelete="true">
            </menuList>
            
            <calendario v-if="this.calendarioAtivo"></calendario>
            <div class="flex flex-col p-3 mt-0"> 
                <button @click="search()" class="bg-gray-100 p-1 m-1 hover:bg-gray-300 drop-shadow-md cursor-pointer" >Procurar</button>
                <button @click="$refs.show.save()" class="bg-gray-100 p-1 m-1 hover:bg-gray-300 drop-shadow-md cursor-pointer">salvar</button>
            </div>
            
        </header>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
import calendario from '../components/calendario.vue'
import menuList from './MenuList.vue'

export default {
    components: {
        calendario,
        menuList,
    },
    computed: {
        ...mapState([
            'Class',
            'year',
            'bimestre',
            'filterList'
        ]),
        fClasses () {
            return this.$store.getters.fClass
        }        
    },
    props: {
        calendarioAtivo: {
            type: Boolean
        }
    },
    methods: {
        async search() {
            const { data } = await axios.get(`http://localhost:3000/Turmas/${this.filterList.Class}`)
            console.log(data)
            this.$emit('database', data)
            this.$emit('load')
        }
    }
}
</script>