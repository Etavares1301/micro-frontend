<template>
  <div class="main-container">
    <main>
      <p class="ask">O que deseja fazer?</p>
      <ul class="options">
        <v-btn>
          <h2>Receitas</h2>
          <img src="/img/dollar_sign.png" />
          <p class="value">Saldo Atual:</p>
          <p class="description">Adicione todo valor recebido</p>
        </v-btn>
        <v-btn>
          <h2>Despesas</h2>
          <img src="/img/despesas.png" />
          <p class="value">Valor total devido:</p>
          <p class="description">Adicione todo valor gasto</p>
        </v-btn>
        <v-btn>
          <h2>Investimentos</h2>
          <img src="/img/cloud_money.png" />
          <p class="value">Valor total investido:</p>
          <p class="description">Adicione todo valor Investido</p>
        </v-btn>
        <v-btn>
          <h2>Gráficos</h2>
          <img src="/img/financial_life.png" />
          <p class="description">Visualização da sua vida financeira</p>
        </v-btn>
      </ul>
    </main>
  </div>
</template>
<script>
</script>
<style scoped>
.ask {
  font-size: 18px;
}

.options {
  width: 940px;
  margin: 0 auto;
  padding: 35px 0;
}

.options v-btn {
  display: inline-block;
  max-width: 200px;
  height: 330px;
  vertical-align: top;
  margin: 0 1.5%;
  padding: 30px 20px;
  box-sizing: border-box;
  border: 2px solid #000000;
  border-radius: 10px;
}

.options v-btn:hover {
  border-color: chartreuse;
}

.options v-btn:active {
  border-color: #fcba03;
}

.options v-btn img {
  width: 150px;
  height: 150px;
}

.options v-btn h2 {
  text-align: center;
}
.description {
  font-size: 18px;
  padding-top: 10px;
}

.value {
  font-size: 18px;
  font-weight: bold;
}
</style>

