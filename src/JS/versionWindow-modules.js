const electron = require("electron");
const log = require("electron-log");
const Datastore = require("nedb");

const { ipcRenderer } = electron;

const db = new Datastore({
  filename: "LocalDb/globalDb.db",
  autoload: true
});
