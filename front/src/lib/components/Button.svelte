<script lang="ts">
    import { ButtonTypes } from '$lib/types/interfaces';
    export let type: any = ButtonTypes.button;
</script>

<button {type} on:click>
    <slot />
</button>