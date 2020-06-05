<template>
  <v-app>
    <v-app-bar app color="">
    
      <v-spacer></v-spacer>
      <div class="nav">
        <v-btn text @click="navigate('home.feeds')">
          Home
        </v-btn>
        <v-btn text @click="navigate('questions')">
          Questions
        </v-btn>
        <v-btn text href="#">
          Answers
        </v-btn>
        <v-btn text href="#">
          videos
        </v-btn>
        <v-btn text href="#">
          Tourism
        </v-btn>
        <v-btn text>
          <i class="fas fa-search fas=2x"></i>
        </v-btn>
      </div>
      <v-spacer></v-spacer>
      <div>
        <v-col>
         <v-tab>
        <v-badge
          color="red"
          content="6"
          overlap
        >
        <v-icon depressed> mdi-bell</v-icon>
        </v-badge>
      </v-tab>
        </v-col>
      </div>
      <div>
        <v-img
          alt="Vuetify Name"
          class="prof"
          contain
          min-width="40"
          style="float: left;"
          src="./assets/user.png"
          width="10"
        />
      </div>
    </v-app-bar>

    <v-content>
      <div class="row">
        <FilterCategory class="col-3 mb-2" />
        <div class="col-6">
          <router-view></router-view>
        </div>

        <SocialContainer class="col-3" />
      </div>
    </v-content>
  </v-app>
</template>

<script>
import FilterCategory from "./components/FilterCategory";
import SocialContainer from "./components/socialContainer";
import router from "./router"
// import FeedCard from "./components/elements/FeedCard";
// import VueInstagram from './components/elements/insta'
 
export default {
  name: 'App',
 
  components: {
    // FeedCard,
    FilterCategory,
    SocialContainer,
    
  },
  data: () => ({
    // dialog: false,
    selectFile: null,
    imageUrl: null,
  }),
  methods: {
    navigate(routername) {
     router.push({ name: routername })
    },
    openModal() {
      console.log("click me to open modal");
    },

  },
};
</script>

<style lang="scss">
#app {
  background-color: #f5f7fa;
}
.prof {
  border-radius: 100%;
  background-color: #f7f7f7;
}

.fas {
  font-size: 1.5em;
}
.badge-danger {
  border-radius: 100%;
  color: #fff;
  background-color: #f05050;
}

.post-icons.col {
  margin-left: 1em;
  padding-top: 0;
  margin-right: 0;
}
.feedCard {
  margin-top: 1em;
}
.text-center {
  margin-right: 0;
}
</style>
