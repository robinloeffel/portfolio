<script lang="ts">
	import { PageTitle, Project } from "$lib/components";
	import { fairtrade, flatfox, post, swissplant } from "$lib/images";
</script>

<PageTitle
	caption='senior frontend engineer at <a href="https://deptagency.com">dept</a>'
/>

<main class="subgrid">
	<Project
		title="not out yet 👀"
		url="#"
		role="frontend lead @ dept"
		date="since 2023"
		image={fairtrade}
	/>

	<Project
		title="flatfox"
		url="https://flatfox.ch"
		role="frontend lead @ dept"
		date="2022 &amp; 2023"
		image={flatfox}
	/>

	<Project
		title="swiss post"
		url="https://post.ch"
		role="frontend lead @ unic"
		date="2019 &mdash; 2022"
		image={post}
	/>

	<Project
		title="swissplant"
		url="https://swissplant.ch"
		role="full stack &amp; design"
		date="since 2019"
		image={swissplant}
	/>
</main>
