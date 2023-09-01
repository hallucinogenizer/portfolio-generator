const { experiences, data, featuredWorks, posts, links } = require("./data")

const ejs = require("ejs")
const fs = require("fs")
ejs.renderFile('template.ejs', { experiences, data, featuredWorks, posts, links }, (err, html) => {
    if (err) {
        console.error(err);
        return;
    }

    // Write the rendered HTML to a file or send it as a response
    fs.writeFileSync('website/output.html', html);
});