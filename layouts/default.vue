<script setup></script>

<template>
	<div>
		<div class="sticky">
			<div class="header-wrapper">
				<Header />
				<div class="mobile-nav clr-bg-dark-green">
					<NavigationMobile />
				</div>
			</div>
		</div>

		<div class="clr-bg-white">
			<NuxtPage />
		</div>
		<Footer />
	</div>
</template>

<style lang="scss" scoped>
	.sticky {
		position: -webkit-sticky;
		position: sticky;
		top: 0;
		z-index: 1000;
	}
	.header-wrapper {
		position: relative;
	}
	.mobile-nav {
		display: none;
		position: absolute;
		top: 100%;
		left: 0;
		width: 100%;
		z-index: 1000;
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
