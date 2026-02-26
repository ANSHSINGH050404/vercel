import fs from "fs";
import path from "path";


export const getALLFiles = (folderPath: string): string[] => {
    let result: string[] = [];

    const files = fs.readdirSync(folderPath);

    for (const file of files) {
        const filePath = path.join(folderPath, file);
        if (fs.statSync(filePath).isDirectory()) {
            result = result.concat(getALLFiles(filePath));
        } else {
            result.push(filePath);
        }
    }

    return result;
}