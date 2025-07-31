import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Active from '@/views/Active.vue'
import Inactive from '@/views/Inactive.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
		},
		{
			path: '/active',
			name: 'Active',
			component: Active,
		},
		{
			path: '/inactive',
			name: 'Inactive',
			component: Inactive,
		},
		{
			path: '/:catchAll(.*)',
			redirect: '/',
		},
	],
})

export default router
