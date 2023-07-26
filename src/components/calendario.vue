<template>
  <div class="w-15 grid place-self-center ml-4" >
    <VueDatePicker
      v-model="date"
      :max-date="new Date()"
      placeholder="Select Date"
      :enable-time-picker="false"
      cancelText="Cancelar"
      selectText="Selecionar"
      :day-names="['D', 'S', 'T', 'Q', 'Q', 'S', 'S']"
      :format="formatDate"
      :preview-format="formatDate"
      
    />
  </div>
  

</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'


export default {
  data() {
    return {
      date: new Date,
    }
  },
  watch: {
    date(newDate) {
      const dataFormated = this.formatDate(newDate)
      this.$store.commit('dateChange', dataFormated)
    }
  },
  methods:{
    formatDate(data){
      const dataV = data === null ? new Date : data 
      const yyyy = dataV.getFullYear()
      let mm = dataV.getMonth() + 1
      let dd = dataV.getDate()

      if (dd < 10) dd = '0' + dd
      if (mm < 10) mm = '0' + mm
      return dd + '/' + mm + '/' + yyyy

    }
  }
}
</script>