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
					<NuxtLink :to="item.path" class="navigation__link">{{ item.label }}</NuxtLink>
				</li>
			</template>
		</ul>
	</nav>
</template>

<style lang="scss" scoped>
	.navigation {
		font-weight: 400;
		&--visible {
			top: 90px;
		}
		&__dropdown {
			display: none;
		}
		width: 100%;
		transition: top 0.25s ease;
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
		// .router-link-active {
		// 	color: var(--yellow);
		// }
	}
	@media (min-width: 768px) {
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
				min-height: 50px;
				display: flex;
				align-items: center;
				position: relative;
				top: 0;
				transition: all 0.25s ease;
				border-bottom: 3px solid var(--dark-green);
				&:hover {
					color: var(--pink);
					border-bottom: 3px solid var(--pink);
				}
			}
			// .router-link-active {
			// 	background-color: var(--red);
			// 	border-radius: 0.5rem;
			// 	color: var(--white);
			// }
		}
	}
</style>
