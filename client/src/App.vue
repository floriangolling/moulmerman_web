<template>
  <div id="app" @mousemove="changeMouse" @click="changeMouse">
    <img id="mouseImage" width="30px" height=30px src="./assets/Bestiole.png"  style="display:none" />
    <b-navbar class="navbarArcade is-fixed-top">
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
              <span class="video-game-button"> M </span>
              <span class="video-game-button"> O </span>
              <span class="video-game-button"> U </span>
              <span class="video-game-button"> L </span>
              <span class="video-game-button"> M </span>
              <span class="video-game-button"> E </span>
              <span class="video-game-button"> R </span>
              <span class="video-game-button"> M </span>
              <span class="video-game-button"> A </span>
              <span class="video-game-button"> N </span>
            </b-navbar-item>
        </template>
        <template #start>
        </template>

        <template #end>
            <b-navbar-item tag="div">
                <div class="">
                    <span class="start-btn">
                      DOWNLOAD
                    </span>
                    <span class="start-btn" style="margin-left:1rem" @click="testFct">
                      GAMES
                    </span>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
    <div class="hero is-fullheight is-danger has-background">
      <img src="./assets/Bomberman_background.png" class="hero-background">
      <div class="hero-body" style="align-items: baseline">
        <div class="container">
          <div class="columns">
            <div class="column mt-5">
              <div class="box outer-box mt-6" style="max-height: 80vh;overflow: auto;background-color: black;box-shadow: 10px 0px 7px 15px black;">
                <div class="box inner-box" style="color: black">
                  <div style="border: 2px solid black;border-radius: 15px;">
                    <h1 class="has-text-centered mt-3"> GAME 4 </h1>
                    <h1 class="has-text-centered mb-3" style="font-size:0.6rem"> DURATION 4:38s </h1>
                  </div>
                  <div class="columns mt-1">
                    <div class="column">
                      <h2 class="mt-2 has-text-centered mb-3" style="text-decoration: underline;"> Guillaume </h2>
                      <div class="smaller-text">
                        <p> RANK: 1</p>
                        <p> BLOCK DESTROYED: 11</p>
                      </div>
                    </div>
                    <div class="column">
                      <h2 class="mt-2 has-text-centered mb-3" style="text-decoration: underline;"> Migo </h2>
                      <div class="smaller-text">
                        <p > RANK: 2</p>
                        <p> BLOCK DESTROYED: 6</p>
                      </div>                  
                    </div>
                  </div>
                  <div class="columns">
                    <div class="column">
                      <h2 class="mt-2 has-text-centered mb-3" style="text-decoration: underline;"> Guillaume2.0 </h2>
                      <div class="smaller-text">
                        <p> RANK: 4</p>
                        <p> BLOCK DESTROYED: 5</p>
                      </div>
                    </div>
                    <div class="column">
                      <h2 class="mt-2 has-text-centered mb-3" style="text-decoration: underline;"> Flo</h2>
                      <div class="smaller-text">
                        <p > RANK: 3</p>
                        <p> BLOCK DESTROYED: 9</p>
                      </div>                  
                    </div>
                  </div>            
                </div>
                <div class="box inner-box" style="color: black">
                  <div style="border: 2px solid black;border-radius: 15px;">
                    <h1 class="has-text-centered mt-3"> GAME 3 </h1>
                    <h1 class="has-text-centered mb-3" style="font-size:0.6rem"> DURATION 7:26s </h1>
                  </div>
                  <div class="columns mt-1">
                    <div class="column">
                      <h2 class="mt-2 has-text-centered mb-3" style="text-decoration: underline;"> Player 1</h2>
                      <div class="smaller-text">
                        <p> RANK: 1</p>
                        <p> BLOCK DESTROYED: 25</p>
                      </div>
                    </div>
                    <div class="column">
                      <h2 class="mt-2 has-text-centered mb-3" style="text-decoration: underline;"> Player 1</h2>
                      <div class="smaller-text">
                        <p > RANK: 3</p>
                        <p> BLOCK DESTROYED: 14</p>
                      </div>                  
                    </div>
                  </div>
                  <div class="columns">
                    <div class="column">
                      <h2 class="mt-2 has-text-centered mb-3" style="text-decoration: underline;"> Player 1</h2>
                      <div class="smaller-text">
                        <p> RANK: 2</p>
                        <p> BLOCK DESTROYED: 13</p>
                      </div>
                    </div>
                    <div class="column">
                      <h2 class="mt-2 has-text-centered mb-3" style="text-decoration: underline;"> Player 1</h2>
                      <div class="smaller-text">
                        <p > RANK: 4</p>
                        <p> BLOCK DESTROYED: 0</p>
                      </div>                  
                    </div>
                  </div>            
                </div>
                <div class="box inner-box" style="color: black">
                  <div style="border: 2px solid black;border-radius: 15px;">
                    <h1 class="has-text-centered mt-3"> GAME 2 </h1>
                    <h1 class="has-text-centered mb-3" style="font-size:0.6rem"> DURATION 8:19s </h1>
                  </div>
                  <div class="columns mt-1">
                    <div class="column">
                      <h2 class="mt-2 has-text-centered mb-3" style="text-decoration: underline;"> Player 1</h2>
                      <div class="smaller-text">
                        <p> RANK: 1</p>
                        <p> BLOCK DESTROYED: 38</p>
                      </div>
                    </div>
                    <div class="column">
                      <h2 class="mt-2 has-text-centered mb-3" style="text-decoration: underline;"> Player 1</h2>
                      <div class="smaller-text">
                        <p > RANK: 1</p>
                        <p> BLOCK DESTROYED: 38</p>
                      </div>                  
                    </div>
                  </div>
                  <div class="columns">
                    <div class="column">
                      <h2 class="mt-2 has-text-centered mb-3" style="text-decoration: underline;"> Player 1</h2>
                      <div class="smaller-text">
                        <p> RANK: 1</p>
                        <p> BLOCK DESTROYED: 38</p>
                      </div>
                    </div>
                    <div class="column">
                      <h2 class="mt-2 has-text-centered mb-3" style="text-decoration: underline;"> Player 1</h2>
                      <div class="smaller-text">
                        <p > RANK: 1</p>
                        <p> BLOCK DESTROYED: 38</p>
                      </div>                  
                    </div>
                  </div>            
                </div>
                <div class="box inner-box" style="color: black">
                  <div style="border: 2px solid black;border-radius: 15px;">
                    <h1 class="has-text-centered mt-3"> GAME 1 </h1>
                    <h1 class="has-text-centered mb-3" style="font-size:0.6rem"> DURATION 4:38s </h1>
                  </div>
                  <div class="columns mt-1">
                    <div class="column">
                      <h2 class="mt-2 has-text-centered mb-3" style="text-decoration: underline;"> Player 1</h2>
                      <div class="smaller-text">
                        <p> RANK: 1</p>
                        <p> BLOCK DESTROYED: 38</p>
                      </div>
                    </div>
                    <div class="column">
                      <h2 class="mt-2 has-text-centered mb-3" style="text-decoration: underline;"> Player 1</h2>
                      <div class="smaller-text">
                        <p > RANK: 1</p>
                        <p> BLOCK DESTROYED: 38</p>
                      </div>                  
                    </div>
                  </div>
                  <div class="columns">
                    <div class="column">
                      <h2 class="mt-2 has-text-centered mb-3" style="text-decoration: underline;"> Player 1</h2>
                      <div class="smaller-text">
                        <p> RANK: 1</p>
                        <p> BLOCK DESTROYED: 38</p>
                      </div>
                    </div>
                    <div class="column">
                      <h2 class="mt-2 has-text-centered mb-3" style="text-decoration: underline;"> Player 1</h2>
                      <div class="smaller-text">
                        <p > RANK: 1</p>
                        <p> BLOCK DESTROYED: 38</p>
                      </div>                  
                    </div>
                  </div>            
                </div>                              
              </div>
            </div>
            <div class="column">
            </div>
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
      this.mouseComponent.style = `z-index:99999;position:absolute;left: ${e.clientX - 10}px;top:${e.clientY - 10}px;    pointer-events: none;`
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
    },
    testFct() {
      console.log('oui')
    }
  },
  async mounted() {
    this.mouseComponent = document.getElementById('mouseImage')
    setTimeout( async () => {
      this.getAllGames();
    }, 50000)
  }
});
</script>

