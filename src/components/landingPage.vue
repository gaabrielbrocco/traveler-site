<template>
  <!-- <v-toolbar :elevation="0" height="80" class="rounded-b-xl px-4" color="black">
    <div class="d-flex justifgy-start align-start">
      <v-img
        class="ml-5"
        style="height: 100px; width: 85px"
        src="https://images.stockcake.com/public/1/5/9/1593a6fb-0bf7-4c90-8ae3-b122fde50d7b_large/urban-sunset-skyline-stockcake.jpg"
      ></v-img>
    </div>
  </v-toolbar> -->

  <v-main style="padding: 80px 15px 80px">
    <div class="container">
      <div
        class="d-flex flex-column fill-height justify-center align-center text-white py-15 mt-15"
      >
        <h1 class="text-h1 font-weight-thin mb-4">Traveler Brasil</h1>
        <h4 class="font-weight-thin text-h5 mt-5">
          Viaje com mais
          <v-chip
            style="background-color: #0e6eff"
            size="large"
            class="font-weight-thin text-h6 mb-1 font-weight-bold"
            >organização</v-chip
          >
        </h4>
      </div>
    </div>
    <div class="container-images">
      <v-row>
        <v-col cols="">
          <v-card class="my-10 rounded-xl">
            <v-card-text class="pa-0">
              <v-parallax
                class="rounded-xl"
                :src="city"
                style="max-height: 820px"
              >
                <!-- <div
                  class="d-flex flex-column fill-height justify-center align-center text-white"
                >
                  <h1 class="text-h2 font-weight-thin mb-4">
                    Viaje com mais organização
                  </h1>
                  <h4 class="subheading text-h6">
                    Proteja-se! Navegue com segurança
                  </h4>
                </div> -->
              </v-parallax>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card class="my-10 rounded-xl">
            <v-card-text class="pa-0">
              <v-parallax class="rounded-xl" :src="gps">
                <!-- <div
                  class="d-flex flex-column fill-height justify-center align-center text-white"
                >
                  <h1 class="text-h2 font-weight-thin mb-4">
                    Viaje com mais organização
                  </h1>
                  <h4 class="subheading text-h6">
                    Proteja-se! Navegue com segurança
                  </h4>
                </div> -->
              </v-parallax>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card class="my-10 rounded-xl">
            <v-card-text class="pa-0">
              <v-parallax class="rounded-xl" :src="rua">
                <!-- <div
                  class="d-flex flex-column fill-height justify-center align-center text-white"
                >
                  <h1 class="text-h2 font-weight-thin mb-4">
                    Viaje com mais organização
                  </h1>
                  <h4 class="subheading text-h6">
                    Proteja-se! Navegue com segurança
                  </h4>
                </div> -->
              </v-parallax>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-main>

  <section id="sobre" style="min-height: 60vh; padding: 5px 55px 80px">
    <v-row class="fill-height d-flex justify-center">
      <v-col cols="12" lg="6" sm="11" md="11">
        <div
          class="text-justify d-flex justify-center align-start flex-column col-lg-7 col-12 align-center"
        >
          <div class="text-h5 font-weight-thin my-10">
            Quais as vantagens de utilizar Traveler Brasil?
          </div>
          <div style="color: gray">
            O app
            <span class="text-white">Traveler Brasil</span>
            possibilita um maior
            <span class="text-white">planejamento</span>
            e <span class="text-white">organização</span>
            nas suas viagens.
            <br />
            <br />
            Imagine poder salvar o
            <span class="text-white">histórico de despesas</span>
            de sua viagem, organizadas por categoria, e com facilidade de
            visualização.
            <br />
            <br />
            Nosso app possibilita tudo isso, e com um
            <span class="text-white">design minimalista</span>, onde permite o
            usuário cadastrar viagens e gastos de maneira
            <span class="text-white">simples</span>, priorizando a usabilidade e
            <span class="text-white">fácil visualização</span> das informações
            desejadas.
          </div>
          O Traveler Brasil é o aplicativo ideal para quem busca planejamento
          financeiro e organização em suas viagens. Com foco na gestão de
          despesas de viagem, o app permite que você cadastre suas viagens,
          adicione gastos detalhados, e vincule despesas a cada viagem de forma
          prática.
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script setup>
import city from "@/assets/city.jpg";
import gps from "@/assets/gps.jpg";
import rua from "@/assets/rua.jpg";
</script>

<style scoped>
.container {
  width: 75%;
  padding: 12px;
  margin-right: auto;
  margin-left: auto;
}

.container-images {
  width: 100%;
  padding: 100px;
  display: flex;
}

.hover {
  transition: all 0.5s;
  filter: brightness(0.8);
}

.hover:hover {
  transform: scale(1.05);
  filter: brightness(105%);
}
</style>
