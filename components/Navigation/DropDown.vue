<script setup>
	const props = defineProps({
		label: {
			type: String,
			required: true,
		},
		links: {
			type: Array,
			required: true,
		},
		index: {
			type: Number,
			default: 1,
		},
	})
</script>

<template>
	<div class="dropdown">
		<button class="dropdown-toggle nowrap" :data-dd-target="`dropdown_${index}`" aria-label="More">
			{{ props.label
			}}<svg class="dropdown-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384.15 224.05">
				<path class="clr-white" d="m169.47,214.68c12.5,12.5,32.8,12.5,45.3,0L374.78,54.68c12.5-12.5,12.5-32.8,0-45.3s-32.8-12.5-45.3,0l-137.4,137.4L54.67,9.47C42.17-3.03,21.88-3.03,9.38,9.47s-12.5,32.8,0,45.3l160,160,.1-.1Z" />
			</svg>
		</button>
		<div class="dropdown-menu" :data-dd-path="`dropdown_${index}`">
			<NuxtLink v-for="link in props.links" :to="link.path" class="dropdown-menu__link">
				<span class="nowrap">{{ link.label }}</span>
			</NuxtLink>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.dropdown {
		position: relative;
		display: inline-block;
	}
	.dropdown-toggle {
		display: block;
		background-color: transparent;
		min-height: 65px;
		border: none;
		cursor: pointer;
		transition: background-color ease-in-out 0.3s;

		font-weight: 400;
		padding: 0;
		position: relative;
		top: 0;
		transition: top 0.25s ease;
		color: var(--white);
	}
	.dropdown-toggle:hover {
		top: 3px;
	}
	.dropdown-menu {
		position: absolute;
		opacity: 0;
		visibility: hidden;
		transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
		top: 95%;
		left: 0;
		z-index: 999;
		border: 1px solid rgba(0, 0, 0, 0.15);
		border-radius: 4px;
		background-color: #fff;
		min-width: 100%;
		overflow: hidden;
		padding: 1rem 0;
	}
	.dropdown-menu--active {
		opacity: 1;
		visibility: visible;
	}
	.dropdown-menu__link {
		display: block;
		margin: 0;
		padding: 0;
		width: 100%;
		padding: 5px 20px 5px 20px;
		background-color: transparent;
		border: none;
		text-decoration: none;
		color: var(--black);
	}
	.dropdown-menu__link--active {
		background-color: rgba(0, 0, 0, 0.15);
	}
	.dropdown-menu__link:hover {
		background-color: var(--red);
		color: var(--white);
		transition: background-color 0.25s ease-in-out;
	}
	.dropdown-arrow {
		width: 15px;
		height: 9px;
		margin-left: 5px;
		position: relative;
		fill: #eb0000;
	}
</style>
