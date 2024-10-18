<template>
  <v-main
    :style="mobile ? 'padding: 100px 25px 80px' : 'padding: 100px 80px 80px'"
  >
    <div class="container">
      <div
        class="d-flex flex-column fill-height justify-center align-center text-white py-15 mt-15"
      >
        <h1 class="text-h1 font-weight-thin mb-4 title">Traveler Brasil</h1>
        <h4
          class="font-weight-thin text-h5 mt-5 mb-10"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          Viaje com mais
          <v-chip
            style="background-color: #0e6eff"
            size="large"
            class="font-weight-thin text-h6 mb-1 font-weight-bold"
            >organização
          </v-chip>
        </h4>
      </div>
    </div>
    <div :class="mobile ? 'container-images' : 'container-images mb-15 py-15'">
      <v-row v-if="mobile">
        <v-col cols="12">
          <v-carousel
            hide-delimiters
            cycle
            interval="4000"
            class="rounded-xl"
            :show-arrows="false"
          >
            <v-carousel-item>
              <v-card class="my-10 rounded-xl">
                <v-card-text class="pa-0">
                  <v-parallax class="rounded-xl" :src="map"> </v-parallax>
                </v-card-text>
              </v-card>
            </v-carousel-item>
            <v-carousel-item>
              <v-card class="my-10 rounded-xl">
                <v-card-text class="pa-0">
                  <v-parallax class="rounded-xl" :src="gps"> </v-parallax>
                </v-card-text>
              </v-card>
            </v-carousel-item>
            <v-carousel-item>
              <v-card class="my-10 rounded-xl">
                <v-card-text class="pa-0">
                  <v-parallax class="rounded-xl" :src="rua"> </v-parallax>
                </v-card-text>
              </v-card>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>

      <v-row v-else>
        <v-col cols="12" lg="4" sm="12">
          <v-card class="my-10 rounded-xl">
            <v-card-text class="pa-0">
              <v-parallax class="rounded-xl" :src="map"> </v-parallax>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" lg="4" sm="12">
          <v-card class="my-10 rounded-xl">
            <v-card-text class="pa-0">
              <v-parallax class="rounded-xl" :src="gps"> </v-parallax>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" lg="4" sm="12">
          <v-card class="my-10 rounded-xl">
            <v-card-text class="pa-0">
              <v-parallax class="rounded-xl" :src="rua"> </v-parallax>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-main>

  <section
    :class="mobile ? 'aplicativo ' : 'aplicativo mt-15 py-15'"
    :style="
      !mobile
        ? 'min-height: 80vh; padding: 80px 115px 80px'
        : 'min-height: 80vh; padding: 80px 25px 80px'
    "
  >
    <v-row class="fill-height d-flex justify-center">
      <v-col cols="12" lg="6" sm="12" class="mt-10">
        <div
          class="text-justify d-flex justify-center align-center flex-column"
        >
          <div
            :class="
              mobile
                ? 'text-h3 font-weight-thin'
                : 'text-h3 font-weight-thin my-10'
            "
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            O aplicativo
          </div>
          <div
            style="color: gray; font-size: 18px"
            class="mt-5"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            O <span class="text-white">Traveler Brasil</span> é o aplicativo
            ideal para quem busca planejamento financeiro e
            <span class="text-white">organização</span> em suas viagens. Com
            foco na <span class="text-white">gestão</span> de despesas de
            viagem, o app permite que você cadastre suas viagens, adicione
            gastos detalhados, e vincule despesas a cada viagem de forma
            <span class="text-white">prática</span>.
          </div>
        </div>
      </v-col>
    </v-row>
  </section>
  <section
    v-if="mobile"
    id="vantagens"
    style="min-height: 60vh; padding: 5px 25px 10px"
  >
    <v-row class="fill-height d-flex justify-center">
      <v-col cols="12">
        <v-card class="rounded-xl" data-aos="fade-up" data-aos-duration="2000">
          <v-card-text class="pa-0">
            <v-parallax
              class="rounded-xl"
              :src="globo"
              style="max-height: 820px"
            >
            </v-parallax>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" class="d-flex justify-center align-center">
        <div
          class="text-justify d-flex justify-center align-center flex-column"
        >
          <div class="text-h5 font-weight-thin-bold my-10 text-center">
            Quais as vantagens de utilizar Traveler Brasil?
          </div>
          <div style="color: gray">
            Com um <span class="text-white">design minimalista</span> e
            intuitivo, o
            <span class="text-white">Traveler Brasil</span> prioriza a
            usabilidade e oferece uma
            <span class="text-white">visualização clara</span> e
            <span class="text-white">organizada</span> das informações
            essenciais, como categorias de despesas, valores gastos, e
            planejamento futuro. Isso possibilita um
            <span class="text-white">controle</span> mais eficaz de seus
            orçamentos de viagem, ajudando você a manter suas finanças sempre
            sob controle, seja em viagens de lazer ou a trabalho.
          </div>
        </div>
      </v-col>
    </v-row>
  </section>
  <section
    v-else
    id="vantagens"
    style="min-height: 60vh; padding: 5px 115px 80px"
  >
    <v-row class="fill-height d-flex justify-start">
      <v-col cols="5">
        <v-card
          class="my-5 rounded-xl"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <v-card-text class="pa-0">
            <v-parallax
              class="rounded-xl"
              :src="globo"
              style="max-height: 820px"
            >
            </v-parallax>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="7" class="d-flex justify-center align-center pa-10">
        <div
          class="text-justify d-flex justify-center align-center flex-column"
        >
          <div class="text-h5 font-weight-thin-bold my-10">
            Quais as vantagens de utilizar Traveler Brasil?
          </div>
          <div style="color: gray">
            Com um <span class="text-white">design minimalista</span> e
            intuitivo, o
            <span class="text-white">Traveler Brasil</span> prioriza a
            usabilidade e oferece uma
            <span class="text-white">visualização clara</span> e
            <span class="text-white">organizada</span> das informações
            essenciais, como categorias de despesas, valores gastos, e
            planejamento futuro. Isso possibilita um
            <span class="text-white">controle</span> mais eficaz de seus
            orçamentos de viagem, ajudando você a manter suas finanças sempre
            sob controle, seja em viagens de lazer ou a trabalho.
          </div>
        </div>
      </v-col>
    </v-row>
  </section>

  <section
    v-if="mobile"
    id="funcionalidades"
    class="mt-15 py-15"
    style="min-height: 120vh; padding: 5px 25px 80px; background-color: #f5f5f5"
  >
    <v-row class="d-flex justify-center" style="min-height: 25vh">
      <v-col cols="12">
        <div class="text-center my-10">
          <div class="text-h3 text-black font-weight-thin">Funcionalidades</div>
          <div
            class="font-weight-thin mt-3"
            style="color: gray; font-size: 20px"
          >
            Facilite suas viagens com organização, controle de gastos e muito
            mais.
          </div>
        </div>
      </v-col>
    </v-row>

    <v-row
      class="d-flex justify-center text-center mt-10 py-10"
      style="min-height: 25vh"
    >
      <v-col cols="12" data-aos="fade-right" data-aos-duration="3000">
        <v-row class="d-flex justify-center align-center text-h5 mb-5">
          <strong class="text-black font-weight-light"
            >Comparativo Gasto Previsto x Gasto Real:</strong
          >
        </v-row>
        <v-row>
          <div
            class="text-justify font-weight-thin mt-5 px-5"
            style="color: gray; font-size: 20px"
          >
            Cadastre seus gastos previstos e acompanhe a diferença com os
            valores reais conforme suas despesas forem inseridas.
          </div>
        </v-row>
      </v-col>

      <v-col
        cols="12"
        data-aos="fade-left"
        data-aos-duration="3000"
        class="py-10 mt-10"
      >
        <v-row class="d-flex justify-center align-center text-h5 mb-5">
          <strong class="text-black font-weight-light"
            >Organização por Categorias:</strong
          >
        </v-row>
        <v-row>
          <div
            class="font-weight-thin mt-5 px-5"
            style="color: gray; font-size: 20px"
          >
            Separe suas despesas por categorias (alimentação, transporte,
            hospedagem, etc.) para uma visão clara e organizada dos gastos.
          </div>
        </v-row>
      </v-col>
    </v-row>

    <v-row
      class="d-flex justify-center text-center mt-10"
      style="min-height: 25vh"
    >
      <v-col cols="12" data-aos="fade-right" data-aos-duration="3000">
        <v-row class="d-flex justify-center align-center text-h5 mb-5">
          <strong class="text-black font-weight-light"
            >Histórico de Viagens:</strong
          >
        </v-row>
        <v-row>
          <div
            class="font-weight-thin mt-5 px-5"
            style="color: gray; font-size: 20px"
          >
            Suas viagens ficam salvas em um histórico detalhado, com informações
            de despesas e planejamento acessíveis a qualquer momento.
          </div>
        </v-row>
      </v-col>

      <v-col
        cols="12"
        data-aos="fade-left"
        data-aos-duration="3000"
        class="mt-10 py-10"
      >
        <v-row class="d-flex justify-center align-center text-h5 mb-5">
          <strong class="text-black font-weight-light"
            >Localização da Cidade de Destino:</strong
          >
        </v-row>
        <v-row>
          <div
            class="font-weight-thin mt-5 px-5"
            style="color: gray; font-size: 20px"
          >
            Informe a localização da cidade de destino para ter um histórico
            mais completo de suas viagens.
          </div>
        </v-row>
      </v-col>
    </v-row>
  </section>
  <section
    v-else
    id="funcionalidades"
    class="mt-15 py-15"
    style="min-height: 80vh; padding: 5px 115px 80px; background-color: #f5f5f5"
  >
    <v-row class="d-flex justify-center" style="min-height: 25vh">
      <v-col cols="12" sm="11" md="11">
        <div class="text-center my-10">
          <div class="text-h3 text-black font-weight-thin">Funcionalidades</div>
          <div
            class="font-weight-thin mt-3"
            style="color: gray; font-size: 22px"
          >
            Facilite suas viagens com organização, controle de gastos e muito
            mais.
          </div>
        </div>
      </v-col>
    </v-row>

    <v-row class="d-flex justify-center mt-10" style="min-height: 25vh">
      <v-col
        cols="4"
        class="mr-10"
        data-aos="fade-right"
        data-aos-duration="3000"
      >
        <v-row class="d-flex justify-center align-center text-h5 mb-5">
          <strong class="text-black font-weight-light"
            >Comparativo Gasto Previsto x Gasto Real:</strong
          >
        </v-row>
        <v-row>
          <div
            class="text-center font-weight-thin mt-5 px-5"
            style="color: gray; font-size: 20px"
          >
            Cadastre seus gastos previstos e acompanhe a diferença com os
            valores reais conforme suas despesas forem inseridas.
          </div>
        </v-row>
      </v-col>

      <v-col
        cols="4"
        class="ml-10"
        data-aos="fade-left"
        data-aos-duration="3000"
      >
        <v-row class="d-flex justify-center align-center text-h5 mb-5">
          <strong class="text-black font-weight-light"
            >Organização por Categorias:</strong
          >
        </v-row>
        <v-row>
          <div
            class="text-center font-weight-thin mt-5 px-5"
            style="color: gray; font-size: 20px"
          >
            Separe suas despesas por categorias (alimentação, transporte,
            hospedagem, etc.) para uma visão clara e organizada dos gastos.
          </div>
        </v-row>
      </v-col>
    </v-row>

    <v-row class="d-flex justify-center mt-10" style="min-height: 25vh">
      <v-col
        cols="4"
        class="mr-10"
        data-aos="fade-right"
        data-aos-duration="3000"
      >
        <v-row class="d-flex justify-center align-center text-h5 mb-5">
          <strong class="text-black font-weight-light"
            >Histórico de Viagens:</strong
          >
        </v-row>
        <v-row>
          <div
            class="text-center font-weight-thin mt-5 px-5"
            style="color: gray; font-size: 20px"
          >
            Suas viagens ficam salvas em um histórico detalhado, com informações
            de despesas e planejamento acessíveis a qualquer momento.
          </div>
        </v-row>
      </v-col>

      <v-col
        cols="4"
        class="ml-10"
        data-aos="fade-left"
        data-aos-duration="3000"
      >
        <v-row class="d-flex justify-center align-center text-h5 mb-5">
          <strong class="text-black font-weight-light"
            >Localização da Cidade de Destino:</strong
          >
        </v-row>
        <v-row>
          <div
            class="text-center font-weight-thin mt-5 px-5"
            style="color: gray; font-size: 20px"
          >
            Informe a localização da cidade de destino para ter um histórico
            mais completo de suas viagens.
          </div>
        </v-row>
      </v-col>
    </v-row>
  </section>

  <section
    v-if="mobile"
    id="contato"
    style="min-height: 60vh; padding: 5px 25px 80px"
    class="mt-15 py-15"
  >
    <v-row class="d-flex justify-center" style="min-height: 25vh">
      <v-col cols="12" sm="11" md="11">
        <div class="text-center my-10">
          <div class="text-h3 font-weight-thin">Em breve</div>
          <div
            class="font-weight-thin mt-3"
            style="color: gray; font-size: 19px"
          >
            Uma nova maneira de simplificar sua viagem
          </div>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <div>
          <v-img :src="apple" width="250"></v-img>
        </div>
      </v-col>
      <v-col cols="12" class="d-flex justify-center">
        <div>
          <v-img :src="ps" width="250"></v-img>
        </div>
      </v-col>
    </v-row>
  </section>
  <section
    v-else
    id="contato"
    style="min-height: 60vh; padding: 5px 115px 80px"
    class="mt-15 py-15"
  >
    <v-row class="d-flex justify-center" style="min-height: 25vh">
      <v-col cols="12" sm="11" md="11">
        <div class="text-center my-10">
          <div class="text-h3 font-weight-thin">Em breve</div>
          <div
            class="font-weight-thin mt-3"
            style="color: gray; font-size: 22px"
          >
            Uma nova maneira de simplificar sua viagem
          </div>
        </div>
      </v-col>
    </v-row>

    <v-row class="d-flex align-center justify-center">
      <v-col cols="12" sm="2">
        <v-img :src="apple" width="250"></v-img>
      </v-col>
      <v-col cols="12" sm="2">
        <v-img :src="ps" width="250"></v-img>
      </v-col>
    </v-row>
  </section>

  <section id="contato" style="min-height: 5vh" class="mb-5">
    <div class="d-flex flex-column align-center justify-center">
      <p class="font-weight-thin text-h6">contato@travelerbrasil.com</p>
    </div>
  </section>
</template>

<script setup>
import { useDisplay } from "vuetify";

const { mobile } = useDisplay();

import apple from "../assets/apple.png";
import ps from "../assets/ps.png";
import globo from "../assets/globo.jpg";
import gps from "../assets/gps.jpg";
import rua from "../assets/rua.jpg";
import map from "../assets/map.jpg";
</script>

<style scoped>
.hover:hover {
  transform: scale(1.05);
  transition: all 0.3s ease;
}

.title {
  opacity: 0;
  animation: fadeIn 2s ease-in forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
