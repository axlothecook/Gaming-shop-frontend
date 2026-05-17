<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="default-error-page">
    <h1>Uh oh... you have stumbled across an error page</h1>
    <h2><i>Code {page.status || 500}: {page.error?.message ?? 'Something went wrong'}</i></h2>
    <img alt="The project logo" src="https://qyuaermixhugwrlhhvkr.supabase.co/storage/v1/object/public/basic-page-files/errorGIF.gif" />
    <a href="/" class="fw-500 fz-1-5 b">Home</a>
</div>