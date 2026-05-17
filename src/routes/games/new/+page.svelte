<script lang="ts">
    import ErrorPopup from '$lib/reusable/ErrorPopup.svelte';
    import SelectEdit from '$lib/reusable/SelectEdit.svelte';
    let { data, form } = $props();
</script>

<ErrorPopup error={form?.error || null} />
<div class="column-nowrap gap-1 pt-1-5 w-full">
    <a href="/games" class="btn-outlined-wheatfield br-xs pt-0-5 pb-0-5 pl-0-8 pr-0-8">Go Back</a>
    <form
        class="column-nowrap align-items-center gap-2 main-content"
        method="POST"
        action="/games/new"
        enctype="multipart/form-data"
    >
        <h1>{data.title}</h1>
        <div class="grid gap-5 main-content-child" style="grid-template-columns: repeat(2, 1fr);">
            <div class="column-nowrap align-items-center justify-content-space-between">
                <div class="form-field w-full">
                    <label class="fz-1-2 fw-400" for="name">Name</label>
                    <input class="form-input" type="text" id="name" name="name" autocomplete="off" required />
                </div>
                <div class="form-field w-full">
                    <label class="fz-1-2 fw-400" for="price">Price</label>
                    <input class="form-input" type="number" id="price" name="price" autocomplete="off" />
                    <h4 class="form-hint fw-500">* Leave empty if the game is unreleased</h4>
                </div>
                <div class="form-field w-full">
                    <label class="fz-1-2 fw-400" for="rating">Rating</label>
                    <input class="form-input" type="number" id="rating" name="rating" autocomplete="off" />
                    <h4 class="form-hint fw-500">* Leave empty if the game is unreleased</h4>
                </div>
                <div class="column-nowrap gap-1 w-full">
                    <label class="fz-1-2 fw-400" for="file">Photo</label>
                    <input type="file" class="image-input" name="file" required />
                </div>
            </div>
            <div>
                <div class="row-nowrap gap-3 mb-1 selects-wrapper">
                    <SelectEdit categoryArray={data.genresArr} title="Genres" field="genre" />
                    <SelectEdit categoryArray={data.devsArr} title="Developers" field="dev" />
                </div>
                <div>
                    <label class="fz-1-2 fw-400" for="description">Description</label>
                    <textarea id="description" name="description" autocomplete="off" required></textarea>
                </div>
            </div>
        </div>
        <button type="submit" class="btn-outlined-wheatfield br-xs p-0-8" style="width: 84%;"
        >
            Done
        </button>
    </form>
</div>

<style lang="scss">
    @use 'axlothecook-sass-library/sass-library/breakpoints' as bp;

    @include bp.lg-down {
        .main-content-child {
            display: flex;
            flex-direction: column;
        }
    }

    @include bp.sm-down {
        .main-content {
            align-items: initial;
        }
        .main-content h1 {
            text-align: center;
        }
        .selects-wrapper {
            flex-direction: column;
        }
    }

    @include bp.xs-down {
        .main-content h1 {
            font-size: 1.6rem;
        }
    }
</style>