<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="default-error-page">
    <h1>Uh oh... you have stumbled across an error page</h1>
    <h2><i>Code {page.status || 500}: {page.error?.message ?? 'Something went wrong'}</i></h2>
    <img alt="An animation indicating something went wrong" src="https://images.axlothecook.com/gameshop/basic-page-files/error-gif.gif" />
    <a href="/" class="fw-500 fz-1-5 b">Home</a>
</div>