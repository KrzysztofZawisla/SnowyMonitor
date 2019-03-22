//Importy i biblioteki
const electron = require("electron");
const url = require("url");
const path = require("path");
const Datastore = require("nedb");
const log = require("electron-log");
const update = require("update-electron-app")({
  repo: "KrzysztofZawisla/SnowyMonitor",
  updateInterval: "1 hour"
});

const { app, BrowserWindow, Menu, shell, globalShortcut } = electron;

//Zmienne
const appProperty = {
  mainWindowSizeWidth: 600,
  mainWindowSizeHeight: 400,
  mainWindowIsMaximized: false
};
const db = new Datastore({
  filename: "LocalDb/globalDb.db",
  autoload: true
});
const windows = {
  mainWindow: null,
  versionWindow: null
};
const appMenuTemplate = [
  {
    label: "Plik",
    submenu: [
      {
        label: "Przeładuj aplikacje",
        role: "reload"
      },
      {
        label: "Zrestartuj aplikacje",
        accelerator: process.platform == "darwin" ? "Command+Shift+R" : "Ctrl+Shift+R",
        click() {
          hardReset();
        }
      },
      {
        label: "Wyjdź",
        accelerator: process.platform == "darwin" ? "Command+Q" : "Ctrl+Q",
        role: "quit"
      }
    ]
  },
  {
    label: "Widok",
    submenu: [
      {
        label: "Zmień motyw interfejsu",
        submenu: [
          {
            label: "Jasny",
            click() {
              let colorTheme = "light";
              windows.mainWindow.webContents.send("colorTheme-mainWindow", colorTheme);
              windows.versionWindow != null ? windows.versionWindow.reload() : null;
            }
          },
          {
            label: "Ciemny",
            click() {
              let colorTheme = "dark";
              windows.mainWindow.webContents.send("colorTheme-mainWindow", colorTheme);
              windows.versionWindow != null ? windows.versionWindow.reload() : null;
            }
          },
          {
            label: "Kontrastowy",
            click() {
              let colorTheme = "contrast";
              windows.mainWindow.webContents.send("colorTheme-mainWindow", colorTheme);
              windows.versionWindow != null ? windows.versionWindow.reload() : null;
            }
          }
        ]
      },
      {
        label: "Minimalizuj",
        role: "minimize"
      },
      {
        label: "Maksymalizuj",
        click() {
          windows.mainWindow.maximize();
        }
      },
      {
        label: "Przełącz pełny ekran",
        role: "toggleFullScreen"
      }
    ]
  },
  {
    label: "Autor",
    submenu: [
      {
        label: "Github",
        click() {
          shell.openExternal("https://github.com/KrzysztofZawisla");
        }
      },
      {
        label: "Facebook",
        click() {
          shell.openExternal("https://www.facebook.com/profile.php?id=100006723130084");
        }
      },
      {
        label: "Youtube",
        click() {
          shell.openExternal("https://www.youtube.com/channel/UCQcKXAsp-EPsW_p8Yo5qdEA?view_as=subscriber");
        }
      },
      {
        label: "Instagram",
        click() {
          shell.openExternal("https://www.instagram.com/krzysztof_zawisla/");
        }
      },
      {
        label: "Email",
        click() {
          shell.openExternal("mailto:snowdropcurvemaster@gmail.com");
        }
      }
    ]
  },
  {
    label: "Pomoc",
    submenu: [
      {
        label: "Zgłoś błąd",
        click() {
          shell.openExternal("https://github.com/KrzysztofZawisla/SnowyMonitor/issues");
        }
      },
      {
        label: "Wersja aplikacji",
        click() {
          windows.versionWindow !== null ? windows.versionWindow.close() : null;
          windows.versionWindow !== null ? windows.versionWindow = null : null;
          windows.versionWindow = new BrowserWindow({
            title: "",
            show: false,
            height: 100,
            width: 200,
            resizable: false
          });
          windows.versionWindow.setMenu(null);
          windows.versionWindow.loadURL(url.format({
            pathname: path.join(__dirname, 'Pages/versionWindow.html'),
            protocol: 'file:',
            slashes: true
          }));
          //To debug
          //windows.versionWindow.webContents.openDevTools()
          windows.versionWindow.on("ready-to-show", () => {
            windows.versionWindow.show();
          });
          windows.versionWindow.on("closed", () => {
            windows.versionWindow = null;
          });
        }
      },
      {
        label: "Wyświetl logi",
        click() {
          let pathToAppData = app.getPath("userData");
          shell.openExternal(pathToAppData+"/log.log");
        }
      }
    ]
  }
];

//Funkcje
function menuBuild() {
  const appMenu = Menu.buildFromTemplate(appMenuTemplate);
  Menu.setApplicationMenu(appMenu);
}
function hardReset() {
  app.relaunch();
  app.quit();
}
function mainWindowSizeDb() {
  windows.mainWindow.on("resize", () => {
    let mainWindowSizeFromDb = windows.mainWindow.getSize();
    let mainWindowSizeWidthDb = mainWindowSizeFromDb[0];
    let mainWindowSizeHeightDb = mainWindowSizeFromDb[1];
    let ismainWindowsMaximizedDb = windows.mainWindow.isMaximized();
    const mainWindowSizeDb = {
      name: "mainWindowSize",
      width: mainWindowSizeWidthDb,
      height: mainWindowSizeHeightDb,
      maximized: ismainWindowsMaximizedDb
    };
    db.find({ name: "mainWindowSize" }, (err, docs) => {
      if(docs == "") {
        db.insert(mainWindowSizeDb);
      } else {
        db.update({ name: "mainWindowSize" }, { $set: { width: mainWindowSizeWidthDb, height: mainWindowSizeHeightDb, maximized: ismainWindowsMaximizedDb }});
      }
    });
  });
}

function colorThemeDb() {
  const colorTheme = {
    name: "colorTheme",
    value: "light"
  };
  db.find({ name: "colorTheme" }, (err, docs) => {
    if(docs == "") {
      db.insert(colorTheme);
    }
  });
}

//Czynnośći kiedy aplikacja jest gotowa
app.on("ready", () => {
  db.find({ name: "mainWindowSize" }, (err, docs) => {
    if(docs != "") {
      appProperty.mainWindowSizeWidth = docs[0].width;
      appProperty.mainWindowSizeHeight = docs[0].height;
      appProperty.mainWindowIsMaximized = docs[0].maximized;
    }
  });
  menuBuild();
  colorThemeDb();
  //Dev console shortcut
  /*globalShortcut.register("CommandOrControl+I", () => {
    windows.mainWindow.webContents.openDevTools();
  });*/
  windows.mainWindow = new BrowserWindow({
    title: "SnowyMonitor - informacje o systemie",
    show: false,
    minHeight: 600,
    minWidth: 500
  });
  mainWindowSizeDb();
  windows.mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'Pages/mainWindow.html'),
    protocol: 'file:',
    slashes: true
  }));
  windows.mainWindow.on("ready-to-show", () => {
    if(appProperty.mainWindowIsMaximized === true) {
      windows.mainWindow.maximize();
    } else {
      windows.mainWindow.webContents.send("resize-mainWindow", appProperty.mainWindowSizeWidth, appProperty.mainWindowSizeHeight);
    }
    windows.mainWindow.show();
  });
  windows.mainWindow.on("closed", () => {
    app.quit();
  });
});