<style>

@font-face {
  font-family: 'Press Start 2p';
  src: url('./assets/PressStart2P-Regular.ttf') format("truetype")
}

body * {
  font-family: 'Press Start 2p';
  cursor: none;
}

.box {
  z-index:  9 !important;
}

.inner-box {
  border-radius: 1.5rem !important;
  background-color: lightgray !important;
}

.outer-box {
  border: 1px solid black;
  border-radius: 1rem 1rem 1rem 1rem!important;
}

::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 2rem;
}

.smaller-text {
  font-size: 0.8rem;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #cb436a;
  border-radius: 10px;
}

.gradient-border {
  z-index: 9999px;
  background: #1D1F20;
  position: relative;
  border-radius: 3px;
}
.gradient-border:after {
  content: '';
  position: absolute;
  top: -3px;
  left: -3px;;
  height: -3px;
  width: -3px;
  background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
  border-radius: 6px;
  z-index: -1;
  animation: animatedgradient 3s ease alternate infinite;
  background-size: 300% 300%;
}


@keyframes animatedgradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}



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

    .start-btn{
      font-size:1rem;
    text-align: center;
	display: inline-block;
    font-weight: bold;
    padding: 10px 0 10px 10px ;
    background-color: lightgray;
    text-shadow: -1px -1px black, 1px 1px white;
    color: gray;
    -webkit-border-radius: 7px;
	-moz-border-radius: 7px;
	-o-border-radius: 7px;
	border-radius: 7px;
    box-shadow: 0 .2em gray; 

}

.video-game-button {
	text-shadow: 1px 1px pink, -1px -1px maroon;
  font-size: 1.2rem;
	line-height: 1.5em;
	text-align: center;
	display: inline-block;
	width: 1.5em;
	-webkit-border-radius: .75em;
	-moz-border-radius: .75em;
	-o-border-radius: .75em;
		border-radius: .75em;
	background-color: red;
	-webkit-box-shadow:  0 .2em maroon;
	-moz-box-shadow:  0 .2em maroon;
	-o-box-shadow:  0 .2em maroon;
	box-shadow:  0 .2em maroon;
	color: red;
	margin: 5px;
	background-color: red;
	background-image: -o-linear-gradient(left top, pink 3%, red 22%, maroon 99%);
	background-image: -moz-linear-gradient(left top, pink 3%, red 22%, maroon 99%);
	background-image: -webkit-linear-gradient(left top, pink 3%, red 22%, maroon 99%);
	background-image: linear-gradient(left top, pink 3%, red 22%, maroon 99%);
  padding: 0.2rem;
}

.navbarArcade {
  background: url('./assets/test.png') !important;
  background-origin: padding-box !important;
  box-shadow: 0px 5px 5px 0 black;
}

.video-game-button:active, .start-btn:active {
	box-shadow: none;
	position: relative;
	top: .2em;
}

</style>
