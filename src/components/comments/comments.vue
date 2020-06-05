<template>
  <div>
    <v-card>
    <v-row>
      <v-col cols="2">
        <v-avatar>
          <img
            src="../../assets/user.png"
            alt=""
            id="profile"
            width="50"
            height="50"
          />
        </v-avatar>
      </v-col>
      <v-col cols="9">
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, nihil! Libero iusto quisquam qui et culpa, voluptatem nisi ullam repellat, dicta, eum ab laborum voluptatibus vitae. Quasi perferendis ut ab.
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        
        <v-img class="image-section" src="https://picsum.photos/510/300?random" aspect-ratio="2"></v-img>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row class="comment-section">
      <v-col cols="1">
        <v-avatar>
          <img src="../../assets/user.png" alt id="profile" width="50" height="50" />
        </v-avatar>
      </v-col>
      <v-col cols="8">
        <div class="text-center">
        <v-text-field label="Comment your views" filled rounded dense></v-text-field>
        </div>
      </v-col>
      <v-col cols="1">
        <div class="text-center">
          <v-btn rounded large color="red">Comment</v-btn>
        </div>
      </v-col>
    </v-row>
    <v-divider></v-divider>

    <v-row class="comment-section" v-for="(item, i) in [1,2,3,4]" :key="i">
      <v-col cols="2">
        <v-avatar>
          <img src="../../assets/user.png" alt id="profile" width="50" height="50" />
        </v-avatar>
      </v-col>
      <v-col cols="9">
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis voluptatem unde doloribus eaque dolor in fuga iure! Facilis, itaque optio fugiat dolore incidunt maxime ullam repellat voluptatem nobis, veniam quasi?</div>
        <div class="action-btn">
            <v-btn icon @click="replyComment">
                <v-icon>mdi-reply
                </v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>
                    mdi-heart
                </v-icon>
            </v-btn>
        </div>
      </v-col>
    </v-row>
    </v-card>

   <div class="text-center">
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
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red" rounded @click="dialog = false">Reply</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>

export default {
  components: {
   
  },
  data() {
    return {
       dialog: false
    }
  },
  methods: {
    replyComment() {
      this.dialog = true
      console.log('Some text')
    }
  }
};
</script>

<style lang='scss'>
.action-btn {
  margin-top: 0.5em;
  float: right;
}
.comment-section {
  margin-top: 1em;
}
.image-section {
  margin: 2em;
}
</style>