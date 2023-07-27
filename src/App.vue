<template>
  <body id="body" class="bg-[#FCFAF9]">
      <nav class="bg-[#333333] w-100% sticky flex justify-end p-5">
        <h1 class="text-white text-justify pt-4 pb-4 mr-3">Nome do usuario</h1>
        <img src="https://cdn-icons-png.flaticon.com/512/727/727399.png?w=826&t=st=1684797987~exp=1684798587~hmac=8869c73c42c8c507c757d10e6a7216f9171f39c3a92aa1d30b1d408f70df60f5"/>
      </nav>
      <aside class="flex bg-[#5E5E5E] flex-col text-gray-200 h-100 p-5 pt-15">
        <hr class="w-100 bg-white border-0.5 -m-5 mb-4">
        <button @click="$router.push('presence')"> Presença </button>
        <hr>
        <button @click="$router.push('grade')"> Notas </button>
        <hr>
        <button @click="$router.push('create')"> Criar </button>
        <hr>
        <button @click="$router.push('/')"> Fechar </button>
      </aside>

        <router-view class="router"/>
      
      <footer class="bg-[#333333] text-white">
        <p>Gustavos-Copyright</p>
      </footer>
  </body>
  
</template>

<script>

</script>

<style lang="scss">
#app, html, body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  width: 100%;
  height: 100%;
}
#body{ 
  display: grid;
  grid-template-columns: 15% 85%;
  grid-template-rows: 10% 80% 10%;

  nav {
  grid-area: 1/1/2/3;
  }
  
  aside {
    grid-area: 2/1/2/1;
  }  

  footer {
    grid-area: 3/1/3/3;
    padding: 25px;
    justify-content: center;
    align-content: center;
  }
  button {
    border-radius: 5px;
    border: none;
    height: 30px;
    font-size: large;
  }
} 
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

</style>
