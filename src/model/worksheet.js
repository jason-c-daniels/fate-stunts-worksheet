export default function getNewWorksheet() {
    return {
        name: "",
        pageCount:2,
        stunts: [
            {name:"",description:""}
        ]
    };
}

export function validateWorksheet(worksheet) {
    let result = true;
    try {
        // try accessing things in a way that will throw an exception if missing
        let _ = worksheet.name.toString();
        _ = worksheet.stunts.toString();

    } catch (err) {
        console.log(err);
        result = false;
    } finally {
    }
    return result;
}