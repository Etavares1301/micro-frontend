<template>
    <div class="main-container">
        <h1>Cadastro de Contas</h1>
        <OptionsAccountRegistration />
    </div>
    
</template>
<script>
import OptionsAccountRegistration from "../components/OptionsAccountRegistration";
 export default {
     name: "AccountRegistration",
     components: {
         OptionsAccountRegistration,
     }
 }
</script>