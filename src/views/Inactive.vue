<template>
	<main>
		<div v-if="usersStore.filter === 'inactive'">
			<Transition name="extensions" mode="out-in" appear>
				<div v-if="usersStore.inactive.length" class="gowno">
					<TransitionGroup tag="div" name="list" appear class="card-container">
						<div v-for="user in usersStore.inactive" :key="user.name">
							<UserCard :user="user" />
						</div>
					</TransitionGroup>
				</div>
				<p v-else class="empty">There is no inactive extensions.</p>
			</Transition>
		</div>
	</main>
</template>

<script setup>
import UserCard from '@/components/UserCard.vue'
import { useUserStore } from '@/stores/usersStore'

const usersStore = useUserStore()
</script>
