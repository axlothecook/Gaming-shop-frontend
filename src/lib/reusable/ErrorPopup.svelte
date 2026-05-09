<script lang="ts">
    const { error } = $props();
    let visible = $state(false);
    $effect(() => {
        if (error) {
            visible = true;
            const timeout = setTimeout(() => {
                visible = false;
            }, 4000);
            return () => clearTimeout(timeout);
        }
    });
</script>

{#if visible && error}
    <ul id="error-wrapper">
        {#each error.body as err (err.msg)}
            <li>{err.msg}</li>
        {/each}
    </ul>
{/if}