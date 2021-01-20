<template>
        <v-card
          :loading="loading"
          class="mx-auto my-12"
          max-width="640px"
        >
          <v-img class="white--text align-end" src="img/pt08ma.png">
            <v-card-title>pt08ma</v-card-title>
          </v-img>
          <v-card-subtitle>birth</v-card-subtitle>
          <v-card-text>
            1982
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-subtitle>favorites</v-card-subtitle>
          <v-card-text>pop , rock , emo , shoegazer , electronica , techno</v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-subtitle>biography</v-card-subtitle>
          <v-card-text>
              <v-timeline>
                <v-timeline-item small fill-dot>PC98+FM音源で打ち込みを始める</v-timeline-item>
                <v-timeline-item small fill-dot>ギターでバンド活動を始める</v-timeline-item>
                <v-timeline-item small fill-dot>バンド「Microphone」加入</v-timeline-item>
                <v-timeline-item small fill-dot>Microphone「FRAGMENT」リリース</v-timeline-item>
                <v-timeline-item small fill-dot>Microphone解散</v-timeline-item>
                <v-timeline-item small fill-dot>
                  サウンドクリエイター
                  ライブサポート
                  レコーディング・ミキシングエンジニア
                  としてマイペースに活動中
                </v-timeline-item>
              </v-timeline>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-subtitle>achievement</v-card-subtitle>
          <v-card-text>
              CGアニメ「千夜一夜物語プロジェクト」数曲提供<br />
              その他、個人製作映像作品・ゲーム等に楽曲提供
          </v-card-text>
        </v-card>
</template>

<script>
  export default {
    data() {
      return {
        loading: false,
      }
    },
    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>