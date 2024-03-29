import * as fs from 'fs';
import * as util from 'util'
import { Writable } from 'stream';

const writeFile = util.promisify(fs.writeFile);

class WritableFileStream extends Writable {
  path: string;

  constructor(path: string) {
    super();
    this.path = path;
  }

  _write(chunk: any, encoding: string, next: (error?: Error) => void) {
    writeFile(this.path, chunk)
      .then(() => next())
      .catch((error) => next(error));
  }
}

const readable = fs.createReadStream('./2-stream.ts');
const writable = new WritableFileStream('./2-stream.copy');

readable.pipe(writable);
