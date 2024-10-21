<template>
  <div v-if="!tokenExpired" class="container">
    <h1>Recuperação de Senha</h1>
    <div class="input-container">
      <input type="password" placeholder="Nova senha" v-model="novaSenha" />
    </div>
    <div class="input-container">
      <input
        type="password"
        placeholder="Confirme a senha"
        v-model="confirmarSenha"
      />
    </div>
    <button @click="alterarSenha">Alterar senha</button>
    <div class="footer">2024 Traveler Brasil</div>
  </div>

  <div v-if="success" class="success-message">
    <img
      src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
      alt="Sucesso"
    />
    <h1>Senha Alterada!</h1>
    <p>Sua senha foi alterada com sucesso.</p>
  </div>

  <div v-if="tokenExpired" class="error-message">
    <img
      src="https://cdn-icons-png.flaticon.com/512/753/753345.png"
      alt="Erro"
    />
    <h1>Ooops...!</h1>
    <p>Seu token de recuperação expirou.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.container {
  text-align: center;
  background-color: #0f1624;
  padding: 40px;
  border-radius: 10px;
  width: 300px;
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

input[type="password"] {
  width: 93%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #1b2433;
  color: white;
  font-size: 16px;
}

button {
  width: 92%;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 10px;
  font-size: 18px;
  margin-top: 25px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.link {
  color: white;
  font-size: 14px;
  margin-top: 20px;
  display: block;
}

.footer {
  color: white;
  font-size: 12px;
  margin-top: 30px;
}

.success-message {
  display: none;
  text-align: center;
  background-color: #0f1624;
  padding: 40px;
  border-radius: 10px;
  width: 300px;
  color: white;
}

.success-message img {
  width: 100px;
  margin-bottom: 40px;
}

.success-message h1 {
  font-size: 44px;
  margin-bottom: 20px;
}

.success-message p {
  font-size: 16px;
  margin-bottom: 20px;
}

.error-message {
  display: none;
  text-align: center;
  background-color: #0f1624;
  padding: 40px;
  border-radius: 10px;
  width: 300px;
  color: white;
}

.error-message img {
  width: 100px;
  margin-bottom: 40px;
}

.error-message h1 {
  font-size: 44px;
  margin-bottom: 20px;
}

.error-message p {
  font-size: 16px;
  margin-bottom: 20px;
}
</style>
