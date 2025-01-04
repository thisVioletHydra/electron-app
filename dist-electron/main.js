import path from "node:path";
import process from "node:process";
import { app, BrowserWindow, Menu } from "electron";
async function createWindow() {
  const width = void 0;
  const height = void 0;
  const win = new BrowserWindow({
    title: "Main window",
    titleBarOverlay: false,
    titleBarStyle: "default",
    resizable: false,
    // Запрещает изменение размера окна
    maximizable: false,
    // Запрещает максимизацию окна
    width,
    height,
    maxWidth: width,
    maxHeight: height,
    icon: path.join("public", "icon.png"),
    webPreferences: {
      nodeIntegration: true,
      preload: path.resolve("dist-electron", "preload.mjs"),
      devTools: true
    }
  });
  if (typeof process.env.VITE_DEV_SERVER_URL === "string") {
    await win.loadURL(process.env.VITE_DEV_SERVER_URL);
  } else {
    await win.loadFile(path.join("dist", "index.html"));
  }
  Menu.setApplicationMenu(null);
  win.webContents.on("before-input-event", (event, input) => {
    if (input.control && input.shift && input.key.toLowerCase() === "i") {
      win.webContents.openDevTools();
    }
  });
}
app.whenReady().then(createWindow).catch(console.error);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow().catch(console.error);
  }
});
process.on("message", (msg) => {
  if (msg === "electron-vite&type=hot-reload") {
    for (const win of BrowserWindow.getAllWindows()) {
      win.webContents.reload();
    }
  }
});
