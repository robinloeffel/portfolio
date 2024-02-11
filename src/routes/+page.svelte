<script lang="ts">
	import { PageHero, Project } from "$lib/components";
	import { fairtrade, flatfox, post, swissplant } from "$lib/images";
</script>

<PageHero />

<main class="subgrid">
	<Project
		title="not out yet 👀"
		url="#"
		role="frontend lead @ dept"
		date="since 2023"
		image={fairtrade}
		sr="currently, i'm working on a project that's not out yet. stay tuned!"
	/>

	<Project
		title="flatfox"
		url="https://flatfox.ch"
		role="frontend lead @ dept"
		date="2022 &amp; 2023"
		image={flatfox}
		sr="i've been working on flatfox, a platform for renting and selling real estate."
	/>

	<Project
		title="swiss post"
		url="https://post.ch"
		role="frontend lead @ unic"
		date="2019 &mdash; 2022"
		image={post}
		sr="i've been working on the swiss post, a platform for sending and receiving mail."
	/>

	<Project
		title="swissplant"
		url="https://swissplant.ch"
		role="full stack &amp; design"
		date="since 2019"
		image={swissplant}
		sr="i've been working on swissplant, a platform for renting and selling construction equipment."
	/>
</main>
