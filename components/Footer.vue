<script setup>
	const currentYear = new Date().getFullYear()
	const navigation = useNavigation()
</script>

<template>
	<footer class="pblock-4 text-center mt-8 clr-bg-lavender">
		<ul class="navigation mt-2 mb-4 p-0 no-bull fs-400">
			<template v-for="(item, index) in navigation.primary">
				<li>
					<NuxtLink :to="item.path" class="navigation__link">{{ item.label }}</NuxtLink>
				</li>
			</template>
		</ul>
		<div class="container fs-200">© {{ currentYear }} Northport Native Garden Initiative • All Rights Reserved</div>
	</footer>
</template>

<style lang="scss" scoped>
	.navigation {
		display: flex;
		column-gap: 3rem;
		row-gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
		a {
			text-decoration: none;
			color: var(--dark-green);
		}
	}
</style>
