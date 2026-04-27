<script>
    let errors = $props();
</script>

{#if errors && errors.length > 0}
    <ul id="error-wrapper">
    {#each errors as err (err.msg)}
        <li>{err.msg}</li>
        {/each}
    </ul>
{/if}

<style></style>