<script lang="ts">
    import Searchbar from "./Searchbar.svelte";
    import { getContext } from 'svelte';
    const data: Function = getContext('navbarData');
    import Logo from "$lib/icons/Logo.svelte";
    // console.log('inside: ');
    // console.log(data());
</script>


<nav>
    <ul>
        <div>
            {#each data().navbarLinks as link (link.id)}
                <li>
                    <a href={link.href}>
                        <span style="display: flex; align-items: center; gap: .3rem;">
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