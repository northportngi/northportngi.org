<script setup></script>

<template>
	<div>
		<!-- BANNER -->
		<div class="banner green-bg-pattern clr-cream">
			<div class="pblock-8">
				<div class="container container--1400">
					<SplitContent gridGap="8rem" gridColumns="3fr 1fr" alignItems="center">
						<template #leftColumn>
							<h1 class="banner__header fs-xl regular clr-yellow mb-2">Sign up to receive info from NNGI</h1>
						</template>
						<template #rightColumn> </template>
					</SplitContent>
				</div>
			</div>
		</div>
		<main>
			<div class="container container--1400">
				<div class="mblock-8">
					<SplitContent gridGap="8rem" gridColumns="1fr 500px">
						<template #leftColumn>
							<p class="fs-600 bold clr-purple">Stay informed with helpful tips, upcoming events, plant sales, and volunteer opportunities. We will keep the emails to a minimum.</p>
							<WufooForm formid="q9zbzmt1adypr5" />
						</template>
						<template #rightColumn>
							<img src="/images/nngi-illustration.webp" alt="Illustration of native flowers" />
						</template>
					</SplitContent>
				</div>
			</div>
		</main>
	</div>
</template>
