<script lang="ts">
	import "$styles/base.scss";

	import { dev } from "$app/environment";
	import { favicon } from "$assets";
	import { Footer, Header, Main } from "$components";
	import { VERSION as sveltekitVersion } from "@sveltejs/kit";
	import { VERSION as svelteVersion } from "svelte/compiler";
</script>

<svelte:head>
	<meta charset="utf-8" />
	<title>Robin Löffel &mdash; Senior Frontend Engineer</title>
	<link href={favicon} rel="icon" />
	<link href="https://robinloeffel.ch" rel="canonical" />
	<meta name="generator" content="SvelteKit v{sveltekitVersion}; Svelte v{svelteVersion}" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="description" content="What's up, I'm Robin! I'm a Senior Frontend Engineer at Mimacom in Bern. I care about performance, sustainability, and good design!" />
	<meta name="keywords" content="robin löffel, web design, internet, programmer, developer, web designer, bern, zurich, switzerland, frontend, frontend engineer, frontend developer, web developer, unic, unic ag, dept, deptagency, hinderling volkart, hv, mimacom" />

	{#if !dev}
		<script
			async
			data-domains="robinloeffel.ch"
			data-website-id="d1008afe-4b86-4249-9980-fbcb8f500b20"
			src="/stats/script.js"
		></script>
	{/if}
</svelte:head>

<Header />
<Main />
<Footer />
