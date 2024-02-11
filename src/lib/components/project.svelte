<script lang="ts">
	export let title: string;
	export let url: string;
	export let role: string;
	export let date: string;
	export let image: string;
	export let sr: string = "i'm lacking a text for screen readers.";
</script>

<article class="project">
	<a href={url} class="project-link">
		<div class="image">
			<enhanced:img
				src={image}
				sizes="(min-width: 960px) 50vw, 100vw"
				class="project-image"
				aria-hidden="true"
				alt=""
			>
		</div>
		<h2 class="project-title">{title}</h2>
		<span class="project-role" aria-hidden="true">{role}</span>
		<span class="project-date" aria-hidden="true">{date}</span>
		<span class="visually-hidden">{sr}</span>
	</a>
</article>

<style lang="scss">
	@use "sass:color";
	@use "$lib/styles/variables";
	@use "$lib/styles/media-queries";

	.project {
		display: grid;
		grid-column: 1 / -1;

		@include media-queries.above-640 {
			grid-column: span 4;
		}
	}

	.project-link {
		position: relative;
		display: grid;
		overflow: hidden;
		text-decoration: none;
		isolation: isolate;

		> * {
			grid-row: 1 / 1;
			grid-column: 1 / 1;
			text-align: center;
		}

		&::after {
			position: absolute;
			inset: 0;
			content: "";
			background-color: color.adjust(variables.$color-black, $alpha: -0.25);
			backdrop-filter: blur(5px);
			opacity: 0;
			transition: opacity 0.5s ease-in-out;
		}

		&:hover::after,
		&:focus-visible::after {
			opacity: 1;
		}
	}

	.project-image {
		width: 100%;
		height: 100%;
		aspect-ratio: 1;
		object-fit: cover;
		transition: scale 0.5s ease-in-out;

		.project-link:hover &,
		.project-link:focus-within & {
			scale: 1.05;
		}
	}

	.project-title {
		place-self: center;
		font-size: variables.$font-size-new-h2;
		font-weight: variables.$font-weight-extra-bold;
	}

	.project-role {
		place-self: start center;
		margin-top: 20%;
		font-size: variables.$font-size-h3;
	}

	.project-date {
		place-self: end center;
		margin-bottom: 20%;
		font-size: variables.$font-size-h3;
	}

	.project-title,
	.project-role,
	.project-date {
		z-index: 1;
		opacity: 0;
		transition: opacity 0.5s ease-in-out;

		.project:hover &,
		.project:focus-within & {
			opacity: 1;
		}
	}
</style>
