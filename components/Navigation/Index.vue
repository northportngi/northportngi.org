<script setup>
	const navigation = useNavigation()
</script>
<template>
	<nav class="navigation">
		<ul class="navigation__primary m-0 p-0 no-bull">
			<template v-for="(item, index) in navigation.primary">
				<li v-if="item.links" class="navigation__dropdown">
					<NavigationDropDown :index="index" :label="item.label" :links="item.links" />
				</li>
				<li v-else>
					<NuxtLink :to="item.path" class="navigation__link" :class="item.slug">{{ item.label }}</NuxtLink>
				</li>
			</template>
		</ul>
	</nav>
</template>

<style lang="scss" scoped>
	.navigation {
		display: none;
		font-weight: 400;
		width: 100%;
		transition: top 0.25s ease;
		&--visible {
			top: 90px;
		}
		&__dropdown {
			display: none;
		}

		&__link {
			color: var(--white);
			text-decoration: none;
			display: block;
			margin: 0;
			padding: 0;
		}
		&__primary {
			display: grid;
			align-items: center;
		}
	}
	@media (min-width: 1024px) {
		.navigation {
			display: flex;
			justify-content: flex-end;
			&__dropdown {
				display: block;
			}
			&__primary {
				display: flex;
				gap: 2.5rem;
			}
			&__link {
				min-height: 40px;
				display: flex;
				align-items: center;
				position: relative;
				top: 0;
				transition: all 0.25s ease;
				border-bottom: 3px solid var(--dark-green);
				&:hover {
					color: var(--pink);
				}
				&.donate {
					background-color: var(--yellow);
					color: var(--dark-green);
					padding: 0.5rem 2rem;
					border-radius: 500px;
					&:hover {
						background-color: var(--pink);
					}
				}
			}
			.router-link-active {
				color: var(--pink);
			}
		}
	}
</style>
