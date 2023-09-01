const { name, experiences, data, featuredWorks, posts, links, titles, title_icons } = require("./data")

const ejs = require("ejs")
const fs = require("fs")
const writeToDataFile = require("./datawriter")
ejs.renderFile('template.ejs', { titles, experiences, data, featuredWorks, posts, links }, (err, html) => {
    if (err) {
        console.error(err);
        return;
    }
    // Write the rendered HTML to a file or send it as a response
    fs.writeFileSync('website/output.html', html);

    writeToDataFile(name, titles, title_icons)
});