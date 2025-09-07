const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 600,
    height: 700,
    resizable: true
  });
  win.loadFile("snake.html");
}

app.whenReady().then(createWindow);
