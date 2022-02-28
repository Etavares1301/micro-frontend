<template>
  <div class="container">
    <div class="insert">
      <p>Qual conta você irá movimentar?</p>
      <div class="choose">
        <input
          type="text"
          name="Contas"
          v-model="account"
          placeholder="Contas"
        />
        <p>Saldo:</p>
      </div>
      <v-form id="insert-form">
        <div class="description">
          <p>Faça seu lançamento.</p>
          <div class="input">
            <input type="date" v-model="date" placeholder="Data" />
            <input
              type="text"
              class="input-description"
              v-model="description"
              placeholder="Descrição"
            />
            <input
              type="transfer"
              class="input-description"
              v-model="transfer"
              placeholder="Transferência"
            />
            <input type="number" v-model="input" placeholder="Entrada" />
            <input type="number" v-model="output" placeholder="Saída" />
            <input type="submit" class="submit-btn" value="ok" />
          </div>
        </div>
      </v-form>
      <p>Últimas movimentações</p>     
      <div id="table">
        <div>
          <div id="table-heading">            
            <div>Data</div>
            <div>Descrição</div>
            <div>Transferência</div>
            <div>Entrada</div>
            <div>Saída</div>
          </div>
        </div>
        <div id="table-rows">
          <div class="table-row">
            <div class="order-number">27/02/2022</div>
            <div>Supermercado Rossi</div>
            <div>Supermercado</div>
            <div>234</div>
            <div>R$ 120,00</div>
          </div>
          <div class="table-row">
            <div class="order-number">27/02/2022</div>
            <div>Supermercado Rossi</div>
            <div>Supermercado</div>
            <div>234</div>
            <div>R$ 120,00</div>
          </div> 
          <div class="table-row">
            <div class="order-number">27/02/2022</div>
            <div>Supermercado Rossi</div>
            <div>Supermercado</div>
            <div>234</div>
            <div>R$ 120,00</div>
          </div>   
          <div class="table-row">
            <div class="order-number">27/02/2022</div>
            <div>Supermercado Rossi</div>
            <div>Supermercado</div>
            <div>234</div>
            <div>R$ 120,00</div>
          </div>             
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "InsertReleases",
};
</script>
<style scoped>
.container {
  widows: 940px;
  height: 400px;
  background-color: rgb(110, 106, 106);
  box-shadow: -5px 5px;
  border: black;
  border-radius: 5px;
}
.insert {
  margin: 20px;
  padding-top: 20px;
}

.choose input {
  border-radius: 10px;
  height: 25px;
  background-color: darkslateblue;
  color: #708090;
  text-align: center;
  cursor: pointer;
}
.choose {
  display: inline-flex;
  padding: 10px 50px;
}
.choose p {
  padding-left: 15px;
  padding-top: 5px;
}

.description {
  margin: 20px 50px;
}
.description p {
  margin: 10px auto;
}

.input {
  display: inline-flex;
}
.id {
  text-align: center;
  width: 30px;
}

.input-description {
  width: 345px;
}
.input-description2 {
  width: 320px;
}

.submit-btn {
  margin-left: 10px;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  background-color: #006400;
  color: darkgray;
  box-shadow: 2px 2px;
  cursor: pointer;
}
/*Últimas movimentações */
p {
  color: white;
}
#table {
  max-width: 1200px;
  margin: 0 50px;
}
#table-heading,
#table-rows,
.table-row {
  display: flex;
  flex-wrap: wrap;
}
#table-heading {
  font-weight: bold;
  padding: 12px;
  border-bottom: 3px solid #333;
}
#table-heading div,
.table-row div {
  width: 20%;
}
.table-row {
  width: 100%;
  padding: 12px;  
}

</style>
