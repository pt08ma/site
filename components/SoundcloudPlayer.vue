<template>
  <v-row>
    <v-col justify="center" align="center">
        <v-card
          v-for="card in cards"
          :key="card.title"
          width="640px"
        >
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            :src="`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${card.track_id}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`">
          </iframe>
          <div class="soundcloud-player">
            <a
              href="personal.href"
              title="personal.id"
              target="_blank"
              style="color: #cccccc; text-decoration: none;"
            >
              {{ personal.id }}
            </a> · <a
            href="card.src"
            title="card.title"
            target="_blank"
            style="color: #cccccc; text-decoration: none;"
          >
            {{ card.title }}
          </a>
          </div>
        </v-card>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      personal:
        {
          id: "pt-08ma",
          href: "https://soundcloud.com/tyr65svhkbjx",
        },
      cards: [
        {
          title: "Happy Anniversary No.5 -cosmic warp-",
          src: "https://soundcloud.com/tyr65svhkbjx/happy-anniversary-no5-cosmic-warp",
          track_id: 777039250,
        },
        {
          title: "the sea",
          src: "https://soundcloud.com/tyr65svhkbjx/the-sea",
          track_id: 777038866,
        },
        {
          title: "star's scape",
          src: "https://soundcloud.com/tyr65svhkbjx/stars-scape",
          track_id: 777038398,
        },
        {
          title: "real",
          src: "https://soundcloud.com/tyr65svhkbjx/real",
          track_id: 777037990,
        },
        {
          title: "haru-bloosom",
          src: "https://soundcloud.com/tyr65svhkbjx/haru-bloosom",
          track_id: 777037594,
        },
      ],
    }),
  }
</script>

<style lang="scss" scoped>
.soundcloud-player {
  font-size: 10px;
  color: #cccccc;
  line-break: anywhere;
  word-break: normal;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
  font-weight: 100;
}
</style>