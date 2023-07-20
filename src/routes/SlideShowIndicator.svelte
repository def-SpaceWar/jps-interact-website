<script lang="ts">
	export let indexNum: number;
	export let selected: boolean;
	$: id = selected ? 'selected' : 'not-selected';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<svg
	viewBox="0 0 100 100"
	xmlns="http://www.w3.org/2000/svg"
	width="10"
	height="10"
	role="switch"
	aria-checked={selected}
	tabindex={indexNum}
	{id}
	on:click
>
	<circle cx="50" cy="50" r="50" />
</svg>

<style>
	svg {
		margin: 0px 5px 0px 5px;
		fill: var(--nav-title-fg);
		transition: var(--transition-length);
	}

	#selected {
		fill: var(--primary-bg);
		transition: var(--transition-length);
	}

	#not-selected:hover {
		cursor: pointer;
		fill: var(--nav-hover-fg);
	}
</style>
