import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopifyView from '../views/ShopifyViewNew.vue'
import JumpsellerView from '../views/JumpsellerViewNew.vue'
import CustomDevView from '../views/CustomDevView.vue'
import BlogShopify from '../views/BlogShopify.vue'
import BlogJumpseller from '../views/BlogJumpseller.vue'
import BlogWordPress from '../views/BlogWordPress.vue'
import BlogCustomDev from '../views/BlogCustomDev.vue'
import BlogSEO from '../views/BlogSEO.vue'
import BlogComparison from '../views/BlogComparison.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/servicios/shopify',
      name: 'shopify',
      component: ShopifyView
    },
    {
      path: '/servicios/jumpseller',
      name: 'jumpseller',
      component: JumpsellerView
    },
    {
      path: '/servicios/wordpress',
      name: 'wordpress',
      component: CustomDevView
    },
    {
      path: '/blog/shopify-tienda-online',
      name: 'blog-shopify',
      component: BlogShopify
    },
    {
      path: '/blog/jumpseller-chile',
      name: 'blog-jumpseller',
      component: BlogJumpseller
    },
    {
      path: '/blog/wordpress-landing-pages',
      name: 'blog-wordpress',
      component: BlogWordPress
    },
    {
      path: '/blog/desarrollo-web-personalizado',
      name: 'blog-custom-dev',
      component: BlogCustomDev
    },
    {
      path: '/blog/que-es-seo',
      name: 'blog-seo',
      component: BlogSEO
    },
    {
      path: '/blog/shopify-vs-jumpseller',
      name: 'blog-comparison',
      component: BlogComparison
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
