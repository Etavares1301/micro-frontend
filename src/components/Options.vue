<template>
  <main>
    <p class="ask">O que deseja fazer?</p>
    <ul class="options">
      <v-btn>
        <h2>Lançamentos</h2>
        <img src="/img/dollar_sign.png" />
        <p class="description">Adicione todo valor recebido ou gasto</p>
      </v-btn>
      <v-btn>
        <h2>Contas</h2>
        <img src="/img/despesas.png" />
        <p class="description">Cadastre ou veja suas contas</p>
      </v-btn>
      <v-btn>
        <h2>Relatórios</h2>
        <img src="/img/relatorio.png" />
        <p class="description">Veje seus extratos, relatórios e outros</p>
      </v-btn>
      <v-btn>
        <h2>Análises</h2>
        <img src="/img/financial_life.png" />
        <p class="description">Análises da sua vida financeira</p>
      </v-btn>
    </ul>
  </main>  
</template>
<script>
  

  export default {
    name: "Options",
    
    
    
}
</script>
<style scoped>
.ask {
  font-size: 18px;
}

.options {
  width: 940px;
  margin: 0 auto;
  padding: 75px 5px 0 0;
}

.options v-btn {
  display: inline-block;  
  max-width: 200px;
  height: 300px;
  vertical-align: top;
  margin: 0 1.5%;
  padding: 30px 20px;
  box-sizing: border-box;
  border: 2px solid #000000;
  border-radius: 10px;
  cursor: pointer;  
  background-color: #778899;
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
.description {  
  font-size: 18px;
  text-align: center;
  color: #c0c0c0;  
}
</style>
