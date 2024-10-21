<template>
  <v-container fluid>
    <v-row justify="center" align="center" class="fill-height">
      <v-col cols="12" sm="8" md="4" v-if="tokenExpired" class="error-message">
        <img
          src="https://cdn-icons-png.flaticon.com/512/753/753345.png"
          alt="Erro"
        />
        <h1>Ooops...!</h1>
        <p>Seu token de recuperação expirou.</p>
      </v-col>

      <v-col cols="12" sm="8" md="4" v-else class="container">
        <h1>Recuperação de Senha</h1>
        <v-row>
          <v-col cols="12" class="input-container">
            <v-text-field
              type="password"
              label="Nova senha"
              v-model="novaSenha"
              outlined
              hide-details
              dense
            />
          </v-col>
          <v-col cols="12" class="input-container">
            <v-text-field
              type="password"
              label="Confirme a senha"
              v-model="confirmarSenha"
              outlined
              hide-details
              dense
            />
          </v-col>
        </v-row>
        <v-btn class="mt-4" color="primary" @click="alterarSenha" block>
          Alterar senha
        </v-btn>
        <div class="footer">2024 Traveler Brasil</div>
      </v-col>

      <v-col cols="12" sm="8" md="4" v-if="success" class="success-message">
        <img
          src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
          alt="Sucesso"
        />
        <h1>Senha Alterada!</h1>
        <p>Sua senha foi alterada com sucesso.</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { VBtn, VTextField } from "vuetify/lib";

const novaSenha = ref("");
const confirmarSenha = ref("");
const token = ref(null);
const tokenExpired = ref(false);
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
body {
  background-color: #0f1624;
  font-family: Arial, sans-serif;
}

.container,
.success-message,
.error-message {
  text-align: center;
  background-color: #0f1624;
  padding: 40px;
  border-radius: 10px;
  color: white;
}

img {
  width: 60px;
  margin-bottom: 40px;
}

h1 {
  color: white;
  font-size: 24px;
  margin-bottom: 60px;
}

.input-container {
  margin-bottom: 20px;
}

.footer {
  color: white;
  font-size: 12px;
  margin-top: 30px;
}

.success-message img,
.error-message img {
  width: 100px;
  margin-bottom: 40px;
}

.success-message h1,
.error-message h1 {
  font-size: 44px;
  margin-bottom: 20px;
}

.success-message p,
.error-message p {
  font-size: 16px;
  margin-bottom: 20px;
}
</style>
