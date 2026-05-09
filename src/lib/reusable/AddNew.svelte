<script lang="ts">
    // import '../../styles/secondary_style.css'; // chekc if 2rem can be applied to everywhere in title-and-dev btn
    const { title, path } = $props();
</script>

<div class="title-and-add-btn-div">
    <h1>{title}</h1>
    <a href="/{path}/new">
        <button class="add-btn">Add new</button>
    </a>
</div>