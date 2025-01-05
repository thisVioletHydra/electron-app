// preload.ts
import { contextBridge, ipcRenderer } from 'electron';

// Определите API, который будет доступен в контексте рендеринга
const api = {
  send: (channel: string, data: unknown) => ipcRenderer.send(channel, data),
  invoke: async (channel: string, data: unknown): Promise<unknown> => ipcRenderer.invoke(channel, data),
  receive: (
    channel: string,
    func: (...args: unknown[]) => void,
  ) => ipcRenderer.on(channel, (event, ...args: unknown[]) => func(...args),
  ),
};

// Экспортируем API в контекст рендеринга
contextBridge.exposeInMainWorld('api', api);
