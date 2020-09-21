<style>
    @import "Worksheet.css";
    @import "../styles/Page.css";
</style>

<script>

    import LogoBar from '../shared/LogoBar';
    import StuntEditor from "../StuntEditor";
    export let pageIndex=0;
    export let worksheet;
</script>

<div class="page" >
    <LogoBar bind:worksheet={worksheet} pageIndex="{pageIndex}"/>
    <div class="flex-column"style="width: 100%;height:90%">
        <div class="flex-row" style="height:100%">
            <StuntEditor bind:stunt={worksheet.stunts[pageIndex*6]} props={{style: "flex-grow:1;flex-shrink:1;width:100%"}}/>
            <StuntEditor bind:stunt={worksheet.stunts[pageIndex*6+1]} props={{style: "flex-grow:1;flex-shrink:1;width:100%"}}/>
        </div>
        <div class="flex-row" style="height:100%">
            <StuntEditor bind:stunt={worksheet.stunts[pageIndex*6+2]} props={{style: "flex-grow:1;flex-shrink:1;width:100%"}}/>
            <StuntEditor bind:stunt={worksheet.stunts[pageIndex*6+3]} props={{style: "flex-grow:1;flex-shrink:1;width:100%"}}/>
        </div>
        <div class="flex-row" style="height:100%">
            <StuntEditor bind:stunt={worksheet.stunts[pageIndex*6+4]} props={{style: "flex-grow:1;flex-shrink:1;width:100%"}}/>
            <StuntEditor bind:stunt={worksheet.stunts[pageIndex*6+5]} props={{style: "flex-grow:1;flex-shrink:1;width:100%"}}/>
        </div>
    </div>
</div>