<template>
  <div class="matengo">
    <v-card class="mx-auto list-card" max-width="288" max-height="200" tile>
      <v-list rounded>
        <v-header class="headline">Feeds</v-header>
        <v-list-item-group v-model="item" color="red">
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
        <div class="post-btn">
          <v-btn rounded block color="red" large dark sm="4" @click="openModal()">Add post</v-btn>
        </div><v-divider class="mt-2"></v-divider>
        <div class="text-center">
           <b><p>Jumuisha &copy; {{ new Date().getFullYear() }}</p></b>
        </div>
      </v-list>   
  </v-card>
    <div>
      <v-dialog v-model="dialog" width="500">
        <v-card>
          <v-card-title class="headline lighten-2">
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-textarea
              class="body text-center"
              auto-grow
              rounded
              row="4"
              placeholder="Sehemu ya maswali au maoni"
              name="input-7-4"
              row-height="10"
            ></v-textarea>
            <div class="image-with-btn " v-if="imageUrl">
              <v-btn class="close" icon dark color="red" >
                <v-icon>mdi-close</v-icon>
              </v-btn>

                <v-img class=" ml-6 text-center" :src="imageUrl" contain aspect-ratio="2" max-height="500" max-width="300" />
              
            </div>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon color="red" @click="selectImage" class="mr-2">
              <v-icon>mdi-camera</v-icon>
            </v-btn>
            <input
              ref="uploader"
              class="d-none"
              type="file"
              accept="image/*"
              @change="onFileChanged"
            />
            <v-btn color="red" rounded @click="dialog = false" class="ml-2 mr-2">Post</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
    imageUrl: null,
    
    items: [
      { text: "Physical Disabilities"},
      { text: "Visual Disabilities" },
      { text: "Hearing Disabilities"},
      { text: "Mental Health Disabilities"},
      { text: "Intellectual Disabilities" },
      { text: "Learning Disabilities" },
      { text: "Autism spectrum disorder"},
      { text: "Acquired brain injury"}
     
    ]
  }),
  methods: {
    openModal() {
      this.dialog = true;
    },

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

<style lang="scss">
.matengo {
  position: -webkit-sticky;
  position: sticky;
  margin-left:2%;
  margin-right:2%;
  top: 0;
  
}

.post-btn {
  margin-top: 2em;
}

.image-with-button {
  display: flex;
  flex-wrap: wrap;
  position: relative;
}
.image-with-button v-image {
  display: block;
  
}


.close-btn {
  position: absolute;
  top:0;
  right: 0;
}

</style>
