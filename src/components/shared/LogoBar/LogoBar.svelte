<style>
    @import "LogoBar.css";
</style>

<script>
    import Logo from "./logo.svg"
    import {sheetName} from '../../../applicationSettings'
    let worksheet_name="";
    export let worksheet;
    export let pageIndex=0;
    const unsubscribe = sheetName.subscribe(value => {
        worksheet_name = value;
    });

</script>
<div class="logo-bar">
<div class="logo">
    <Logo height="100%" width="100%"/>
</div>
<h2>{worksheet_name}</h2>
    {#if worksheet.pageCount > 1}
        <h4>Page {pageIndex+1}</h4>
    {/if}
<label for="name-input" >Worksheet Name:
    <input id="name-input" type="text" bind:value={worksheet.name} />
</label>
</div>