<script lang="ts">
    import Searchbar from "./Searchbar.svelte";
    import { getContext } from 'svelte';
    import { page } from '$app/state';
    import type { NavbarLink } from '../../app';
    const links: NavbarLink[] = getContext('navbarData');
    import Logo from "$lib/icons/Logo.svelte";

    const isCurrent = (href: string) =>
        href === '/' ? page.url.pathname === '/' : page.url.pathname.startsWith(href);
</script>


<nav class="desktop-nav nav-width-100">
    <ul class="row-nowrap gap-2 justify-content-space-between p-0-5 pl-1 pr-1 br-lg border-style-solid border-width-1 w-full">
        <div class="row-nowrap align-items-center gap-4">
            {#each links as link (link.id)}
                <li>
                    <a href={link.href} class="drop-underline-effect" class:current={isCurrent(link.href)}>
                        <span class="row-nowrap align-items-center gap-0-3">
                            {#if link.text === 'Home'}
                                <Logo /> {link.text}
                            {:else}
                                {link.text}
                            {/if}
                        </span>
                    </a>
                </li>
            {/each}
        </div>
        <Searchbar />
    </ul>
</nav>

<style lang="scss">
    @use 'axlothecook-sass-library/sass-library/breakpoints' as bp;

    @include bp.md-down {
        .desktop-nav {
            display: none;
        }
    }
</style>
