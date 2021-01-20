export { default as MyProfile } from '../../components/MyProfile.vue'
export { default as SoundcloudPlayer } from '../../components/SoundcloudPlayer.vue'

export const LazyMyProfile = import('../../components/MyProfile.vue' /* webpackChunkName: "components/my-profile" */).then(c => c.default || c)
export const LazySoundcloudPlayer = import('../../components/SoundcloudPlayer.vue' /* webpackChunkName: "components/soundcloud-player" */).then(c => c.default || c)
