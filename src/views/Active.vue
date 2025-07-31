<template>
	<main>
		<div v-if="usersStore.filter === 'active'">
			<Transition name="extensions" mode="out-in" appear>
				<div v-if="usersStore.active.length">
					<TransitionGroup tag="div" name="list" appear class="card-container">
						<div v-for="user in usersStore.active" :key="user.name">
							<UserCard :user="user" />
						</div>
					</TransitionGroup>
				</div>
				<p v-else class="empty">There is no active extensions.</p>
			</Transition>
		</div>
	</main>
</template>

<script setup>
import UserCard from '@/components/UserCard.vue'
import { useUserStore } from '@/stores/usersStore'

const usersStore = useUserStore()
</script>
