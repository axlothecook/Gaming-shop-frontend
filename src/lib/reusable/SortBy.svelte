<script lang="ts">
    let { array, activeSort, onclick } = $props();
    const ascendedSort = array[0];
    const descendedSort = array[1];
</script>

<div class="radio-input-container">
    <button 
        class="radio-btn {(!activeSort || String(activeSort) === String(ascendedSort.value)) ? "active-btn" : ''}"  
        id="{ascendedSort.id}" 
        type="button"
        onclick={() => onclick(ascendedSort.value)}
    >
        <h3>{ascendedSort.text}</h3>
    </button>
    <button 
        class="radio-btn {String(activeSort) === String(descendedSort.value)? "active-btn" : ''}"  
        id="{descendedSort.id}" 
        type="button"
        onclick={() => onclick(descendedSort.value)}
    >
        <h3>{descendedSort.text}</h3>
    </button>
</div>
