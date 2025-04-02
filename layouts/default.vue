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
	.mobile-nav.open {
		display: block; /* or flex, etc. */
	}

	@media (min-width: 1025px) {
		.mobile-nav {
			display: none !important;
		}
	}
	.mobile-nav {
		display: none;
	}
</style>
