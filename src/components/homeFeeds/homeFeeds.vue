<template>
  <div>
    <v-card>
      <v-row>
        <v-col cols="1">
          <v-avatar>
            <img src="../../assets/user.png" alt id="profile" width="50" height="50" />
          </v-avatar>
        </v-col>
        <v-col cols="10">
          <v-textarea
            class="headline text-center"
            auto-grow
            rounded
            row="2"
            name="input-7-4"
            placeholder="Post your idea here"
            row-height="10"
          ></v-textarea>
        </v-col>
      </v-row>
      <div class="image-with-btn text-center "
        ref="imagePreview"
        :key="imagestate"
       v-if="imageUrl">
        <v-btn class="close" icon dark color="red" @click="removeImage">
          <v-icon>mdi-close</v-icon>
        </v-btn>

        <v-img
          class="ml-7 text-center"
          :src="imageUrl"
          contain
          aspect-ratio="2"
          max-height="500"
          max-width="300"
        />
      </div>
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
      imageUrl: null,
      imagestate: 0,
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
    },
    removeImage() {
      console.log('remove image')
      if(this.imageUrl)
      this.$refs.imagePreview.style.display = "none"
    },

    forceRerender() {
      this.imagestate += 1;
    },
  },
};
</script>

<style>
</style>