import fs from 'fs';
import plugin from 'tailwindcss/plugin';
import generator from './generator.js';
import crypto from 'crypto';

export default plugin.withOptions(({ path = 'safelist.txt', patterns = [] }) => ({ theme }) => {
    const safeList = generator(theme)(patterns).join('\n');
    const currentSafeList = fs.readFileSync(path).toString();

    const hash = crypto.createHash('md5').update(JSON.stringify(safeList)).digest('hex');
    const prevHash = crypto.createHash('md5').update(JSON.stringify(currentSafeList)).digest('hex');

    if (hash !== prevHash) {
        fs.writeFileSync(path, safeList);
    }
});
