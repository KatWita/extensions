<template>
	<header>
		<h1>Extensions List</h1>
		<div class="filter-buttons">
			<router-link to="/">
				<button @click="usersStore.changeLinkFilter('all')" :class="{ active: usersStore.filter === 'all' }">
					All
				</button>
			</router-link>
			<router-link to="/active">
				<button @click="usersStore.changeLinkFilter('active')" :class="{ active: usersStore.filter === 'active' }">
					Active
				</button>
			</router-link>
			<router-link to="/inactive">
				<button @click="usersStore.changeLinkFilter('inactive')" :class="{ active: usersStore.filter === 'inactive' }">
					Inactive
				</button>
			</router-link>
		</div>
	</header>
</template>

<script setup>
import { useUserStore } from '@/stores/usersStore'

const usersStore = useUserStore()
</script>

<style>
header {
	margin-bottom: 2.5em;
}

header h1 {
	margin: 1.2em 0 0.7em;
	text-align: center;
}

.filter-buttons {
	display: flex;
	justify-content: center;
	gap: 0.8em;
}

.filter-buttons button {
	font-size: 1.25rem;
	border: 1px solid var(--header-btn-border);
}

.filter-buttons button.active {
	background-color: var(--header-active-btn-bg);
	border: 1px solid var(--header-active-btn-bg);
	color: var(--header-btn-active-text);
}

@media (width >= 64rem) {
	header {
		display: flex;
		margin-top: 5rem;
		justify-content: space-between;
	}

	header h1 {
		margin: 0;
		font-size: 2.1rem;
	}

	.filter-buttons button:hover {
		background-color: var(--filter-hover);
		color: var(--filter-btn-color);
	}

	.filter-buttons button.active:hover {
		background-color: var(--filter-active-hover);
		color: var(--filter-btn-active-color);
	}
}
</style>
