<script lang="ts">
    import { ButtonTypes } from '$lib/types/interfaces';
    export let type: any = ButtonTypes.button;
</script>

<button {type} on:click>
    <slot />
</button>

<style lang="scss">
    button {
        outline: none;
        min-height:2.3rem;
        min-width: 4rem;
        border-radius:2rem;
        cursor: pointer;
        padding: 0.5rem 1rem;
        border: none;
        margin: auto;
    }
</style>