<template>
	<nav>
		<NavLogo />
		<button v-if="isDark">
			<img class="icon" src="@/assets/images/icon-sun.svg" @click="toggleDark()" />
		</button>
		<button v-else>
			<img class="icon" src="@/assets/images/icon-moon.svg" @click="toggleDark()" />
		</button>
	</nav>
</template>

<script setup>
import NavLogo from './NavLogo.vue'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark({
	selector: 'body',
})

const toggleDark = useToggle(isDark)
</script>

<style scoped>
nav {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.5em 0.8em;
	background-color: var(--nav-bg);
	border-radius: 12px;
	-webkit-box-shadow: 0px 0px 5px 2px var(--nav-box-shadow);
	-moz-box-shadow: 0px 0px 5px 2px var(--nav-box-shadow);
	box-shadow: 0px 0px 3px 2px var(--nav-box-shadow);
}

nav button,
nav button:hover {
	background-color: transparent;
}

nav button {
	padding: 0;
	border: none;
	border-radius: 12px;
	transition: none;
}

.icon {
	display: block;
	padding: 0.8em 0.9em;
	border-radius: 12px;
	background-color: var(--nav-icon-bg);
	transition: background-color 0.3s;
}

@media (width >= 64rem) {
	.icon {
		cursor: pointer;
		transition: background-color 0.3s;
	}

	.icon:hover {
		background-color: var(--nav-icon-bg-hover);
	}

	.icon:focus {
		border: 2px solid red;
	}
}
</style>
