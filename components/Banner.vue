<script setup>
	const props = defineProps({
		title : {
			type : String,
			required : true
		}
	})
</script>

<template>
	<div class="banner p-12">
		<h1 class="banner__title">{{ title }}</h1>
		<p class="banner__copy">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam debitis praesentium et quia corporis neque enim iusto quasi voluptatibus architecto veritatis mollitia quam cumque autem dolor itaque, magni voluptate minus.</p>
	</div>	
</template>

<style lang="scss" scoped>
	.banner {
		background-color: var(--black);
		color: var(--white);
		&__copy {
			max-width: 70ch;
		}
	}
</style>