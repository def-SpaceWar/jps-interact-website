<script lang="ts">
	export let title: string;
	export let image: string;
	export let description: string;
</script>

<div class="card">
	<img src={image} class="icon" alt={title} />
	<h1>{title}</h1>
	<h4>{description}</h4>
</div>

<style>
	.card {
		box-shadow: 0px 0px 8px 4px var(--secondary-bg);
		padding: 1.5rem;
		margin: 2%;
		width: 250px;
		border-radius: 6px;
		text-align: center;
	}

	.card h1 {
		font-size: 30px;
		padding: 0;
		margin: 0;
		font-weight: 500;
		font-family: 'Rubik', sans-serif;
		overflow-wrap: break-word;
	}

	.card .icon {
		width: auto;
		height: 50px;
		margin-bottom: 1rem;
	}

	.card h4 {
		font-size: 25px;
		padding: 0;
		margin: 0;
		margin-top: 1.5rem;
		font-weight: 500;
		font-family: 'Rubik', sans-serif;
		color: var(--secondary-fg);
		overflow-wrap: break-word;
	}
</style>
