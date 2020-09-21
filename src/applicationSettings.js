import {writable} from 'svelte/store';

//TODO:
export const applicationName = writable("Fate Stunts Worksheet" );

//TODO:
export const sheetName = writable("Stunts Worksheet" );

// TODO: pick a meaningful file extension for 'downloaded' files.
export const fileExtension = writable("fcswks");

//TODO:
export const sheetSuffix = writable("worksheet-data");

//TODO: pick a suitable prefix, by convention it should end in a dash "-"
export const sheetPrefix = writable("fate-stunts-worksheet-");
