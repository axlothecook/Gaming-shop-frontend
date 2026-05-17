<script lang="ts">
    const { path, title, field } = $props();
</script>

<a href="/{path}" class="btn-outlined-wheatfield br-xs pt-0-5 pb-0-5 pl-0-8 pr-0-8">Go Back</a>
<form
    class="column-nowrap align-items-center pt-3"
    method="POST"
    action="/{path}/new"
    enctype="multipart/form-data"
>
    <div class="column-nowrap align-items-center gap-2 p-1-5 mt-2 br-sm border-style-solid border-width-1">
        <h1>Add new {title}</h1>
        <div class="column-nowrap gap-2">
            <div class="form-field w-full">
                <label for="name">Name</label>
                <input class="form-input" type="text" name="name" id="{field}-id-create" autocomplete="off" required />
            </div>
            <div class="column-nowrap gap-1">
                <label for="file">Photo</label>
                <input type="file" class="image-input" name="file" required />
            </div>
        </div>
        <button
            type="submit"
            class="btn-outlined-wheatfield br-xs p-0-8"
            style="width: 100%;"
        >Done</button>
    </div>
</form>