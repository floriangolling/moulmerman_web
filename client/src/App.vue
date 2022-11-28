<template>
  <div id="app" @mousemove="changeMouse" @click="changeMouse">
    <img id="mouseImage" width="30px" height=30px src="./assets/Bestiole.png"  style="display:none" />
    <b-navbar>
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item href="#">
                Home
            </b-navbar-item>
            <b-navbar-item href="#">
                Documentation
            </b-navbar-item>
            <b-navbar-dropdown label="Info">
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
    <div class="hero is-fullheight-with-navbar is-danger has-background">
      <img src="./assets/Bomberman_background.png" class="hero-background">
      <div class="hero-body">
        <div class="section">
          <div class="colums">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Vue from 'vue'

//import Game from './components/Game.vue'
import apiFetcher from './axios';

export default Vue.extend({
  name: 'App' ,
  data() {
    return {
      games: [],
      mouseComponent: null
    }
  },
  components: {

  },
  methods: {
    changeMouse(e) {
      if (!this.mouseComponent)
        return;
      this.mouseComponent.style = `z-index:99999;position:absolute;left: ${e.clientX - 10}px;top:${e.clientY - 10}px`
      console.log(e);
    },
    async getAllGames()  {
      try {
        apiFetcher('/games').then((res) => {
          this.games = res.data.data;
        }).catch((err) => {
          console.log(err)
        })
      } catch (error) {
        console.log(error);
      }
    }
  },
  async mounted() {
    this.mouseComponent = document.getElementById('mouseImage')
    console.log('test')
    setTimeout( async () => {
      this.getAllGames();
    }, 50000)
  }
});
</script>

<style>

.hero.has-background {
  position: relative;
  overflow: hidden; }

.hero-background {
  position: absolute;
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 100%; }
  .hero-background.is-transparent {
    opacity: 0.3; }


    #navbar-container {
      background-color: black;
    }

</style>
