const fs = require('fs');

function writeToDataFile(name, titles, title_icons) {
    // Define the data you want to write to the file
    const data = `const name = "${name}"; const titles = ${JSON.stringify(titles)}; const title_icons = ${JSON.stringify(title_icons)};`;

    // Define the file path and folder name
    const folderName = 'website';
    const filePath = `${folderName}/data.js`;

    // Check if the folder exists, and if not, create it
    if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName);
    }

    // Write the data to the file
    fs.writeFileSync(filePath, data);

    console.log(`Data written to ${filePath}`);
}

module.exports = writeToDataFile