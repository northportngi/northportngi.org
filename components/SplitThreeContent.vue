<script setup>
	const props = defineProps({
		gridGap: {
			type: String,
			default: '12rem',
		},
		fontSize: {
			type: String,
			default: 'fs-400',
		},
	})
</script>

<template>
	<div class="columns" :class="fontSize">
		<div class="columns__left">
			<slot name="leftColumn"></slot>
		</div>
		<div class="columns__center">
			<slot name="centerColumn"></slot>
		</div>
		<div class="columns__right">
			<slot name="rightColumn"></slot>
		</div>
	</div>
</template>
<style lang="scss" scoped>
	.columns {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		gap: 2rem;
	}
	@media (min-width: 992px) {
		.columns {
			grid-template-columns: repeat(3, 1fr);
			gap: v-bind('gridGap');
		}
	}
</style>
