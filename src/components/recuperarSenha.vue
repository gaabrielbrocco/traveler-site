<template>
  <v-container class="d-flex align-center justify-center fill-height" fluid>
    <v-row class="d-flex justify-center align-center">
      <v-card
        class="mx-auto my-8"
        max-width="344"
        variant="text"
        v-if="tokenExpired"
      >
        <v-card-item class="d-flex align-center justify-center text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/753/753345.png"
            width="130"
          />
          <v-card-title>
            <h1>Ooops...!</h1>
          </v-card-title>
        </v-card-item>

        <v-card-text class="text-justify">
          <h3 class="font-weight-light">Seu token de recuperação expirou.</h3>
        </v-card-text>
      </v-card>

      <v-card
        v-else
        class="mx-auto my-8 pa-8 rounded-xl container"
        max-width="550"
        style="background-color: #00050d"
        :variant="mobile ? 'default' : 'outlined'"
      >
        <h1 class="text-center mb-3 font-weight-light">Recuperação de Senha</h1>
        <v-row>
          <v-col cols="12" class="input-container">
            <v-text-field
              label="Nova senha"
              v-model="novaSenha"
              variant="underlined"
              hide-details
              dense
              @click:append-inner="showPassword = !showPassword"
              :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
            />
          </v-col>
          <v-col cols="12" class="input-container">
            <v-text-field
              label="Confirme a senha"
              v-model="confirmarSenha"
              variant="underlined"
              hide-details
              dense
              @click:append-inner="showConfirmPassword = !showConfirmPassword"
              :append-inner-icon="
                showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'
              "
              :type="showConfirmPassword ? 'text' : 'password'"
            />
          </v-col>
        </v-row>
        <v-btn
          class="mt-10 rounded-xl"
          style="background-color: #0e6eff"
          @click="alterarSenha"
          block
        >
          Alterar senha
        </v-btn>
        <div class="text-center mt-5">2024 Traveler Brasil</div>
      </v-card>

      <v-card
        class="mx-auto my-8"
        max-width="344"
        variant="text"
        v-if="success"
      >
        <v-card-item class="d-flex align-center justify-center text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
            width="130"
          />
          <v-card-title>
            <h1>Senha Alterada!</h1>
          </v-card-title>
        </v-card-item>

        <v-card-text class="text-center">
          <h3 class="font-weight-light">Sua senha foi alterada com sucesso.</h3>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useDisplay } from "vuetify";
const { mobile } = useDisplay();

const novaSenha = ref("");
const confirmarSenha = ref("");
const token = ref(null);
const tokenExpired = ref(false);
const showPassword = ref(false);
const showConfirmPassword = ref(false);
const success = ref(false);

function isTokenExpired(token) {
  if (!token) return true;

  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  const { exp } = JSON.parse(jsonPayload);
  return Date.now() >= exp * 1000;
}

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search);
  token.value = urlParams.get("token");

  if (isTokenExpired(token.value)) {
    tokenExpired.value = true;
  }
});

async function alterarSenha() {
  if (novaSenha.value !== confirmarSenha.value) {
    alert("As senhas não conferem!");
    return;
  }

  const data = {
    novaSenha: novaSenha.value,
    confirmarSenha: confirmarSenha.value,
    token: token.value,
  };

  try {
    const response = await fetch(
      "https://traveler-api-n420.onrender.com/auth/redefinir-senha",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (response.ok) {
      novaSenha.value = "";
      confirmarSenha.value = "";
      success.value = true;
    } else {
      const errorData = await response.json();
      alert("Erro ao alterar a senha: " + errorData.message);
    }
  } catch (error) {
    alert("Erro de comunicação com o servidor: " + error.message);
  }
}
</script>

<style scoped>
.container {
  background-color: #0f1624;
}
</style>
