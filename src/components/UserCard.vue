<template>
	<div class="card">
		<div class="content">
			<img :src="`/src/${user.logo}`" alt="" />
			<div>
				<h3>{{ user.name }}</h3>
				<p>{{ user.description }}</p>
			</div>
		</div>
		<div class="actions">
			<button class="remove" @click="reveal">Remove</button>
			<ToggleButton :isActive="user.isActive" :user="user" />
		</div>
	</div>

	<teleport to=".modal">
		<Transition name="dialog">
			<div v-if="isRevealed" class="modal-bg" @click="cancel">
				<div class="modal-content">
					<p>Are you sure?</p>
					<div class="modal-actions">
						<button @click="confirm" class="yes">Yes</button>
						<button @click="cancel" class="no">Cancel</button>
					</div>
				</div>
			</div>
		</Transition>
	</teleport>
</template>

<script setup>
import { useConfirmDialog } from '@vueuse/core'
import ToggleButton from '@/components/ToggleButton.vue'
import { useUserStore } from '@/stores/usersStore'

const usersStore = useUserStore()
const props = defineProps(['user'])

const { isRevealed, reveal, confirm, cancel, onReveal, onConfirm, onCancel } = useConfirmDialog()

onConfirm(() => usersStore.deleteUser(props.user.name))
</script>

<style scoped>
.card {
	padding: 1.1em 1em;
	margin-top: 0.8em;
	border: 1px solid var(--card-border);
	border-radius: 20px;
	background-color: var(--card-bg);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.card .content,
.card .actions {
	display: flex;
}

.card .content {
	align-items: start;
	gap: 1em;
	margin-bottom: 1.5em;
}

.card .content h3 {
	margin-bottom: 0.3em;
	font-size: 1.24rem;
}

.card .content p {
	color: var(--card-p);
}

.actions {
	align-items: center;
	justify-content: space-between;
}

.remove {
	border: 1px solid var(--remove-button-border);
	background-color: var(--card-bg);
	font-size: 1rem;
	font-weight: 500;
}

.remove:focus-visible {
	background-color: var(--remove-focus-btn);
	border: 1px solid var(--remove-focus-btn);
}

.modal-bg,
.modal-content {
	position: fixed;
}

.modal-bg {
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: hsla(0, 0%, 0%, 0.9);
}

.modal-content {
	padding: 2rem;
	width: 270px;
	max-width: 300px;
	top: 30%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: var(--nav-bg);
	border: 1px solid var(--card-border);
	border-radius: 20px;
	text-align: center;
}

.modal-content p {
	margin-bottom: 1em;
	font-size: 1.5rem;
}

.modal-actions {
	display: flex;
	justify-content: center;
	gap: 1em;
}

.modal-actions button {
	font-size: 1rem;
}

.yes {
	background-color: var(--header-active-btn-bg);
	color: var(--header-btn-active-text);
	font-weight: bold;
	border: none;
}

.no {
	border: 1px solid var(--neutral-600);
}

.dialog-enter-from,
.dialog-leave-to {
	opacity: 0;
}
.dialog-enter-active,
.dialog-leave-active {
	transition: opacity 0.3s ease;
}

@media (width >= 64rem) {
	.card {
		min-height: 175px;
		margin-top: 0;
	}

	.remove:hover {
		color: var(--card-bg);
		border-color: var(--red-500);
	}

	.remove:hover,
	.yes:hover {
		background-color: var(--red-500);
	}
}

@media (width >= 80rem) {
	.card .content {
		margin-bottom: 3em;
	}

	.card {
		min-height: 200px;
	}

	.card .content {
		margin-bottom: 1em;
	}
}
</style>
