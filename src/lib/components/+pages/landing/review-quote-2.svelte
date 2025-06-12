<script lang="ts" context="module">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import QuoteMarkIcon from './quote-mark-icon.svelte';

	type Review = { text: string[]; reviewer: { name: string; org: string } };
</script>

<script lang="ts">
	export let review1: Review;
	export let review2: Review;
	export let delay = 0;

	let show = false;
	let activeReviewNum: 1 | 2 = 1;
	$: activeReview = activeReviewNum === 1 ? review1 : review2;

	onMount(() => {
		show = true;
	});
</script>

{#if show}
	<div
		class="w-[278px] xxs:w-[310px] xs:w-[348.5px] sm:w-[322px] sm/md:w-[333px] md:w-[355px] md/lg:w-[388px] lg:w-[420px] max-w-full transition-all duration-300"
		in:fade={{ delay }}>
		<p
			class="xxs:text-lg xs:text-xl sm:text-lg sm/md:text-1.5lg md:text-xl md/lg:text-1.5xl lg:text-2xl tracking-wider flex flex-col gap-xxs md:gap-xs items-start">
			{#each activeReview.text as line, i}
				<span class="relative">
					{#if i === 0}
						<QuoteMarkIcon type="left" />
					{/if}

					{line}

					{#if i === activeReview.text.length - 1}
						<QuoteMarkIcon type="right" />
					{/if}
				</span>
			{/each}
		</p>

		<p
			class="pl-md md:pl-lg text-sm lg:text-base mt-sm md:mt-md tracking-wide text-my-black-700 font-light">
			{activeReview.reviewer.name} — {activeReview.reviewer.org}
		</p>
	</div>
{/if}

<!-- <div
		class="flex items-center justify-center sm:items-start sm:justify-between gap-xl md:gap-[4.5rem] lg:gap-2xl">
		<div class="flex flex-col gap-1.5xl sm:gap-2xl">
			{#if activeReviewNum === 1}
				<div transition:fade={{ duration: 1000, easing: sineInOut }}>
					<ReviewQuote
						reviewer={{ name: 'Martin Webb', org: 'R&R Magazine' }}
						text={[
							"Red Brick Angel... if you're looking",
							'for a fine example of Americana',
							'… this album is right up your music alley … '
						]} />
				</div>

				<div
					class="translate-x-sm xxs:translate-x-md xs:translate-x-xl xs/sm:translate-x-[4rem] sm:translate-x-[0rem]"
					transition:fade={{ duration: 1000, easing: sineInOut, delay: 500 }}>
					<ReviewQuote
						reviewer={{ name: 'Martin Webb', org: 'R&R Magazine' }}
						text={[
							'The first round of voting for the',
							"Grammy Awards '25 opened with",
							"Raie's album Red Brick Angel placed",
							'in the Country & American Roots',
							'Music for Best Americana Album'
						]} />
				</div>
			{:else}
				<div transition:fade={{ duration: 1000, easing: sineInOut }}>
					<ReviewQuote
						reviewer={{ name: 'Martin Cooke', org: 'Bluesmatters Magazine' }}
						text={[
							"One of life's trip-me-up revelations.",
							'A purveyor of pin-me-to-the wall,',
							'beautiful, life-enhancing soul music.',
							'A sweet, certain surprise...'
						]} />
				</div>

				<div
					class="translate-x-sm xxs:translate-x-md xs:translate-x-xl xs/sm:translate-x-[4rem] sm:translate-x-[0rem]"
					transition:fade={{ duration: 1000, easing: sineInOut, delay: 500 }}>
					<ReviewQuote
						reviewer={{ name: 'Martin Webb', org: 'R&R Magazine' }}
						text={[
							'Raie has stepped forward with a',
							'beautifully assured solo album...',
							'Heart-tuggingly moving and edgily',
							'joyous. Love it!'
						]} />
				</div>
			{/if}

			<div class="sm:hidden px-[4.5rem]">
				<div
					class="w-full"
					style:aspect-ratio={images.faceshots[1].naturalDimensions.width /
						images.faceshots[1].naturalDimensions.height}>
					<Picture
						imageClass="w-full"
						meta={images.faceshots[1].src}
						sizes={'50vw'}
						loading="eager"
						onLoad={() => (criticalContentIsLoaded = true)}
						alt="" />
				</div>
			</div>
		</div>

		<div
			class="hidden sm:block md:w-[400px] lg:w-[400px] xl:w-[450px] 2xl:w-[500px]"
			style:aspect-ratio={images.faceshots[1].naturalDimensions.width /
				images.faceshots[1].naturalDimensions.height}>
			<Picture
				imageClass="w-full"
				meta={images.faceshots[1].src}
				sizes={'50vw'}
				loading="eager"
				onLoad={() => (criticalContentIsLoaded = true)}
				duration="duration-500"
				alt="" />
		</div>
	</div> -->
