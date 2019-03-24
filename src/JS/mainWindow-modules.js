const electron = require("electron");
const os = require("os");
const si = require("systeminformation");
const log = require("electron-log");
const Datastore = require("nedb");

const { ipcRenderer, shell } = electron;

const db = new Datastore({
  filename: "LocalDb/globalDb.db",
  autoload: true
});
