<script context="module" lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import { updateGlobalFlags } from '$lib/stores';

	import { images } from '$lib/assets';

	import { Images, LatestNews, Picture } from '$lib/components';
	import { PageLinks, PlayMusicButton, ReviewQuote } from '$lib/components/+pages/landing';
	import { BodyContainer, VerticalSpacing } from '$lib/components/layout';
</script>

<script lang="ts">
	let criticalContentIsLoaded = false;

	$: {
		if (criticalContentIsLoaded) {
			updateGlobalFlags.firstPageIsReady();
		}
	}

	let showReview1a = false;
	let showReview1b = false;

	let showReview2a = false;
	let showReview2b = false;

	onMount(() => {
		setTimeout(() => {
			showReview1a = true;

			setInterval(() => {
				if (showReview1a) {
					showReview1a = false;

					setTimeout(() => {
						showReview1b = true;
					}, 1350);
				} else {
					showReview1b = false;

					setTimeout(() => {
						showReview1a = true;
					}, 1350);
				}
			}, 9000);
		}, 100);

		setTimeout(() => {
			showReview2a = true;

			setInterval(() => {
				if (showReview2a) {
					showReview2a = false;

					setTimeout(() => {
						showReview2b = true;
					}, 1350);
				} else {
					showReview2b = false;

					setTimeout(() => {
						showReview2a = true;
					}, 1350);
				}
			}, 9000);
		}, 725);
	});
</script>

<BodyContainer>
	<VerticalSpacing sizing={'1.5'} />

	<div
		class="flex items-center justify-center sm:items-start sm:justify-between gap-xl md:gap-[4.5rem] lg:gap-2xl">
		<div class="flex flex-col gap-1.5xl sm:gap-2xl">
			<div class="relative">
				<div
					class={`transition-opacity ease-in-out duration-[2700ms] ${!showReview1a ? 'opacity-0' : ''}`}>
					<ReviewQuote
						reviewer={{ name: 'Stephen Harrison', org: 'Blues Matters' }}
						text={[
							"Red Brick Angel... if you're looking",
							'for a fine example of Americana',
							'… this album is right up your music alley … '
						]} />
				</div>

				<div
					class={`absolute inset-0 z-10 transition-opacity ease-in-out duration-[2700ms] ${!showReview1b ? 'opacity-0' : ''}`}>
					<ReviewQuote
						reviewer={{ name: 'Martin Cooke', org: 'Bluesmatters Magazine' }}
						text={[
							"One of life's trip-me-up revelations.",
							'A purveyor of pin-me-to-the wall,',
							'beautiful, life-enhancing soul music.',
							'A sweet, certain surprise...'
						]} />
				</div>
			</div>

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

			<div
				class="relative translate-x-sm xxs:translate-x-md xs:translate-x-xl xs/sm:translate-x-[4rem] sm:translate-x-[0rem]">
				<div
					class={`transition-opacity ease-in-out duration-[2700ms] ${!showReview2a ? 'opacity-0' : ''}`}>
					<ReviewQuote
						reviewer={{ name: '', org: '' }}
						text={[
							'The first round of voting for the',
							"Grammy Awards '25 opened with",
							"Raie's album Red Brick Angel placed",
							'in the Country & American Roots',
							'Music for Best Americana Album'
						]} />
				</div>

				<div
					class={`absolute inset-0 transition-opacity ease-in-out duration-[2700ms] ${!showReview2b ? 'opacity-0' : ''}`}>
					<ReviewQuote
						reviewer={{ name: 'Martin Webb', org: 'R&R Magazine' }}
						text={[
							'Raie has stepped forward with a',
							'beautifully assured solo album...',
							'Heart-tuggingly moving and edgily',
							'joyous. Love it!'
						]} />
				</div>
			</div>
		</div>

		<div
			class="hidden sm:block md:w-[400px] lg:w-[400px] xl:w-[450px] 2xl:w-[500px]"
			style:aspect-ratio={images.faceshots[1].naturalDimensions.width /
				images.faceshots[1].naturalDimensions.height}>
			<Picture
				imageClass={`w-full`}
				meta={images.faceshots[1].src}
				sizes={'50vw'}
				loading="eager"
				onLoad={() => (criticalContentIsLoaded = true)}
				duration="duration-500"
				alt="" />
		</div>
	</div>

	<VerticalSpacing sizing="1.5" />

	{#if criticalContentIsLoaded}
		<div class="flex justify-center" in:fade>
			<PlayMusicButton />
		</div>
	{/if}

	{#if criticalContentIsLoaded}
		<VerticalSpacing />

		<div class="px-xs xs:px-lg h-[12px] sm:h-[16px] md:h-auto sm:px-0 overflow-hidden">
			<Images.BrickBg.HorizontalThree />
		</div>
	{/if}

	{#if criticalContentIsLoaded}
		<VerticalSpacing />

		<div
			class="flex flex-col sm:flex-row justify-between sm:gap-lg lg:gap-xl flex-shrink-0"
			in:fade={{ delay: 400 }}>
			<div class="px-xs xs:px-lg sm:px-0">
				<LatestNews />
			</div>

			<div class="sm:hidden">
				<VerticalSpacing sizing="1.5" />
			</div>

			<div class="px-xs xs:px-lg h-[12px] sm:hidden overflow-hidden">
				<Images.BrickBg.HorizontalThree />
			</div>

			<div class="sm:hidden">
				<VerticalSpacing sizing="half" />
			</div>

			<div class="sm:pt-[40px] px-md sm:px-0">
				<PageLinks />
			</div>
		</div>
	{/if}
</BodyContainer>
