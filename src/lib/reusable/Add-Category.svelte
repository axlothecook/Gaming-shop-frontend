<script lang="ts">
    const { path, title, field } = $props();

    // console.log('new category: ', path, title, field);
</script>

<a href="/{path}" class="btn">Go Back</a>
<form 
    class="main-content for-edit" 
    method="POST" 
    action="/{path}/new"
    enctype="multipart/form-data"
>
    <h1>{title}</h1>
    <div class="main-content-child">
        <div>
            <label for="name">Name</label>
            <input type="text" name="name" id="{field}-id-create" autocomplete="off" required />
        </div>
        <div class="image-input-wrapper">
            <label for="file">Photo</label>
            <input type="file" class="image-input" name="file" required />
        </div>
    </div>
    <button type="submit" class="btn">Done</button>
</form>