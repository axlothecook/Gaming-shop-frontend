<script lang="ts">
    let { item, additionalText = null, replaceValue = null } = $props();
    // console.log('radio input: ', item, additionalText);
</script>

<input type="radio" id="{item.id}" name="{item.name}" value="{replaceValue ? replaceValue : item.value}" />
<label for="{item.name}">
    <h3>{additionalText ? additionalText : item.text ? item.text : item.value}</h3>
</label>
