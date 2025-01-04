/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/// <reference types="vite/client" />

import { IpcRendererEvent } from 'electron';

interface global {
  VITE_DEV_SERVER_URL: string
  electron: string
}

declare global {
  var electron: {
    send: (channel: string, data: any) => void
    receive: (channel: string, func: (...args: any[]) => void) => void
    invoke: (channel: string, data: any) => Promise<any>
  };
}
export {};
