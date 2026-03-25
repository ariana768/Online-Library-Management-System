import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronApi", {
  send: (channel, data) => {
    const validChannels = [];
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },
  on: (channel, callback) => {
    const validChannels = [];
    if (validChannels.includes(channel)) {
      ipcRenderer.on(channel, (event, ...args) => callback(...args));
    }
  }
});
