<script lang="ts">
    import '$lib/styles/theme.css';
    import { shadesColorListFromStore } from '$lib/store/store';
    
</script>

<h2>Color Results</h2>

{#each $shadesColorListFromStore as {label, value}, index}
    <div class={label}>
        <h3>{label}: {value}</h3>
    </div>
{/each}