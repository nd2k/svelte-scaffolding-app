<script lang="ts">
	import { goto } from "$app/navigation";
	import Button from "$lib/components/Button.svelte";
	import FieldInput from "$lib/components/FieldInput.svelte";
	import Form from "$lib/components/Form.svelte";
	import NavigationMenu from "$lib/components/NavigationMenu.svelte";
    import { projectContext } from '$lib/store/store';
	import { Color } from "$lib/types/interfaces";

    let colors: Color[] = $projectContext.colorInputs;
    let colorValue: string = '#000000';

    const previousStep = () => {
        goto('./')
    }

    const nextStep = () => {
        $projectContext.colorInputs = colors;
        goto('./components')
    }

    const addColor = () => {
        let color = new Color(`color-${colors.length + 1}`, colorValue);
        colors.push(color);
        colors = colors;
    }

    const removeColor = () => {
        colors.pop();
        colors = colors;
    }

</script>


<Form>
    <div>
        {#if colors.length > 0}
            <Button type="button" on:click={removeColor}>Remove color to your project</Button>
        {/if}
        <Button type="button" on:click={addColor}>Add color to your project</Button>
    </div>
    
    {#each colors as color}
        <div class="select-color">
            Select {color.label}:
            <div class="color-input">
                <FieldInput type="color" bind:value={color.value}/>
            </div>
        </div>
    {/each}
</Form>
<NavigationMenu>
    <Button on:click={previousStep}>Back</Button>
    <Button on:click={nextStep}>Next</Button>
</NavigationMenu>

<style lang="scss">
    .select-color {
        margin: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .color-input {
            margin: 0 1rem;
        }
    }
</style>