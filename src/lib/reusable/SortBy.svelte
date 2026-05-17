<script lang="ts">
    let { array, activeSort, onclick } = $props();
    const ascendedSort = array[0];
    const descendedSort = array[1];
</script>

<div class="row-nowrap align-items-center gap-2-5 justify-content-center">
    <button
        class="drop-underline-effect {(!activeSort || String(activeSort) === String(ascendedSort.value)) ? "current" : ''}"
        id="{ascendedSort.id}"
        type="button"
        onclick={() => onclick(ascendedSort.value)}
    >
        <h3>{ascendedSort.text}</h3>
    </button>
    <button
        class="drop-underline-effect {String(activeSort) === String(descendedSort.value) ? "current" : ''}"
        id="{descendedSort.id}"
        type="button"
        onclick={() => onclick(descendedSort.value)}
    >
        <h3>{descendedSort.text}</h3>
    </button>
</div>