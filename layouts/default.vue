<script setup></script>

<template>
	<Header class="sticky" />
	<div class="mobile-nav clr-bg-dark-green">
		<NavigationMobile />
	</div>

	<div class="clr-bg-white">
		<NuxtPage />
	</div>
	<Footer />
</template>

<style lang="scss" scoped>
	.sticky {
		position: -webkit-sticky;
		position: sticky;
		top: 0;
		z-index: 1000;
	}
	.mobile-nav {
		display: none;
	}
	@media (min-width: 1024px) {
		.mobile-nav {
			display: none;
		}
	}
</style>
