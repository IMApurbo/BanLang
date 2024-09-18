import * as fs from 'fs';

// Function to read .ban file
function readBanFile(filePath: string): string {
    try {
        return fs.readFileSync(filePath, 'utf-8');
    } catch (error) {
        console.error("❌ File read korte parchi na");
        throw error;
    }
}

// Function to translate Banlang to JavaScript
function translateBanToJS(banCode: string): string {
    let jsCode = banCode;

    // Enforce that the code starts with shuru koro and ends with sesh koro
    if (!jsCode.includes("shuru koro") || !jsCode.includes("sesh koro")) {
        console.error("❌ Program obossoi shuru hobe 'shuru koro' diye ebong sesh korte hobe 'sesh koro' diye ");
        throw new Error("Program must start with 'shuru koro' and end with 'sesh koro'.");
    }
    jsCode = jsCode.replace("shuru koro", "").replace("sesh koro", "");

    // Replace variable declarations
    jsCode = jsCode.replace(/dhoro\s+(.+?)\s*=\s*(.+?);/g, 'let $1 = $2;');

    // Replace print statements (dekhao)
    jsCode = jsCode.replace(/dekhao\s+(.+?);/g, 'console.log($1);');

    // Replace conditionals (jodi) and handle multiple statements
    jsCode = jsCode.replace(/jodi\s+\((.+?)\)\s*{/g, 'if ($1) {');
    jsCode = jsCode.replace(/othoba\s+\((.+?)\)\s*{/g, 'else if ($1) {');
    jsCode = jsCode.replace(/ta na hole\s*{/g, ' else {');

    // Replace loops (jotokkhon na)
    jsCode = jsCode.replace(/jotokkhon na\s+\((.+?)\)\s*{/g, 'while ($1) {');
    jsCode = jsCode.replace(/thamo;/g, 'break;');
    jsCode = jsCode.replace(/chaliye jao;/g, 'continue;');



    // Add starting message for Ban execution
    jsCode = "console.log('Sofol hoyecho 🎉');\n" + jsCode;

    return jsCode;
}

// Function to execute the translated JavaScript
function runJSCode(jsCode: string) {
    try {
        eval(jsCode); // Evaluates the generated JavaScript code
    } catch (error) {
        console.error("❌ Sofol hoyni, Kothao vul ache");
        if (error instanceof Error) {
            console.error("Details:", error.message);
        } else {
            console.error("Details: Unknown error occurred.");
        }
    }
}

// Main function to read and execute the Ban file
function runBanProgram(filePath: string) {
    try {
        const banCode = readBanFile(filePath);
        const jsCode = translateBanToJS(banCode);

        // Output the translated JavaScript code
        console.log('Translated JS Code:\n', jsCode);

        runJSCode(jsCode); // Execute the JS code
    } catch (error) {
        // Error messages will be handled in the respective functions
    }
}

// Command line arguments to pass .ban file
const banFile = process.argv[2];
if (banFile) {
    runBanProgram(banFile);
} else {
    console.log("❌ Akta .ban file dao. Nahole kake run korbo?");
}
