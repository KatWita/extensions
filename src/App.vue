<template>
	<Nav />
	<Header />
	<router-view />
</template>

<script setup>
import Header from '@/components/Header.vue'
import Nav from '@/components/Nav/Nav.vue'
import { useRoute } from 'vue-router'
import { watch } from 'vue'
import { useUserStore } from '@/stores/usersStore'

const usersStore = useUserStore()

const route = useRoute()

watch(
	() => route.path,
	async () => {
		if (route.path === '/active') {
			return usersStore.changeLinkFilter('active')
		} else if (route.path === '/inactive') {
			return usersStore.changeLinkFilter('inactive')
		}
		return usersStore.changeLinkFilter('all')
	}
)
</script>
