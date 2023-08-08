<script>
	import Event from './Event.svelte';
</script>

<svelte:head>
	<title>Events - JPS Interact Club</title>
	<meta name="description" content="Upcoming events happening in JPS Interact Club." />
</svelte:head>

<div class="container">
	<h1 class="title">EVENTS</h1>
	<hr />
	<div class="event-container">
		<Event
			title="Hands of Hope"
			date="1st & 3rd Sat every month"
			time="9:00 AM - 1:00 PM EST"
			location="2136 Woodbridge Ave, Edison, NJ"
			attendees={12}
			description="This event is for volunteering at the Hands of Hope Soup Kitchen. Please sign up on the spreadsheet linked down below. "
			on:click={() => window.location.replace("https://docs.google.com/spreadsheets/d/1-dxrbRbhkO1qHpRTeBGN3__kBufaYeOP0NuwhInuhkA/edit#gid=0")}
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
