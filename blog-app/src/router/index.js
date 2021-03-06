import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blogs from '../views/Blogs.vue'
import Blog from '../views/Blog.vue'
import EditBlog from '../views/EditBlog.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: Blogs
  },
  {
    path: '/blogs/:id',  
    name: 'show-blog',
    component: Blog,
    params: true
  },
  {
    path: '/blogs/:id/edit', 
    name: 'edit-blog',
    component: EditBlog,
    params: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
