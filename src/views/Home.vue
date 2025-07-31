<template>
	<main>
		<div v-if="usersStore.filter === 'all'">
			<TransitionGroup tag="div" name="list" appear class="card-container">
				<div v-for="user in usersStore.users" :key="user.name">
					<UserCard :user="user" />
				</div>
			</TransitionGroup>
		</div>
	</main>
</template>

<script setup>
import UserCard from '@/components/UserCard.vue'
import { useUserStore } from '@/stores/usersStore'

const usersStore = useUserStore()
</script>
