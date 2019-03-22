function colorThemeSetup() {
  db.find({ name: "colorTheme" }, (err, docs) => {
    if(docs[0].value == "light") {
      let mainStyle = document.createElement("link");
      mainStyle.rel = "stylesheet";
      mainStyle.type = "text/css";
      mainStyle.href = "../CSS/versionWindow-style-light.css";
      document.head.appendChild(mainStyle);
    } else if(docs[0].value == "dark") {
      let mainStyle = document.createElement("link");
      mainStyle.rel = "stylesheet";
      mainStyle.type = "text/css";
      mainStyle.href = "../CSS/versionWindow-style-dark.css";
      document.head.appendChild(mainStyle);
    } else if(docs[0].value == "contrast") {
      let mainStyle = document.createElement("link");
      mainStyle.rel = "stylesheet";
      mainStyle.type = "text/css";
      mainStyle.href = "../CSS/versionWindow-style-contrast.css";
      document.head.appendChild(mainStyle);
    }
  });
}

ipcRenderer.on("colorTheme-mainWindow", (e, colorTheme) => {
  colorThemeSetup();
});

colorThemeSetup();
