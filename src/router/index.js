import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeFeeds from '../components/homeFeeds/homeFeeds'
import Comments from '../components/comments/comments'
import Questions from '../components/questions/questions'

Vue.use(VueRouter)



const routes = [
    {
      path: '/',
      redirect: 'home/feeds'
    },
    {
      path: '/home/feeds',
      name: 'home.feeds',
      component: HomeFeeds
    },
    {
      path: '/comments',
      name: 'comments',
      component: Comments
    },
    {
      path: '/questions',
      name: 'questions',
      component: Questions
    }
    
  ]

  const router = new VueRouter({
      routes
  })

export default router
