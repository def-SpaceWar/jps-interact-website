<script lang="ts">
	export let name: string;
	export let image: string;
	export let title: string;
</script>

<div class="board-member">
	<img src={image} alt={name} />
	<h1>{name}</h1>
	<h5>{title}</h5>
</div>

<style>
	.board-member {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 1rem 1rem;
		padding: 1rem;
		border-radius: 10px;
		width: 220px;
		border: 5px double var(--secondary-bg);
	}

	.board-member img {
		width: 200px;
		height: 200px;
		object-fit: cover;
		border-radius: 9999px;
	}

	.board-member h1 {
		margin: 0;
		margin-top: 0.3rem;
		padding: 0;
		font-size: 23px;
		text-align: center;
	}

	.board-member h5 {
		margin: 0;
		margin-top: 0.1rem;
		font-weight: 500;
		color: var(--primary-fg);
		padding: 0;
		font-size: 17px;
	}

	@media only screen and (max-width: 600px) {
		.board-member {
			width: 100%;
		}

		
	}
</style>
