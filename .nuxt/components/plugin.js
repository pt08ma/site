import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  MyProfile: () => import('../../components/MyProfile.vue' /* webpackChunkName: "components/my-profile" */).then(c => wrapFunctional(c.default || c)),
  SoundcloudPlayer: () => import('../../components/SoundcloudPlayer.vue' /* webpackChunkName: "components/soundcloud-player" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
