const fs = require('fs');
const { exec } = require('child_process')


function projectNext(options) {
    // fs.readFileSync('./project_gen.sh')
    exec("git init", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    })
    exec("mkdir scripts/ middlewares/ config/ controllers/ env/ utils/ models/ routes/ test/", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    })
}
module.exports = projectNext