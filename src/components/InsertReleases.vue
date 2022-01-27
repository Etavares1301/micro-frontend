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
            <input type="number" v-model="id" placeholder="Id" />
            <input type="text" v-model="description" placeholder="Descrição" />
            <input
              type="transfer"
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
      <div class="bank-statement">
      <div class="input">
        <input type="date" v-model="date" />
        <input type="number" v-model="id" />
        <input type="text" v-model="description" />
        <input type="transfer" v-model="transfer" />
        <input type="number" v-model="input" />
        <input type="number" v-model="output" />
      </div>
      <div class="input">
        <input type="date" v-model="date" />
        <input type="number" v-model="id" />
        <input type="text" v-model="description" />
        <input type="transfer" v-model="transfer" />
        <input type="number" v-model="input" />
        <input type="number" v-model="output" />
      </div>
      <div class="input">
        <input type="date" v-model="date" />
        <input type="number" v-model="id" />
        <input type="text" v-model="description" />
        <input type="transfer" v-model="transfer" />
        <input type="number" v-model="input" />
        <input type="number" v-model="output" />
      </div>
      <div class="input">
        <input type="date" v-model="date" />
        <input type="number" v-model="id" />
        <input type="text" v-model="description" />
        <input type="transfer" v-model="transfer" />
        <input type="number" v-model="input" />
        <input type="number" v-model="output" />
      </div>
      <div class="input">
        <input type="date" v-model="date" />
        <input type="number" v-model="id" />
        <input type="text" v-model="description" />
        <input type="transfer" v-model="transfer" />
        <input type="number" v-model="input" />
        <input type="number" v-model="output" />
      </div>
      <div class="input">
        <input type="date" v-model="date" />
        <input type="number" v-model="id" />
        <input type="text" v-model="description" />
        <input type="transfer" v-model="transfer" />
        <input type="number" v-model="input" />
        <input type="number" v-model="output" />
      </div>
      <div class="input">
        <input type="date" v-model="date" />
        <input type="number" v-model="id" />
        <input type="text" v-model="description" />
        <input type="transfer" v-model="transfer" />
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
  background-color: #222;
  opacity: 0.5;
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
}
.choose {
  display: inline-flex;
  padding: 10px 50px;
}
.choose p {
  padding-left: 15px;
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
    margin: 20px 50px;
}
p {
  color: white;
}
</style>
