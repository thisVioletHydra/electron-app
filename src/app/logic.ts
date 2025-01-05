import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import Registry from 'winreg';
// import regedit from 'regedit';

const isExist = async (url: string) => fs.stat(url).then(() => true).catch(() => false);

const registryPath = '\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Shell Folders';
const key = 'Personal';

// Функция для чтения значения из реестра
async function readRegistryValue(keyPath: string, valueName: string): Promise<string | null> {
  console.log(`[LOG] valueName`, `<${typeof valueName}>`, valueName);
  console.log(`[LOG] keyPath`, `<${typeof keyPath}>`, keyPath);
  const regKey = new Registry({
    hive: Registry.HKCU,
    key: path.win32.normalize(keyPath),
  });

  return new Promise((resolve, reject) => {
    regKey.values((err, items) => {
      if (err) {
        return reject(err);
      }
      const value = items.find((item) => item.name === valueName)?.value ?? null;
      resolve(value);
    });
  });
}

// Основная функция для чтения значения из реестра
async function readMyKey(registryPath: string, key: string): Promise<string | null> {
  try {
    const value = await readRegistryValue(registryPath, key);
    console.log(`[LOG] value`, `<${typeof value}>`, value);
    if (typeof value !== 'string') {
      throw new TypeError('Regedit is forbidden');
    }

    return value;
  } catch (err) {
    console.error('Error reading registry:', err);

    return null;
  }
}

async function detectPoeFilter() {
  try {
    const platform = os.platform();
    if (platform !== 'win32') {
      throw new Error(`unsupported platform: ${platform}`);
    }
    // Получаем путь к папке "Мои документы"
    const documentsPath = path.join(os.homedir());
    if (!await isExist(documentsPath)) {
      throw new Error('folder my documents not found');
    }

    const myDocumentsPath = await readMyKey(registryPath, key);
    if (typeof myDocumentsPath !== 'string') {
      throw new TypeError(`Regedit is forbidden, get type ${typeof myDocumentsPath}`);
    }

    // Ищем папку "Path of Exile 2"
    const poe2FolderPath = path.join(myDocumentsPath, 'My Games', 'Path of Exile 2');
    if (typeof poe2FolderPath !== 'string') {
      throw new TypeError('Folder \'Path of Exile 2\' not found');
    }

    const folderPoe = await fs.readdir(poe2FolderPath, { withFileTypes: true });
    const myPoeFilter = folderPoe.filter((item) => item.name.startsWith('let_me_in.filter'));
    console.log(`[LOG] myPoeFilter`, `<${typeof myPoeFilter}>`, myPoeFilter);

    const resultFilter = myPoeFilter.length !== 0;

    return { answer: resultFilter, filterPath: path.join(poe2FolderPath, myPoeFilter[0].name) };
  } catch (error) {
    console.log(`[LOG] error`, `<${typeof error}>`, error);

    throw error;
  }
}

async function checkVersionFilter(url: string) {
  const stat = await fs.stat(url);
  console.log(`[LOG] stat`, `<${typeof stat}>`, stat);

  return stat.mtime;
}
export { checkVersionFilter, detectPoeFilter };
