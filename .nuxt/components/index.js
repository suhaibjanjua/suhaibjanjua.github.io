export { default as Accordion } from '../../components/Accordion.vue'
export { default as Button } from '../../components/Button.vue'
export { default as Card } from '../../components/Card.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as SocialMedia } from '../../components/SocialMedia.vue'

export const LazyAccordion = import('../../components/Accordion.vue' /* webpackChunkName: "components/Accordion" */).then(c => c.default || c)
export const LazyButton = import('../../components/Button.vue' /* webpackChunkName: "components/Button" */).then(c => c.default || c)
export const LazyCard = import('../../components/Card.vue' /* webpackChunkName: "components/Card" */).then(c => c.default || c)
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/Footer" */).then(c => c.default || c)
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/Header" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazySocialMedia = import('../../components/SocialMedia.vue' /* webpackChunkName: "components/SocialMedia" */).then(c => c.default || c)
