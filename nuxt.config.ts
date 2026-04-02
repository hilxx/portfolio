// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["@/assets/scss/index.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // 전역으로 사용할 scss 파일
          additionalData: '@use "@/assets/scss/abstracts.scss" as *;',
        },
      },
    },
  },
  app: {
    head: {
      title: "이은정 | 프론트엔드 개발자 포트폴리오",
      meta: [
        {
          name: "description",
          content:
            "퍼블리셔에서 프론트엔드로, 근거 있는 UI를 만드는 개발자 이은정입니다.",
        },
        { property: "og:title", content: "이은정 포트폴리오" },
        // { property: 'og:description', content: '실사용자 피드백 기반 2차 수정고시 및 다국어 대응 경험 보유' },
        // { property: 'og:image', content: '/og-image.png' },
        // { property: 'og:type', content: 'website' }
      ],
    },
  },
});
