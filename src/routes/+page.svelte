<script>
	let info = [1, 2, 3, 4, 5];

	let isSubmitted = false;
	let selected = undefined;

	$: isOneActive = Boolean(false);

	const handleClick = (val) => {
		isOneActive = true;
		selected = val;
	};
</script>

<div class="flex h-full items-center justify-center">
	{#if !isSubmitted}
		<div class="rgrad xs:w-[22rem] rounded-3xl p-8 drop-shadow-xl sm:h-[26rem] sm:w-[26rem]">
			<div class="rating-star bg-dark-blue flex align-middle">
				<img src="./img/icon-star.svg" alt="star" class="h-4 w-4" />
			</div>
			<h1 class="mt-9 text-left text-3xl font-normal text-white">How did we do?</h1>
			<p class="text-medium-grey mt-2 text-left text-[15px] leading-relaxed">
				Please let us know how we did with your support request. All feedback is appreciated to help
				us improve our offering!
			</p>
			<div class="mt-6 mb-8 flex justify-between gap-4">
				{#each info as i}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div
						class="rating group mt-1 {i === selected
							? 'bg-light-grey'
							: 'bg-dark-blue'} transition duration-150 ease-in"
						on:click={() => handleClick(i)}
					>
						<p
							class="p-rating {i === selected
								? 'text-white'
								: 'text-medium-grey'} transition duration-150 ease-in"
						>
							{i}
						</p>
					</div>
				{/each}
			</div>
			<button
				type="submit"
				class="a-btn mt-1 uppercase transition duration-150 ease-in"
				on:click={() => (isSubmitted = true)}
				disabled={!isOneActive}>Submit</button
			>
		</div>
	{:else}
		<div
			class="rgrad xs:w-[22rem] xs:h-[26rem] flex flex-col items-center justify-center gap-4 rounded-3xl p-8 drop-shadow-xl sm:h-[26rem] sm:w-[26rem]"
		>
			<img src="./img/illustration-thank-you.svg" alt="thank you" />
			<div class="bg-dark-blue mt-4 rounded-full pl-4 pr-4 pt-1 pb-1">
				<p class="text-orange text-center">You selected {selected} out of 5</p>
			</div>
			<h1 class="mt-4 text-center text-[28px] text-white">Thank you!</h1>
			<p class="text-medium-grey text-center text-[15px]">
				We appreciate you taking the time to give a rating. If you ever need more support, don't
				hesitate to get in touch!
			</p>
		</div>
	{/if}
</div>
