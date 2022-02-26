<template>
  <main>
    <p class="ask">Escolha a área para o novo cadastro</p>
    <ul class="options">
      <v-btn>
        <h2>Receitas</h2>
        <img src="/img/receita.png" />        
      </v-btn>
      <v-btn>
        <h2>Despesas</h2>
        <img src="/img/despesas.png" />        
      </v-btn>
      <v-btn>
        <h2>Investimentos</h2>
        <img src="/img/investimentos.png" />        
      </v-btn>    
    </ul>
  </main>  
</template>
<script>
  

  export default {
    name: "OptionsAccountRegistration",   
}
</script>
<style scoped>
.ask {
  font-size: 18px;
  color: #222;
}

.options {
  width: 940px;
  margin: 0 300px;
  padding: 75px 5px 0 0;
  
}

.options v-btn {
  display: inline-block;  
  width: 200px;
  height: 230px;
  vertical-align: top;
  margin: 0 1.5%;
  padding: 30px 20px;
  box-sizing: border-box;
  border: 2px solid #000000;
  border-radius: 10px;
  cursor: pointer;  
  background-color: rgb(110, 106, 106);
  
  box-shadow: -5px 5px;
}

.options v-btn:hover {
  border-color: chartreuse;
}

.options v-btn:active {
  border-color: #fcba03;
}

.options v-btn img {
  margin: 10px auto;
  width: 150px;
  height: 150px;  
}

.options v-btn h2 {
  text-align: center;
}
</style>
