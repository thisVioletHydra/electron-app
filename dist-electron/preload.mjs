"use strict";
const electron = require("electron");
const api = {
  send: (channel, data) => electron.ipcRenderer.send(channel, data),
  invoke: async (channel, data) => electron.ipcRenderer.invoke(channel, data),
  receive: (channel, func) => electron.ipcRenderer.on(
    channel,
    (event, ...args) => func(...args)
  )
};
electron.contextBridge.exposeInMainWorld("api", api);
