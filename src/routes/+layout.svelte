<script>
	import './styles.css';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
</script>

<div class="app">
	<Header />
	<slot />
	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
