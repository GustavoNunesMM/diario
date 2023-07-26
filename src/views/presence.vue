<template>
    <div class="grid createPress">
        <headerSearch
        :calendarioAtivo="true"
        @database="(data) => database = data"/>

        <article class="list">
            <hr>
            <div class="flex row-auto round-4">
                <h1 class="white text-align-center grow text-start p-2"> Nome:</h1>
                <h1 class="white text-align-center basis-1/5 end-1 p-2"> Falta:</h1>
            </div>
            <hr class="border-white border-1 w-100">
            <show v-if="this.isVerifyDatabaseId"
                :database="this.database"
                :bimestre="this.filterList.bimester"
                ref="show"/>
        </article> 

    </div>
</template>

<script>


import show from '../components/show.vue'
import headerSearch from '../components/headerSearch.vue'
import { mapState } from 'vuex'

export default {
    components: {
        show,
        headerSearch
    },
    computed: {
        ...mapState([
            'filterList'
        ]),
        isVerifyDatabaseId () {
            return this.database?.id
        }
    },
    data() {
        return {
            database: {Alunos:[]},
        }
    }    
}
</script>

<style>
.menuLists {
    display: flex;
    flex-direction: row;
}
.createPress {
    grid-template-rows: 15% 20% auto;
}
.list {
    grid-row-start: 3;
    grid-column-start:1
}

</style>

