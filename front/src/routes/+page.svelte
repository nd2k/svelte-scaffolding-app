<script lang="ts">
	import { goto } from "$app/navigation";
    import Button from "$lib/components/Button.svelte";
    import FieldInput from "$lib/components/FieldInput.svelte";
	import Form from "$lib/components/Form.svelte";
    import NavigationMenu from "$lib/components/NavigationMenu.svelte";
    import { projectContext } from '$lib/store/store';

    let projectName: string = '';

    const nextStep = () => {
        $projectContext.projectName = projectName;
        goto('./color-page')
    }
</script>

<Form>
    <div class="main-form">
        <p class="introduction">Svelte Scaffoling App aims to help developpers to quickly get a Svelte starter project with all the requested specifications
        as css theme, components,... Please, follow the below steps to get all the required inputs to create your projects.
        </p>
        <div class="name-form">
            Enter your project's name:
            <div class="input-form">
                <FieldInput bind:value={projectName} />
            </div>
        </div>
    </div>
</Form>
<NavigationMenu>
    <Button on:click={nextStep}>Next</Button>
</NavigationMenu>   

<style lang="scss">
    .introduction {
        margin-bottom: 2rem;
    }
    .name-form {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .input-form {
            margin: 0 1rem;
        }
    }
    
</style>


