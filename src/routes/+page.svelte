<script lang="ts">
	import { onMount } from "svelte";

	onMount(() => {
		const [ lang ] = navigator.language.split("-");
		window.location.href = lang === "de" ? "/de" : "/en";
	});
</script>
