import XLSX from 'xlsx';
import {updatedImages} from "./assets/updated-images.js";

function writeToExcel(data) {
    // Create a new workbook
    const wb = XLSX.utils.book_new();

    // Create a new worksheet with a name "Data"
    const ws = XLSX.utils.json_to_sheet([]);
    XLSX.utils.book_append_sheet(wb, ws, 'Data');

    data.map(el => [el])
    // Set the cell values in specific columns
    XLSX.utils.sheet_add_aoa(ws, data.map(el => [el]), {origin: 'A1'});

    // Export the workbook to a file
    XLSX.writeFile(wb, 'data.xlsx');
}

writeToExcel(updatedImages);
