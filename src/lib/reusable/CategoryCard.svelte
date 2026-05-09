<script lang="ts">
    let { item, path } = $props();
    let imgLoaded = $state(false);
    let showImgSpinner = $state(false);

    $effect(() => {
        if (!imgLoaded) {
            const timeout = setTimeout(() => { showImgSpinner = true; }, 400);
            return () => clearTimeout(timeout);
        };
    });
</script>

<a href="/{path}/{item._id.toString()}">
    <div class="category-card">
        {#if !imgLoaded && showImgSpinner}
            <div class="img-spinner-overlay">
                <div class="spinner"></div>
            </div>
        {/if}
        <img
            src={item.url}
            alt={item.name}
            onload={() => imgLoaded = true}
            class:loaded={imgLoaded}
        />
        {#if path !== 'developers'}
            <div class="genre-card">
                <h3>{item.name}</h3>
            </div>
        {/if}
    </div>
</a>