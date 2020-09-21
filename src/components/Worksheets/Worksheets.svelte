<style>
    @import "Worksheets.css";
</style>

<script>
    import Worksheet from "../Worksheet/Worksheet.svelte";
    export let worksheet={name:"",pageCount:1,stunts:[{name:"",description:""}]};

</script>

{#each Array(worksheet.pageCount) as _,i}
    <Worksheet bind:worksheet={worksheet} pageIndex={i} />
{/each}
