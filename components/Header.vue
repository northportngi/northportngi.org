<script setup>
	const config = useRuntimeConfig()
</script>

<template>
	<header class="header clr-bg-dark-green clr-white pblock-4">
		<div class="container">
			<div class="grid">
				<div>
					<NuxtLink to="/" class="header__logo-link">
						<img src="/images/nngi-text-logo.svg" alt="Northport Native Garden Initiative" class="header__logo-img" />
					</NuxtLink>
				</div>
				<div class="header__navigation">
					<Navigation />
				</div>
			</div>
		</div>
	</header>
</template>

<style lang="scss" scoped>
	.header {
		font-size: clamp(1.6rem, 1.5091rem + 0.2909vw, 1.8rem);
		&__logo {
			width: 60%;
			max-width: 275px;
			display: block;
			transition: width 0.3s ease-in-out;
			@media (min-width: 768px) {
				width: 100%;
			}
		}
		&__logo-link {
			display: block;
		}
		.grid {
			display: grid;
			grid-template-columns: 200px 1fr;
			align-items: center;
		}
	}
</style>
