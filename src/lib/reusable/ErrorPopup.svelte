<script lang="ts">
    const { error } = $props();
    console.log('in error page: ', error);

    // function testForError() {
    //     const errorVar = document.getElementById('error-wrapper')!;
    //     console.log(errorVar);
    //     if(document.body.contains(errorVar)) {
    //         setTimeout(() => {
    //             errorVar.style.display = 'none';
    //         }, 3000);
    //     };
    // };

    // testForError();
</script>

{#if error}
    <ul id="error-wrapper">
        {#each error.body as err (err.msg)}
            <li>{err.msg}</li>
        {/each}
    </ul>
{/if}