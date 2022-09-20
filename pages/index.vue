<template>
<div class="container my-5">
  <div class="content d-flex justify-content-center align-items-center">
    
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">Confira o clima de uma cidade:</h3>
        <form class="d-flex my-3">
          <input v-model="cityName" class="form-control me-2" type="search" placeholder="Digite o nome da cidade" aria-label="Search" @keyup.prevent="getWeather(cityName)">
          <button class="btn btn-primary" type="button" @click="getWeather(cityName)">
            <i class="fa-sharp fa-solid fa-magnifying-glass-location"></i>
          </button>
        </form>

        <div class="city text-center mt-4" v-if="weather">
          <hr>

          <div class="my-3">
            <h2>
            <i class="fa-sharp fa-solid fa-location-dot"></i>
              {{weather.name}}
            <img class="flag" :src="`https://countryflagsapi.com/png/${weather.sys.country}`" alt="bandeira do pais"> 
            </h2>
          </div>
          

          <div class="my-3">
            <p><span>{{weather.main.temp}}</span> &deg;C</p>
          </div>
          

          <div class="d-flex justify-content-center align-items-center my-3">
            <span>{{weather.weather[0].description}}</span>
            <img :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`" alt="Condições do tempo">
          </div>

          <div class="d-flex justify-content-center my-3">
            <p>
              <i class="fa-solid fa-droplet mx-2"></i>
              <span> {{weather.main.humidity}}%</span>
            </p>
            <p class="mx-3" style="border-right: 2px solid white;"></p>
            <p>
              <i class="fa-solid fa-wind mx-2"></i>
              <span> {{weather.wind.speed}}</span>
            </p>
          </div>

        </div>

      </div>
    </div>

  </div>
</div>
</template>

<script setup lang="ts">
import api from '@/services/api';
import IWeather from '@/interface/IWeather'

useHead({
  title: "Weatherman",
})

const weather = ref<IWeather>()

const cityName = ref('')

const apiUnsplash = "https://source.unsplash.com/1600x900/?"

async function getWeather(city: string) {
  await api.getWeather(city).then((response) => {
    weather.value = response.data  
    document.getElementById("__nuxt").style.backgroundImage = `url("${apiUnsplash + city}")`;
  })
}

</script>

<style >
.content {
    min-height: 600px;
}


.card {
  background-color: #5c54ed;
  color:white;
}

.flag{
  height: 25px;
}
body{
  background: linear-gradient(180deg, rgba(89, 76, 238, 1) 0%, #8dd0f5 100%) !important;
  background-position: center;
  background-size: cover;
}

</style>