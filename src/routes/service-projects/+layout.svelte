<script>
	import '../styles.css';
	import Footer from '../Footer.svelte';
	import Header from '../Header.svelte';
	import Loading from '../Loading.svelte';
	let loading = true;
	setInterval(() => {
    loading = false;
  }, 600);
</script>

<div class="app">
	{#if loading === true}
		<Loading />
	{/if}
	{#if loading === false}
		<Header />
		<slot />
		<Footer />
	{/if}
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
