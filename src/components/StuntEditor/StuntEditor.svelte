<style>
    @import "StuntEditor.css";
</style>

<script>
    export let props={};
    export let stunt = {name:"",description:""}
</script>

<div {...props}>
    <input placeholder="Stunt Name" bind:value={stunt.name} />
    <textarea placeholder="Stunt Description" bind:value={stunt.description} />
</div>