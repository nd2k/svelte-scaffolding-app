<script lang="ts">
    import '$lib/styles/main.css';
    import Button from '$lib/components/Button.svelte';
    import { Color } from '$lib/types/interfaces';
	import { sendColors } from '$lib/services/api';
    import { goto } from '$app/navigation';

    let colorsList: Color[] = [];
    let colorValue: string = '#000000';

    const addColor = () => {
        let color = new Color(`color-${colorsList.length + 1}`, colorValue);
        colorsList.push(color);
        colorsList = colorsList;
    }

    const confirmColors = async () => {
        await sendColors(colorsList);
        goto('./color-result')
    }
</script>

<div class="main">
    <div class="header">
        <h1>Welcome to C.S.S. Theme Generator</h1>
        <p>Please select the required colors to create your theme:</p>
        <Button on:click={addColor}>Add a color</Button>
    </div>
    {#each colorsList as {label, value}, index}
        <p>Select {label}:</p>
        <input type="color" bind:value>
        {colorValue}
    {/each}
    
    {#if colorsList.length > 0}
        <div class="confirmBtn">
            <Button on:click={confirmColors}>Confirm your theme's colors</Button>
        </div>
    {/if}
</div>


