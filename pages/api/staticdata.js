import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
    const { method, body } = req;
    //Find the absolute path of the json directory
    const jsonDirectory = path.join(process.cwd(), 'data');
    //Read the json data file data.json

    const fileContents = await fs.readFile(jsonDirectory + `${body.query.path}`, 'utf8');
    console.log('body: ',fileContents)
    //Return the content of the data file in json format
    res.status(200).json(fileContents);
}
