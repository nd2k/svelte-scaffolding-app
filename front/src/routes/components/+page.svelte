<script>
	import { goto } from "$app/navigation";
	import Button from "$lib/components/Button.svelte";
	import Form from "$lib/components/Form.svelte";
	import NavigationMenu from "$lib/components/NavigationMenu.svelte";
	import { projectContext } from "$lib/store/store";

    const previousStep = () => {
        goto('./color-page')
    }
    const nextStep = () => {}

    $: console.log($projectContext);

</script>
<Form>
</Form>
<NavigationMenu>
    <Button on:click={previousStep}>Back</Button>
    <Button on:click={nextStep}>Next</Button>
</NavigationMenu>