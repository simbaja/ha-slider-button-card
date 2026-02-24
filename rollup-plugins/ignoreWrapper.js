import ignore from "./ignore.js";
import { ignoreSwitchFiles } from '../elements/ignore/switch.js';
import { ignoreTextfieldFiles } from '../elements/ignore/textfield.js';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

export default function ignoreWrapper() {
    return ignore({
        files: [
          ...ignoreSwitchFiles,
          ...ignoreTextfieldFiles,
        ].map((file) => require.resolve(file)),
      })
}