// https://nuxt.com/docs/api/configuration/nuxt-config
//enable env
import dotenv from 'dotenv'
dotenv.config()
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  ssr: false,
  pages: true,
  devtools: { enabled: false },
  css: ['@/assets/css/tailwind.css'],
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/google-fonts",
    "@vite-pwa/nuxt"
  ],
  plugins: ['~/plugins/disableLogs'],
  runtimeConfig: {
    GEMINI_KEY: process.env.GEMINI_KEY,
    GEMINI_ENDPOINT: process.env.GEMINI_ENDPOINT,
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_KEY: process.env.SUPABASE_KEY,
    NORMAL_MODEL: process.env.NORMAL_MODEL,
    SMART_MODEL: process.env.SMART_MODEL,
  },
  googleFonts: {
    families: {
      "JetBrains Mono": [400, 700, 900]
    },
    display: "swap",
    prefetch: true,
    preload: true,
    useStylesheet: true,
  },
  colorMode: {
    preference: "dark",
    fallback: "dark",
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "-mode",
    storage: "localStorage",
    storageKey: "nuxt-color-mode",
  },
  app: {
    pageTransition: {
      mode: 'out-in',
      name: 'page'
    },
    head: {
      charset: "utf-8",
      title: "Vortex - BRAINSTORM YOUR IDEA",
      viewport: "width=device-width, user-scalable=no, initial-scale=0",
      meta: [

        {
          name: "mobile-web-app-capable",
          content: "yes",
        },
        {
          name: "apple-mobile-web-app-capable",
          content: "yes",
        },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "black-translucent",
        },
      ],
      link: [
        {
          rel: "icon",
          href: "/icons/icon-64.png",
          sizes: "64x64",
          type: "image/png",
        },
        {
          rel: "icon",
          href: "/icons/icon-192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          rel: "apple-touch-icon",
          href: "/icons/icon-192.png",
          sizes: "180x180",
          type: "image/png",
        },
      ],
    },
  },
  pwa: {
    manifest: {
      name: "BRAYA - CHATBOT",
      short_name: "BRAYA - CHATBOT",
      description:
        "An advanced AI-powered chatbot designed to assist my daily life with various tasks and conversations.",
      display: "standalone",
      theme_color: "#000000",
      icons: [
        {
          src: "/icons/icon-64.png",
          sizes: "64x64",
          type: "image/png",
        },
        {
          src: "/icons/icon-128.png",
          sizes: "128x128",
          type: "image/png",
        },
        {
          src: "/icons/icon-192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/icons/icon-256.png",
          sizes: "256x256",
          type: "image/png",
        },
      ],
    },
    workbox: {
      navigateFallback: "/",
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
});
