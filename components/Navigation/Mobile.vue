<script setup>
	const navigation = useNavigation()
</script>
<template>
	<nav class="navigation">
		<ul class="navigation__primary m-0 p-0 no-bull">
			<li>
				<NuxtLink class="mobile-link" to="/about">About</NuxtLink>
			</li>
			<li>
				<NuxtLink class="mobile-link" to="/stay-in-touch">Stay in Touch</NuxtLink>
			</li>
			<li>
				<NuxtLink class="mobile-link" to="/spring-plant-sale-volunteer">Spring Plant Sale Volunteer</NuxtLink>
			</li>
			<li>
				<NuxtLink class="mobile-link" to="/volunteer">Volunteer</NuxtLink>
			</li>
			<li>
				<a href="/https://www.pollinator-pathway.org/register" class="mobile-link" target="_blank">Pollinator Pathway Registration</a>
			</li>
			<li>
				<NuxtLink class="mobile-link" to="/learn">Learn</NuxtLink>
			</li>
			<li>
				<NuxtLink class="mobile-link" to="/projects">Projects</NuxtLink>
			</li>
			<li>
				<NuxtLink class="mobile-link" to="/farmers-market">Farmers Market</NuxtLink>
			</li>
			<li>
				<NuxtLink class="mobile-link" to="/resources">Resources</NuxtLink>
			</li>
			<li>
				<NuxtLink class="mobile-link" to="/contact">Contact</NuxtLink>
			</li>
			<li>
				<NuxtLink class="mobile-link" to="/shop">Shop</NuxtLink>
			</li>
			<li>
				<a href="https://square.link/u/3tqRHobW" class="mobile-link" target="_blank">Donate</a>
			</li>
		</ul>
	</nav>
</template>

<style lang="scss" scoped>
	.navigation {
		border-top: 1px solid var(--green);
		padding: 2rem;
		&__primary {
			text-align: center;
			display: flex;
			flex-direction: column;
			gap: 1rem;
			a {
				color: var(--cream);
			}
		}
	}
</style>
