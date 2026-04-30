<script lang="ts">
    let { item } = $props();
</script>

<a href="{item.href}">
    <div class="view-links-div" style="background-image: {item.imgPath}">
        <span style="color: {item.txtClr}">{item.text}</span>
    </div>
</a>