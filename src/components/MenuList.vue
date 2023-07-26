<template>
    <div class="search grid pl-2 pr-2 p-1">
      <p class="search__name">{{ nameComponent }}</p>

      <div class="search__div place-self-center">
        <input 
        class="search__div__bar bg-[#EDEDE9] pl-2"
        type="text"
        v-model="search.value" 
        :placeholder="search.placeholder" 
        ref="input">

        <div class="search__div__hiddenList border-1 mt-2" :class="{ notHidden: hiddenBar }">
          
          <button v-for="(item,index) in search.filteredValue" 
          class="search__div__hiddenList__item border-round bg-[#EDEDE9] mb-1"
          :key="index"
          @click="submit(item,index); hiddenBar = !hiddenBar"> {{ item }} 
          
          </button>
      </div>

      </div>
      <button class="search__Btn bg-gray-100 grid w-7 h-5 p-1 hover:bg-gray-300 active:border-2 active:border-gray-200 place-self-center cursor-pointer	text-center	" 
                @click="hiddenBar = !hiddenBar; search.listValue = arr; 
                filterValue(this.search.value, this.search.listValue)">
                
          <img src="../assets/lupa.png" class="place-self-center">
        </button>
    </div>

        

</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    arr: { type: Array },
    nameComponent: {type: String},
    tipo: { type: String },
  },
  computed: {
    ...mapState([
      'Class',
      'year',
      'bimestre'
    ])
  },
    data() {
      return {
        search: {
          value: '',
          placeholder: '',
          listValue: [],
          filteredValue: [],
          },
        hiddenBar: false,
        }
    },
    methods: {
      submit(item,index) {
        this.$store.commit(`${this.tipo}Choice`, item )
        this.search.placeholder = item
      },
      filterValue(input, array) {
        this.search.filteredValue = []
        
        if (!input) {
          this.search.filteredValue = this.search.listValue
        }
        for(let i of array) {
          if (i == input) {
            this.search.filteredValue.push(i)
          }
        }        
      },  
      newFunc(value) {
        this.$store.commit(`${this.tipo}Add`, value)
      }
    }
}
</script>

<style lang="scss" scoped>

.search {
  grid-template-rows: 30% 70%;
  grid-template-columns: 90% 10%;
  height: 80px;
  width: 250px;

  &__div{
    grid-area: 2/1/2/1;
    
    &__bar {
      height: 30px;
      width: 100%;
      border: hidden;
      border-radius: 10px;
    }
    &__hiddenList {
      position: absolute;
      visibility: hidden;
      display: flex;
      flex-direction:column;
      width:200px;
    
    }
  }
  &__Btn {
      grid-area: 2/2/2/2;
    }
}
.name {
  grid-area: 1/1/1/1;
}

.notHidden {
  visibility:visible;
}
</style>