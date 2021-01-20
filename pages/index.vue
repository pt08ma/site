<template>
  <v-app>
    <section>
      <v-row>
          <v-col justify="center" align="center">
            <div id="top">
              <div class="box">
                <p><img src="img/logo.jpg" /></p>
                <p>
                 <v-btn
                  text
                  ref="button"
                  block
                  color="primary"
                  @click="$vuetify.goTo(target_music,options)"
                >
                  music
                 </v-btn>
                </p>
                <p>
                  <v-btn
                    text
                    ref="button"
                    block
                    color="primary"
                    @click="$vuetify.goTo(target_profile,options)"
                  >
                    profile
                  </v-btn>
                </p>
              </div>
            </div>
          </v-col>
      </v-row>
    </section>
    <v-divider></v-divider>
    <section>
      <div id="music">
        <h2>Music</h2>
        <a href="https://soundcloud.com/tyr65svhkbjx">SoundCloud</a>
      </div>
      <soundcloud-player />
    </section>
    <v-divider></v-divider>
    <section>
      <v-row>
          <v-col justify="center" align="center">
            <div id="profile">
              <h2>Profile</h2>
              <my-profile />
            </div>
          </v-col>
      </v-row>
    </section>
  </v-app>
</template>

<script>
  import * as easings from 'vuetify/es5/services/goto/easing-patterns'

  export default {
    data () {
      return {
        target_music: '#music',
        target_profile: '#profile',
        options: [
          {
            duration: 300,
            offset: 0,
            easing: 'linear',
          }
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>
#top {
  height: 940px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#music{
  text-align: center;
}
#profile{
  text-align: center;
}

.v-divider {
  padding: 24px 0px;
}

</style>
