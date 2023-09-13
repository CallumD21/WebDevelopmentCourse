/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from "qr-image";
import * as fs from 'node:fs';

const questions = [
    {
        type: 'input',
        name: 'qr_url',
        message: "Please enter a URL:",
    }
];

inquirer.prompt(questions).then((answers) => {
    var qrUrl = answers.qr_url;
    var qrImage = qr.image(qrUrl, { type: 'png' });
    qrImage.pipe(fs.createWriteStream('qr_code.png'));

    fs.writeFile('URL.txt', qrUrl, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
});