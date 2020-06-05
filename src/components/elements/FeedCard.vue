<template>
  <div class="card">
    <v-card>
      <v-row>
        <v-col cols="1">
          <v-avatar>
            <img src="../../assets/user.png" alt id="profile" width="50" height="50" />
          </v-avatar>
        </v-col>
        <v-col cols="10">
          <div class="user-name">Admin</div>
          <div class="timestamp"><small>10hrs ago</small></div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-img
            class="maneno"
            src="https://www.hrc.co.nz/files/5914/2335/6913/disabled_right_to_education.jpg"
            alt
            height="300"
            style="object-fit: cover;"
          />
          <div
            class="maneno"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus necessitatibus atque magnam sint, reprehenderit repellendus. Molestiae quidem rerum unde sapiente nesciunt magnam doloremque recusandae, eius incidunt rem iure! Necessitatibus, repellendus.</div>
        </v-col>
      </v-row>

      <div class="row">
        <v-row>
          <div class="cols-2 count-action-btn">
            <v-col>
              <v-avatar id="answer" color="success" size="30">
                <span class="white--text bold--text">62</span>
              </v-avatar>
            </v-col>
          </div>
          <div class="cols-2">
            <v-col>
              <v-btn icon>
                  <v-icon @click="commentPost">mdi-comment</v-icon>
              </v-btn>
              
            </v-col>
          </div>
          <div class="cols-2">
            <v-col>
              <v-btn icon>
                <v-icon color="pink">mdi-heart</v-icon>
              </v-btn>
              <span>12</span>
            </v-col>
          </div>

          <div class="cols-6">
            <v-col>
              <v-btn icon>
                 <v-icon>mdi-share</v-icon>
              </v-btn>
             
            </v-col>
          </div>
        </v-row>
      </div>
    </v-card>
  </div>
</template>

<script>
// import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import router from "../../router";
export default {
  methods: {
    commentPost() {
      console.log("answer");
      router.push({ name: "comments" });
    }
  }
};
</script>

<style lang="scss">
#profile {
  border-radius: 50%;
  background-color: #f7f7f7;
  margin-left: 0.5em;
}

.card {
  margin-bottom: 10px;
}

#answer {
  margin-left: 1em;
}
.far {
  font-size: 20px;
}

#right {
  align-items: flex-end;
}
.maneno {
  margin: 1em 1em 0 1em;
}
.count-action-btn {
  margin-left: 1em;
}
</style>
