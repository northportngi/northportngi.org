<script setup>
	const props = defineProps({
		alignItems: {
			type: String,
			default: 'flex-start',
		},
		gridColumns: {
			type: String,
			default: 'repeat(2, 1fr)',
		},
		gridGap: {
			type: String,
			default: '12rem',
		},
		switchColumnsMobile: {
			type: Boolean,
			default: false,
		},
	})
</script>

<template>
	<div class="columns" :class="switchColumnsMobile ? ' swap' : ''">
		<div class="columns__left">
			<slot name="leftColumn"></slot>
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
		align-items: v-bind('alignItems');
		&.swap {
			.columns__left {
				order: 2;
			}
			.columns__right {
				order: 1;
			}
		}
	}
	@media (min-width: 992px) {
		.columns {
			grid-template-columns: v-bind(gridColumns);
			gap: v-bind('gridGap');
			&.swap {
				.columns__left {
					order: 1;
				}
				.columns__right {
					order: 2;
				}
			}
		}
	}
</style>
