<script lang="ts">
    export let value: string | any = '';
    export let type: string = 'text';

    function typeAction(node: HTMLInputElement) {
      node.type = type
    }
</script>

<div class="field">
    {#if type === "color"}
        <input class="field-input-color" use:typeAction bind:value />
    {:else}
        <input class="field-input" use:typeAction bind:value />
    {/if}
</div>

<style lang="scss">
    .field {
        .field-input-color {
            height: 2rem;
            width: 2rem;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
        .field-input-color::-webkit-color-swatch {
            border: none;
            border-radius: 50%;
            padding: 0;
            height: 2rem;
            width: 2rem;
        }

        .field-input-color::-webkit-color-swatch-wrapper {
            border: none;
            border-radius: 50%;
            padding: 0;
            height: 2rem;
            width: 2rem;
        }
        .field-input {
            border-radius:2rem;
            padding: 0 1rem;
            height: 2rem;
        }
    }
</style>