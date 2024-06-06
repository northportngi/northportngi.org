<script setup></script>

<template>
	<Header class="sticky" />
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
</style>
