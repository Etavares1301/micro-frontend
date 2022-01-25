<template>
  <div id="nav">
    <router-link to="/" id="logo-url">
        <img :src="logo" :alt="alt" id="logo">
    </router-link>      
    <router-link to="../components/receitas">Receitas</router-link>
    <router-link to="../components/despesas">Despesas</router-link>
    <router-link to="../components/investimentos">Investimentos</router-link>
    <router-link to="../components/graficos">Gráficos</router-link>    
    <p>bem vindo, Eduardo</p>
    <router-link to="/login">Sair</router-link>
  </div>  
</template>
<script>
export default {
    name: "Navbar",
    props: ["logo", "alt"]
};
</script>
<style>
#nav {
    background-color: black;
    border-bottom: 4px solid #222;
    padding: 15px 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    max-height: 70px;  
    border-end-end-radius:  2px;  
}

#nav #logo-url {
    margin: auto;
    margin-left: 0;
}

#logo {
    width: 250px;
    height: 50px;
}

#nav a {
    color:chartreuse;
    text-decoration: none;
    margin: 12px;
    transition: .5s;
}

#nav a:hover {
    color: #fcba03;
}

p {
    color: gray;
}
</style>