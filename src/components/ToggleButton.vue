<template>
	<button class="toggle" @click="handleClick(user.name)" :class="{ active: toggle }"></button>
</template>

<script setup>
import { useUserStore } from '@/stores/usersStore'
import { ref } from 'vue'
const props = defineProps(['isActive', 'user'])

const toggle = ref(props.isActive)

const usersStore = useUserStore()

const handleClick = user => {
	toggle.value = !toggle.value
	setTimeout(() => {
		usersStore.toggleActive(user)
	}, 340)
}
</script>

<style scoped>
.toggle {
	position: relative;
	width: 36px;
	height: 20px;
	border: none;
	border-radius: 800px;
	background-color: var(--neutral-600);
	transition: background-color 0.3s;
}

.toggle.active {
	background-color: var(--header-active-btn-bg);
}

.toggle::before {
	position: absolute;
	content: '';
	width: 16px;
	height: 16px;
	left: 2px;
	top: 50%;
	transform: translateY(-50%);
	border-radius: 50%;
	background-color: var(--neutral);
	transition: transform 0.3s;
}

.toggle.active::before {
	transform: translate(16px, -50%);
}

@media (width >= 64rem) {
	.toggle {
		width: 40px;
		height: 24px;
		transition: background-color 0.3s;
	}

	.toggle:hover {
		background-color: var(--toggle-hover);
	}

	.toggle.active:hover {
		background-color: var(--toggle-active-hover);
	}

	.toggle::before {
		width: 18px;
		height: 18px;
	}

	.toggle.active::before {
		transform: translate(18px, -50%);
	}
}
</style>
