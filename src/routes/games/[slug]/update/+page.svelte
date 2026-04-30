<script lang="ts">
    import '../../../../styles/editProductStyle.css';
    import SelectEdit from "$lib/reusable/SelectEdit.svelte";
    import { getContext, setContext } from "svelte";
    const { data } = $props();
    setContext('updateData', () => data);
    let updateData: Function = getContext('updateData');
</script>

<a href="/games/{updateData().product._id}" class="btn">Return to {updateData().product.name}</a>
<form 
    class="main-content" 
    method="POST" 
    action="/games/{updateData().product._id}/update"
    enctype="multipart/form-data"
>
    <h1>{updateData().product.name}</h1>
    <div class="main-content-child">
        <div class="inputs-wrapper">
            <div>
                <label for="name">Name</label>
                <input type="text" id="name" name="name" value="{updateData().product.name}" autocomplete="off" required />
            </div>
            <div>
                <label for="price">Price</label>
                <input type="number" id="price" name="price" value="{updateData().product.price}" autocomplete="off" />
            </div>
            <div>
                <label for="rating">Rating</label>
                <input type="number" id="rating" name="rating" value="{updateData().product.rating}" autocomplete="off" />
            </div>
            <div>
                <label for="description">Description</label>
                <textarea id="description" name="description" autocomplete="off" required>{updateData().product.description}</textarea>
            </div>
            <div class="image-input-wrapper">
                <label for="file">Photo</label>
                <input type="file" class="image-input" name="file"/>
            </div>
        </div>
        <div class="selects-wrapper">
            <SelectEdit 
                selectedItemsArray={updateData().product.genres} 
                categoryArray={updateData().genresArray} 
                title="Genres" 
                field="genre" 
            />
            <SelectEdit 
                selectedItemsArray={updateData().product.developers} 
                categoryArray={updateData().devsArray} 
                title="Developers" 
                field="dev" 
            />
        </div>
    </div>
    <button type="submit" class="btn" style="width: 50%">Done</button>
</form>