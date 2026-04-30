<script lang="ts">
	import { page } from '$app/state';
    import errorGIF from '$lib/assets/errorGIF.gif';
    import '../styles/error-page.css';
</script>

<div class="content">
    <div class="error-page">
        <h1>Uh oh... you have stumbled across an error page</h1>
        <h2><i>Code {page.status || 500}: {page.error.message}</i></h2>
        <img alt="The project logo" src={errorGIF} />
        <a href="/" class="btn">Home</a>
    </div>
</div>