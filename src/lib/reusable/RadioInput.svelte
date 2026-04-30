<script lang="ts">
    let { item, additionalText = null, replaceValue = null } = $props();
    // console.log('radio input: ', item, additionalText);
</script>
<button class="btn active-radio-btn"  id="{item.id}" name="{item.name}" value="{replaceValue ? replaceValue : item.value}" type="submit">
    <h3>{additionalText ? additionalText : item.text ? item.text : item.value}</h3>
</button>

<!-- <h3>
    <input type="radio" id="{item.id}" name="{item.name}" value="{replaceValue ? replaceValue : item.value}" />
    {additionalText ? additionalText : item.text ? item.text : item.value}
</h3> -->