<script lang="ts">
    import Searchbar from "./Searchbar.svelte";
    import { getContext } from 'svelte';
    const data: Function = getContext('navbarData');
    // console.log('inside: ');
    // console.log(data());
</script>


<nav>
    <ul>
        <div>
            {#each data().navbarLinks as link (link.id)}
                <li>
                    <a href={link.href}>
                        <span>{link.text}</span>
                    </a>
                </li>
            {/each}
        </div>
        <Searchbar />
    </ul>
</nav>