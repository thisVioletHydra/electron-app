/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/// <reference types="vite/client" />

import { IpcRendererEvent } from 'electron';

type ApiInvoke<T extends string = string> = {
  success: boolean
  data: T
};
interface global {
  VITE_DEV_SERVER_URL: string
  electron: string
}

declare global {
  var api: {
    send: (channel: string, data: unknown) => void
    invoke: <T = string>(channel: string) => Promise<ApiInvoke<T>>
    receive: (channel: string, func: (...args: unknown[]) => void) => Electron.IpcRenderer
  };
}
export {};
