ipcRenderer.on("resize-mainWindow", (e, windowSizeWidth, windowSizeHeight) => {
  window.resizeTo(windowSizeWidth, windowSizeHeight);
});
