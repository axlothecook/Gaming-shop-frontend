<script lang="ts">
    const { title, path } = $props();
</script>

<div class="title-and-add-btn-div">
    <h1>{title}</h1>
    <a href="/{path}/new">
        <button class="add-btn">Add new</button>
    </a>
</div>