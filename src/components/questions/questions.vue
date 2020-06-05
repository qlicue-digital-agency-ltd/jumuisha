<template>
  <div>
    <v-card>
      <v-row>
        <v-col cols="1">
          <v-avatar>
            <img src="../../assets/user.png" alt id="profile" width="50" height="50" />
          </v-avatar>
        </v-col>
        <v-col cols="9">
          <v-textarea
            class="headline text-center"
            auto-grow
            rounded
            row="2"
            placeholder="Write your idea here"
            name="input-7-4"
            row-height="10"
          ></v-textarea>
        </v-col>
      </v-row>
      <v-img :src="imageUrl" aspect-ratio="3.9" contain v-if="imageUrl" />
      <div class="post-incons">
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="1" class="post-icons">
            <v-btn icon color="red" @click="selectImage">
              <v-icon>mdi-camera</v-icon>
            </v-btn>
            <input
              ref="uploader"
              class="d-none"
              type="file"
              accept="image/*"
              @change="onFileChanged"
            />
          </v-col>

          <v-col cols="3" class="post-icons">
            <v-btn rounded color="red" dark sm="4">Add post</v-btn>
          </v-col>
        </v-row>
      </div>
    </v-card>

    <feed-card class="feedCard" v-for="feed in [0, 1, 2, 4, 5]" :key="feed" />
  </div>
</template>

<script>
import FeedCard from "../elements/FeedCard";
export default {
  data() {
    return {
      imageUrl: null
    };
  },
  components: {
    "feed-card": FeedCard
  },
  methods: {
    selectImage() {
      this.$refs.uploader.click();
    },
    onFileChanged(e) {
      const file = e.target.files[0];
      this.imageUrl = URL.createObjectURL(file);
      console.log(file);
    }
  }
};
</script>

<style>
</style>