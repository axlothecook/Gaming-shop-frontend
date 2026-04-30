<script lang="ts">
    import '../../../../styles/editProductStyle.css';
    import SelectEdit from "$lib/reusable/SelectEdit.svelte";
    import ErrorPopup from '$lib/reusable/ErrorPopup.svelte';
    let { data, form } = $props();
</script>

<ErrorPopup error={form?.error || null} />
<div class="content">
    <a href="/games/{data.product._id}" class="btn">Return to {data.product.name}</a>
    <form 
        class="main-content" 
        method="POST" 
        action="/games/{data.product._id}/update"
        enctype="multipart/form-data"
    >
        <h1>{data.product.name}</h1>
        <div class="main-content-child">
            <div class="inputs-wrapper">
                <div>
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" value="{data.product.name}" autocomplete="off" required />
                </div>
                <div>
                    <label for="price">Price</label>
                    <input type="number" id="price" name="price" value="{data.product.price}" autocomplete="off" />
                </div>
                <div>
                    <label for="rating">Rating</label>
                    <input type="number" id="rating" name="rating" value="{data.product.rating}" autocomplete="off" />
                </div>
                <div>
                    <label for="description">Description</label>
                    <textarea id="description" name="description" autocomplete="off" required>{data.product.description}</textarea>
                </div>
                <div class="image-input-wrapper">
                    <label for="file">Photo</label>
                    <input type="file" class="image-input" name="file"/>
                </div>
            </div>
            <div class="selects-wrapper">
                <SelectEdit 
                    selectedItemsArray={data.product.genres} 
                    categoryArray={data.genresArray} 
                    title="Genres" 
                    field="genre" 
                />
                <SelectEdit 
                    selectedItemsArray={data.product.developers} 
                    categoryArray={data.devsArray} 
                    title="Developers" 
                    field="dev" 
                />
            </div>
        </div>
        <button type="submit" class="btn" style="width: 50%">Done</button>
    </form>
</div>