// preload.ts
import { contextBridge, ipcRenderer } from 'electron';
import { detectPoeFilter } from './logic';

// Определите API, который будет доступен в контексте рендеринга
const api = {
  send: (channel: string, data: unknown) => {
    // Отправляем сообщение в основной процесс
    ipcRenderer.send(channel, data);
  },
  receive: (channel: string, func: (...args: unknown[]) => void) => {
    // Подписываемся на сообщения из основного процесса
    /* eslint-disable-next-line ts/no-unsafe-argument */
    ipcRenderer.on(channel, (event, ...args) => func(...args));
  },
  invoke: async (channel: string, data: unknown) => {
    // Отправляем синхронное сообщение в основной процесс и ждем ответа
    await ipcRenderer.invoke(channel, data);
  },
  subscribe: async () => {
    return detectPoeFilter;
  },
  unsubscribe: (channel: string) => {
    // Отписываемся от сообщений из основного процесса
    ipcRenderer.removeAllListeners(channel);
  },
};

// Экспортируем API в контекст рендеринга
contextBridge.exposeInMainWorld('electron', api);
