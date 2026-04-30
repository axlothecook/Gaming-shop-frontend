<script lang="ts">
  import ErrorPopup from '$lib/reusable/ErrorPopup.svelte';
    import Select from '$lib/reusable/Select.svelte';
    import '../../../styles/editProductStyle.css';
    let { data, form } = $props();
</script>

<ErrorPopup error={form?.error || null} />
<div class="content">
    <a href="/games" class="btn">Go Back</a>
    <form 
        class="main-content" 
        method="POST" 
        action="/games/new"
        enctype="multipart/form-data"
    >
        <h1>{data.title}</h1>
        <div class="main-content-child">
            <div class="inputs-wrapper">
                <div>
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" autocomplete="off" required />
                </div>
                <div class="grey-text">
                    <label for="price">Price</label>
                    <input type="number" id="price" name="price" autocomplete="off" />
                    <h4>* Leave empty if the game is unreleased</h4>
                </div>
                <div class="grey-text">
                    <label for="rating">Rating</label>
                    <input type="number" id="rating" name="rating" autocomplete="off" />
                    <h4>* Leave empty if the game is unreleased</h4>
                </div>
                <div class="image-input-wrapper">
                    <label for="file">Photo</label>
                    <input type="file" class="image-input" name="file" required />
                </div>
            </div>
            <div>
                <div class="selects-wrapper">
                    <Select arr={data.genresArr} field="genre" selectTitle="Genres" />
                    <Select arr={data.devsArr} field="dev" selectTitle="Developers" />
                </div>
                <div>
                    <label for="description">Description</label>
                    <textarea id="description" name="description" autocomplete="off" required></textarea>
                </div>
            </div>
        </div>
        <button type="submit" class="btn">Done</button>
    </form>
</div>