import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import process from 'node:process';
import regedit from 'regedit';

const isExist = async (url: string) => fs.stat(url).then(() => true).catch(() => false);

const registryPath = 'HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Shell Folders';
const key = 'Personal';

// Функция для чтения значения из реестра
async function readRegistryValue(path: string, key: string): Promise<string | null> {
  return new Promise((resolve, reject) => {
    regedit.list(path, (err: Error | null, result: any) => {
      if (err) {
        return reject(err);
      }
      const value = result[path].values[key] ? result[path].values[key].value : null;
      resolve(value);
    });
  });
}

// Основная функция для чтения значения из реестра
async function readMyKey(registryPath, key) {
  try {
    const value = await readRegistryValue(registryPath, key);
    if (typeof value !== 'string') {
      throw new TypeError('Regedit is forbidden');
    }

    return value;
  } catch (err) {
    console.error('Ошибка при чтении реестра:', err);
  }
}

async function detectPoeFilter() {
  try {
    const platform = os.platform();
    console.log(`[LOG] platform`, `<${typeof platform}>`, platform);
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
      throw new TypeError('Regedit is forbidden');
    }

    // Ищем папку "Path of Exile 2"

    const poe2FolderPath = path.join(myDocumentsPath, 'My Games', 'Path of Exile 2');
    if (typeof poe2FolderPath !== 'string') {
      throw new TypeError(' Folder \'Path of Exile 2\' not found');
    }

    const folderPoe = await fs.readdir(poe2FolderPath, { withFileTypes: true });
    const myPoeFilter = folderPoe.filter((item) => item.name.startsWith('let_me_in.filter'));
    console.log(`[LOG] myPoeFilter`, `<${typeof myPoeFilter}>`, myPoeFilter);

    const resultFilter = myPoeFilter.length !== 0;

    return resultFilter;
  } catch (error) {
    console.log(`[LOG] error`, `<${typeof error}>`, error);

    return String(error);
  }
}
export { detectPoeFilter };
