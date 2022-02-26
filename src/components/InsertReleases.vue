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
            <input type="number" class="id" v-model="id" placeholder="Id" />
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
      <div class="historc-container">
        <input type="submit" class="submit-btn-editar" value="editar" />
      </div>
        <div class="bank-statement">
          <div class="input">
            <input type="date" v-model="date" />
            <input type="number" class="id" v-model="id" />
            <input
              type="text"
              class="input-description2"
              v-model="description"
            />
            <input
              type="transfer"
              class="input-description2"
              v-model="transfer"
            />
            <input type="number" v-model="input" />
            <input type="number" v-model="output" />
          </div>
          <div class="input">
            <input type="date" v-model="date" />
            <input type="number" class="id" v-model="id" />
            <input
              type="text"
              class="input-description2"
              v-model="description"
            />
            <input
              type="transfer"
              class="input-description2"
              v-model="transfer"
            />
            <input type="number" v-model="input" />
            <input type="number" v-model="output" />
          </div>
          <div class="input">
            <input type="date" v-model="date" />
            <input type="number" class="id" v-model="id" />
            <input
              type="text"
              class="input-description2"
              v-model="description"
            />
            <input
              type="transfer"
              class="input-description2"
              v-model="transfer"
            />
            <input type="number" v-model="input" />
            <input type="number" v-model="output" />
          </div>
          <div class="input">
            <input type="date" v-model="date" />
            <input type="number" class="id" v-model="id" />
            <input
              type="text"
              class="input-description2"
              v-model="description"
            />
            <input
              type="transfer"
              class="input-description2"
              v-model="transfer"
            />
            <input type="number" v-model="input" />
            <input type="number" v-model="output" />
          </div>
          <div class="input">
            <input type="date" v-model="date" />
            <input type="number" class="id" v-model="id" />
            <input
              type="text"
              class="input-description2"
              v-model="description"
            />
            <input
              type="transfer"
              class="input-description2"
              v-model="transfer"
            />
            <input type="number" v-model="input" />
            <input type="number" v-model="output" />
          </div>
          <div class="input">
            <input type="date" v-model="date" />
            <input type="number" class="id" v-model="id" />
            <input
              type="text"
              class="input-description2"
              v-model="description"
            />
            <input
              type="transfer"
              class="input-description2"
              v-model="transfer"
            />
            <input type="number" v-model="input" />
            <input type="number" v-model="output" />
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
  width: 330px;
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
.bank-statement {
  width: 1140px;
  margin: 10px 50px;
  border: 2px solid black;
  padding: 7px 7px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: black;
}
.historc-container {
    display: flex;
    justify-content: flex-end;
    margin-right: 47px;
    
}
.submit-btn-editar {
  margin-left: 10px;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  background-color: blue;
  color: darkgray;
  box-shadow: 2px 2px;
  cursor: pointer;
}

p {
  color: white;
}
</style>
