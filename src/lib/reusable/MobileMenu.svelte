<script lang="ts">
    import Searchbar from "./Searchbar.svelte";
    import { getContext } from 'svelte';
    import { page } from '$app/state';
    import type { NavbarLink } from '../../app';
    const links: NavbarLink[] = getContext('navbarData');
    import Logo from "$lib/icons/Logo.svelte";
    import MenuIcon from "$lib/icons/menu/MenuIcon.svelte";
    import CloseIcon from "$lib/icons/menu/CloseIcon.svelte";

    let menuOpen = $state(false);

    const isCurrent = (href: string) =>
        href === '/' ? page.url.pathname === '/' : page.url.pathname.startsWith(href);
</script>

<button class="menu-toggle mobile-toggle" aria-label="Open menu" onclick={() => menuOpen = !menuOpen}>
    <MenuIcon />
</button>

<nav class="fullscreen-menu" class:open={menuOpen}>
    <button class="menu-toggle menu-close" aria-label="Close menu" onclick={() => menuOpen = false}>
        <CloseIcon />
    </button>
    {#each links as link (link.id)}
        <a
            href={link.href}
            class="menu-option drop-underline-effect"
            class:current={isCurrent(link.href)}
            onclick={() => menuOpen = false}
        >
            {#if link.text === 'Home'}
                <Logo /> {link.text}
            {:else}
                {link.text}
            {/if}
        </a>
    {/each}
    <Searchbar wide />
</nav>

<style lang="scss">
    @use 'axlothecook-sass-library/sass-library/breakpoints' as bp;

    .mobile-toggle,
    .fullscreen-menu {
        display: none;
    }

    .menu-close {
        align-self: flex-end;
    }

    .menu-option {
        align-self: flex-start;
        font-size: 1.4rem;
    }

    .fullscreen-menu {
        gap: 2rem;
    }

    @include bp.md-down {
        .mobile-toggle {
            display: inline-flex;
            align-self: center;
            margin-top: 1rem;
        }

        .fullscreen-menu {
            display: flex;
        }
    }
</style>
