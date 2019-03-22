function colorThemeSetup() {
  db.find({ name: "colorTheme" }, (err, docs) => {
    if(docs[0].value == "light") {
      let mainStyle = document.createElement("link");
      let scrollbar = document.createElement("link");
      mainStyle.rel = "stylesheet";
      scrollbar.rel = "stylesheet";
      mainStyle.type = "text/css";
      scrollbar.type = "text/css";
      mainStyle.href = "../CSS/mainWindow-style-light.css";
      scrollbar.href = "../CSS/scrollbar-light.css";
      document.head.appendChild(mainStyle);
      document.head.appendChild(scrollbar);
    } else if(docs[0].value == "dark") {
      let mainStyle = document.createElement("link");
      let scrollbar = document.createElement("link");
      mainStyle.rel = "stylesheet";
      scrollbar.rel = "stylesheet";
      mainStyle.type = "text/css";
      scrollbar.type = "text/css";
      mainStyle.href = "../CSS/mainWindow-style-dark.css";
      scrollbar.href = "../CSS/scrollbar-dark.css";
      document.head.appendChild(mainStyle);
      document.head.appendChild(scrollbar);
    } else if(docs[0].value == "contrast") {
      let mainStyle = document.createElement("link");
      let scrollbar = document.createElement("link");
      mainStyle.rel = "stylesheet";
      scrollbar.rel = "stylesheet";
      mainStyle.type = "text/css";
      scrollbar.type = "text/css";
      mainStyle.href = "../CSS/mainWindow-style-contrast.css";
      scrollbar.href = "../CSS/scrollbar-contrast.css";
      document.head.appendChild(mainStyle);
      document.head.appendChild(scrollbar);
    }
  });
}

ipcRenderer.on("colorTheme-mainWindow", (e, colorTheme) => {
  if(colorTheme == "light") {
    db.update({ name: "colorTheme" }, { $set: { value: "light" }});
  } else if(colorTheme == "dark") {
    db.update({ name: "colorTheme" }, { $set: { value: "dark" }});
  } else if(colorTheme == "contrast") {
    db.update({ name: "colorTheme" }, { $set: { value: "contrast" }});
  }
  colorThemeSetup();
});

colorThemeSetup();
