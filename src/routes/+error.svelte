<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.status} - JPS Interact Club</title>
</svelte:head>

<div>
	<h1>{$page.status}</h1>
	{#if $page.error}
		<p>{$page.error.message}</p>
	{:else}
		<p>An error has occurred*.</p>
	{/if}
</div>

<style>
	div {
		margin: 8rem 25% 8rem 25%;
	}
</style>
