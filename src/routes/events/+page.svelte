<script>
	import Event from './Event.svelte';
</script>

<svelte:head>
	<title>Events - JPS Interact Club</title>
	<meta name="description" content="Upcoming events happening in JPS Interact Club." />
</svelte:head>

<div class="container">
	<h1 class="title">Events</h1>
	<hr />
	<div class="event-container">
		<Event
			title="Website Development"
			date="Sat, May 13th"
			time="10:00 AM - 2:00 PM EST"
            attendees={10}
			description="This event is for developing a website for the
            JPS Interact Club. We need a skilled developer and we will
            compensate with volunteer hours."
            on:click={() => alert("hi")}
		/>
	</div>
</div>

<style>
	hr {
		background: var(--foreground);
		border: 2px solid var(--foreground);
		width: 30%;
		margin-bottom: 2rem;
	}

	.title {
		padding: 0;
		margin: 0;
		font-weight: 500;
		text-align: center;
		font-family: 'Rubik', sans-serif;
	}

	.container {
		padding: 6rem 8rem;
	}

	.event-container {
		display: flex;
		flex-wrap: wrap;
	}

	@media only screen and (max-width: 600px) {
	.container {
		padding: 6rem 2rem;
	}
	}
</style>
