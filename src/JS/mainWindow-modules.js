const electron = require("electron");
const si = require("systeminformation");
const log = require("electron-log");
const Datastore = require("nedb");

const { ipcRenderer, shell } = electron;

const db = new Datastore({
  filename: "LocalDb/globalDb.db",
  autoload: true
});
