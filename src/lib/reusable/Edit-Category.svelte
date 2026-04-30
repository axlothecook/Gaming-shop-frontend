<script lang="ts">
  import '../../styles/category_id.css';
  const { title, path, details } = $props();
//   console.log('update category page: ', title);
</script>

<a href="/{path}/{details._id}" class="btn">Go back to {title}</a>
<form 
    class="main-content for-edit" 
    method="POST" 
    action="/{path}/{details._id}/update"
    enctype="multipart/form-data"
>
    <h1>Edit {title}</h1>
    <div class="main-content-child">
        <div>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" value="{details.name}" autocomplete="off" />
        </div>
        <div class="image-input-wrapper">
            <label for="file">Photo</label>
            <input type="file" class="image-input" id="file" name="file" />
        </div>
    </div>
    <button type="submit" class="btn" style="width: 22.5%">Done</button>
</form>