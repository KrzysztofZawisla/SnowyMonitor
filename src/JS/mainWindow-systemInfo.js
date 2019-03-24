const sysInfoAll = document.querySelectorAll(".sysInfoDiv");
const batteryExt = document.querySelectorAll(".batteryExt");

sysInfoAll.forEach((sysInfo) => {
  sysInfo.children[0].addEventListener("click", sysInfoClicked);
});

const states = {
  generalSectionState: false,
  biosSectionState: false,
  motherboardSectionState: false,
  cpuSectionState: false,
  ramSectionState: false,
  batterySectionState: false,
  graphicSectionState: false,
  displaySectionState: false,
  osSectionState: false,
  versionsSectionState: false,
  networkSectionState: false,
  disksSectionState: false
};

const systemInfoSpans = {
  libVersion: document.getElementById("sysInfoGeneralLibVersion"),
  timezone: document.getElementById("sysInfoGeneralTimezone"),
  timezoneName: document.getElementById("sysInfoGeneralTimezoneName"),
  systemManufacturer: document.getElementById("sysInfoSystemManufacturer"),
  systemModel: document.getElementById("sysInfoSystemModel"),
  systemVersion: document.getElementById("sysInfoSystemVersion"),
  systemSerial: document.getElementById("sysInfoSystemSerial"),
  systemUUID: document.getElementById("sysInfoSystemUUID"),
  systemSKU: document.getElementById("sysInfoSystemSKU"),
  systemHomedir: document.getElementById("sysInfoSystemHomedir"),
  systemTmpDir: document.getElementById("sysInfoSystemTmpDir"),
  chassistType: document.getElementById("sysInfoChassistType"),
  biosVendor: document.getElementById("sysInfoBiosVendor"),
  biosVersion: document.getElementById("sysInfoBiosVersion"),
  biosReleaseDate: document.getElementById("sysInfoBiosReleaseDate"),
  biosRevision: document.getElementById("sysInfoBiosRevision"),
  motherboardManufacturer: document.getElementById("sysInfoMotherboardManufacturer"),
  motherboardModel: document.getElementById("sysInfoMotherboardModel"),
  motherboardVersion: document.getElementById("sysInfoMotherboardVersion"),
  motherboardSerial: document.getElementById("sysInfoMotherboardSerial"),
  motherboardAssetTag: document.getElementById("sysInfoMotherboardAssetTag"),
  cpuManufacturer: document.getElementById("sysInfoCPUManufacturer"),
  cpuBrand: document.getElementById("sysInfoCPUBrand"),
  cpuSpeed: document.getElementById("sysInfoCPUSpeed"),
  cpuMaxSpeed: document.getElementById("sysInfoCPUMaxSpeed"),
  cpuMinSpeed: document.getElementById("sysInfoCPUMinSpeed"),
  cpuCores: document.getElementById("sysInfoCPUCores"),
  cpuThreads: document.getElementById("sysInfoCPUThreads"),
  cpuProcessors: document.getElementById("sysInfoCPUProcessors"),
  cpuSocket: document.getElementById("sysInfoCPUSocket"),
  cpuVendor: document.getElementById("sysInfoCPUVendor"),
  cpuFamily: document.getElementById("sysInfoCPUFamily"),
  cpuModel: document.getElementById("sysInfoCPUModel"),
  cpuStepping: document.getElementById("sysInfoCPUStepping"),
  cpuRevision: document.getElementById("sysInfoCPURevision"),
  cpuVoltage: document.getElementById("sysInfoCPUVoltage"),
  cpuCacheL3: document.getElementById("sysInfoCPUCacheL3"),
  cpuCacheL2: document.getElementById("sysInfoCPUCacheL2"),
  cpuCacheL1Data: document.getElementById("sysInfoCPUCacheL1Data"),
  cpuCacheL1Intruction: document.getElementById("sysInfoCPUCacheL1Instruction"),
  cpuTemperature: document.getElementById("sysInfoCPUTemperature"),
  cpuLoad: document.getElementById("sysInfoCPULoad"),
  memoryTotal: document.getElementById("sysInfoMemoryTotal"),
  memoryFree: document.getElementById("sysInfoMemoryFree"),
  memoryUsed: document.getElementById("sysInfoMemoryUsed"),
  memorySWAPTotal: document.getElementById("sysInfoMemorySWAPTotal"),
  memorySWAPUsed: document.getElementById("sysInfoMemorySWAPUsed"),
  memorySWAPFree: document.getElementById("sysInfoMemorySWAPFree"),
  batteryPowerConnected: document.getElementById("sysInfoBatteryPowerConnected"),
  batteryHasBattery: document.getElementById("sysInfoBatteryHasBattery"),
  batteryCycleCount: document.getElementById("sysInfoBatteryCycleCount"),
  batteryIsCharging: document.getElementById("sysInfoBatteryIsCharging"),
  batteryMaxCapacity: document.getElementById("sysInfoBatterMaxCapacity"),
  batteryCurrentCapacity: document.getElementById("sysInfoBatteryCurrentCapacity"),
  batteryPercent: document.getElementById("sysInfoBatteryPercent"),
  batteryTimeLeft: document.getElementById("sysInfoBatteryTimeLeft"),
  batteryType: document.getElementById("sysInfoBatteryType"),
  batteryModel: document.getElementById("sysInfoBatteryModel"),
  batteryManufacturer: document.getElementById("sysInfoBatteryManufacturer"),
  batterySerial: document.getElementById("sysInfoBatterySerial"),
  graphicModel: document.getElementById("sysInfoGraphicModel"),
  graphicVendor: document.getElementById("sysInfoGraphicVendor"),
  graphicBus: document.getElementById("sysInfoGraphicBus"),
  graphicVRAM: document.getElementById("sysInfoGraphicVRAM"),
  graphicVRAMDynamic: document.getElementById("sysInfoGraphicVRAMDynamic"),
  displayModel: document.getElementById("sysInfoDisplayModel"),
  displayBuiltIn: document.getElementById("sysInfoDisplayBuiltIn"),
  displayConnection: document.getElementById("sysInfoDisplayConnection"),
  displayResolutionX: document.getElementById("sysInfoDisplayResolutionX"),
  displayResolutionY: document.getElementById("sysInfoDisplayResolutionY"),
  displayColorDepth: document.getElementById("sysInfoDisplayColorDepth"),
  osDistro: document.getElementById("sysInfoOSDistro"),
  osArch: document.getElementById("sysInfoOSArch"),
  osHostname: document.getElementById("sysInfoOSHostname"),
  osBuild: document.getElementById("sysInfoOSBuild"),
  osSerial: document.getElementById("sysInfoOSSerial"),
  osRelease: document.getElementById("sysInfoOSRelease"),
  osCodePage: document.getElementById("sysInfoOSCodePage"),
  osCodeName: document.getElementById("sysInfoOSCodeName"),
  osUUID: document.getElementById("sysInfoOSUUID"),
  versionNodeJS: document.getElementById("sysInfoVersionNodeJS"),
  versionV8: document.getElementById("sysInfoVersionV8"),
  versionPerl: document.getElementById("sysInfoVersionPerl"),
  versionDocker: document.getElementById("sysInfoVersionDocker"),
  versionJava: document.getElementById("sysInfoVersionJava"),
  versionPython: document.getElementById("sysInfoVersionPython"),
  versionGit: document.getElementById("sysInfoVersionGit"),
  versionYarn: document.getElementById("sysInfoVersionYarn"),
  versionTypeScript: document.getElementById("sysInfoTypeScript")
};

function sysInfoClicked(e) {
  e.currentTarget.parentElement.children[1].style.display = e.currentTarget.parentElement.children[1].style.display == "block" ? "none" : "block";
  e.currentTarget.children[1].innerHTML = e.currentTarget.children[1].innerHTML == '<i class="fas fa-plus"></i>' ? '<i class="fas fa-minus"></i>' : '<i class="fas fa-plus"></i>';
  if(e.currentTarget.parentElement.children[1].id == "general") {
    if(states.generalSectionState === false) {
      states.generalSectionState = true;
      generalInformationCollect();
    }
  } else if(e.currentTarget.parentElement.children[1].id == "bios") {
    if(states.biosSectionState === false) {
      states.biosSectionState = true;
      biosInformationCollect();
    }
  } else if(e.currentTarget.parentElement.children[1].id == "motherboard") {
    if(states.motherboardSectionState === false) {
      states.motherboardSectionState = true;
      motherboardInformationCollect();
    }
  } else if(e.currentTarget.parentElement.children[1].id == "cpu") {
    if(states.cpuSectionState === false) {
      states.cpuSectionState = true;
      cpuInformationCollect();
      refreshCPUTemp();
      refreshCPUUsage();
    }
  } else if(e.currentTarget.parentElement.children[1].id == "ram") {
    if(states.ramSectionState === false) {
      states.ramSectionState = true;
      ramInformationCollect(e);
      refreshMemoryInformation();
    }
  } else if(e.currentTarget.parentElement.children[1].id == "battery") {
    if(states.batterySectionState === false) {
      states.batterySectionState = true;
      batteryInformationCollect();
    }
  } else if(e.currentTarget.parentElement.children[1].id == "graphic") {
    if(states.graphicSectionState === false) {
      states.graphicSectionState = true;
      graphicInformationCollect();
    }
  } else if(e.currentTarget.parentElement.children[1].id == "display") {
    if(states.displaySectionState === false) {
      states.displaySectionState = true;
      displayInformationCollect();
    }
  } else if(e.currentTarget.parentElement.children[1].id == "os") {
    if(states.osSectionState === false) {
      states.osSectionState = true;
      osInformationCollect();
    }
  } else if(e.currentTarget.parentElement.children[1].id == "versions") {
    if(states.versionsSectionState === false) {
      states.versionsSectionState = true;
      versionsInformationCollect();
    }
  } else if(e.currentTarget.parentElement.children[1].id == "network") {
    if(states.networkSectionState === false) {
      states.networkSectionState = true;
      networkInformationCollect(e);
    }
  } else if(e.currentTarget.parentElement.children[1].id == "disks") {
    if(states.disksSectionState === false) {
      states.disksSectionState = true;
      disksInformationCollect(e);
    }
  }
}

function refreshMemoryInformation() {
  si.mem().then((data) => {
    let memoryFree = data.free/1024/1024/1024;
    systemInfoSpans.memoryFree.innerHTML = data.free != "" ? memoryFree.toFixed(3)+" GB" : "Nieoczekiwany błąd";
    let memoryUsed = data.used/1024/1024/1024;
    systemInfoSpans.memoryUsed.innerHTML = data.used != "" ? memoryUsed.toFixed(3)+" GB" : "Nieoczekiwany błąd";
    let memorySWAPFree = data.swapfree/1024/1024/1024;
    systemInfoSpans.memorySWAPFree.innerHTML = data.swapfree != "" ? memorySWAPFree.toFixed(3)+" GB" : "Nieoczekiwany błąd";
    setTimeout(refreshMemoryInformation, 1000);
  });
}

function refreshCPUTemp() {
  si.cpuTemperature().then((data) => {
    systemInfoSpans.cpuTemperature.innerHTML = data.main != "" ? data.main+" °C" : "Nieoczekiwany błąd";
    setTimeout(refreshCPUTemp, 1000);
  });
}

function refreshCPUUsage() {
  si.currentLoad().then((data) => {
    let cpuLoadToFixed = data.currentload;
    systemInfoSpans.cpuLoad.innerHTML = data.currentload !== "" ? cpuLoadToFixed.toFixed(1)+" %" : "Nieoczekiwany błąd";
    setTimeout(refreshCPUUsage, 1000);
  });
}

function generalInformationCollect() {
  systemInfoSpans.libVersion.innerHTML = si.version() != "" ? si.version() : "Nieoczekiwany błąd";
  systemInfoSpans.timezone.innerHTML = si.time().timezone != "" ? si.time().timezone : "Nieoczekiwany błąd";
  systemInfoSpans.timezoneName.innerHTML = si.time().timezoneName != "" ? si.time().timezoneName : "Nieoczekiwany błąd";
  si.system().then((data) => {
    systemInfoSpans.systemManufacturer.innerHTML = data.manufacturer != "" ? data.manufacturer : "Nieoczekiwany błąd";
    systemInfoSpans.systemModel.innerHTML = data.model != "" ? data.model : "Nieoczekiwany błąd";
    systemInfoSpans.systemVersion.innerHTML = data.version != "" ? data.version : "Nieoczekiwany błąd";
    systemInfoSpans.systemSerial.innerHTML = data.serial != "" ? data.serial : "Nieoczekiwany błąd";
    systemInfoSpans.systemUUID.innerHTML = data.uuid != "" ? data.uuid : "Nieoczekiwany błąd";
    systemInfoSpans.systemSKU.innerHTML = data.sku != "" ? data.sku : "Nieoczekiwany błąd";
  });
  si.chassis().then((data) => {
    systemInfoSpans.chassistType.innerHTML = data.type != "" ? data.type : "Nieoczekiwany błąd";
  });
  systemInfoSpans.systemHomedir.innerHTML = os.homedir() != "" ? os.homedir() : "Nieoczekiwany błąd";
  systemInfoSpans.systemTmpDir.innerHTML = os.tmpdir() != "" ? os.tmpdir() : "Nieoczekiwany błąd";
}

function biosInformationCollect() {
  si.bios().then((data) => {
    systemInfoSpans.biosVendor.innerHTML = data.vendor != "" ? data.vendor : "Nieoczekiwany błąd";
    systemInfoSpans.biosVersion.innerHTML = data.version != "" ? data.version : "Nieoczekiwany błąd";
    systemInfoSpans.biosReleaseDate.innerHTML = data.releaseDate != "" ? data.releaseDate : "Nieoczekiwany błąd";
    systemInfoSpans.biosRevision.innerHTML = data.revision != "" ? data.revision : "Nieoczekiwany błąd";
  });
}

function motherboardInformationCollect() {
  si.baseboard().then((data) => {
    systemInfoSpans.motherboardManufacturer.innerHTML = data.manufacturer != "" ? data.manufacturer : "Nieoczekiwany błąd";
    systemInfoSpans.motherboardModel.innerHTML = data.model != "" ? data.model : "Nieoczekiwany błąd";
    systemInfoSpans.motherboardVersion.innerHTML = data.version != "" ? data.version : "Nieoczekiwany błąd";
    systemInfoSpans.motherboardSerial.innerHTML = data.serial != "" ? data.serial : "Nieoczekiwany błąd";
    systemInfoSpans.motherboardAssetTag.innerHTML = data.assetTag != "" ? data.assetTag : "Nieoczekiwany błąd";
  });
}

function cpuInformationCollect() {
  si.cpu().then((data) => {
    systemInfoSpans.cpuProcessors.innerHTML = data.processors != "" ? data.processors : "Nieoczekiwany błąd";
    systemInfoSpans.cpuManufacturer.innerHTML = data.manufacturer != "" ? data.manufacturer : "Nieoczekiwany błąd";
    if(data.manufacturer == "Intel®") {
      systemInfoSpans.cpuManufacturer.style.color = "#0071c5";
      systemInfoSpans.cpuBrand.style.color = "#0071c5";
    } else if(data.manufacturer == "AMD") {
      systemInfoSpans.cpuManufacturer.style.color = "#ed1c24";
      systemInfoSpans.cpuBrand.style.color = "#ed1c24";
    }
    systemInfoSpans.cpuBrand.innerHTML = data.brand != "" ? data.brand : "Nieoczekiwany błąd";
    systemInfoSpans.cpuSpeed.innerHTML = data.speed != "" ? data.speed+" GHz" : "Nieoczekiwany błąd";
    systemInfoSpans.cpuMaxSpeed.innerHTML = data.speedmax != "" ? data.speedmax+" GHz" : "Nieoczekiwany błąd";
    systemInfoSpans.cpuMinSpeed.innerHTML = data.speedmin != "" ? data.speedmin+" GHz" : "Nieoczekiwany błąd";
    systemInfoSpans.cpuCores.innerHTML = data.physicalCores != "" ? data.physicalCores : "Nieoczekiwany błąd";
    systemInfoSpans.cpuThreads.innerHTML = data.cores != "" ? data.cores : "Nieoczekiwany błąd";
    systemInfoSpans.cpuSocket.innerHTML = data.socket != "" ? data.socket : "Nieoczekiwany błąd";
    systemInfoSpans.cpuVendor.innerHTML = data.vendor != "" ? data.vendor : "Nieoczekiwany błąd";
    systemInfoSpans.cpuFamily.innerHTML = data.family != "" ? data.family : "Nieoczekiwany błąd";
    systemInfoSpans.cpuModel.innerHTML = data.model != "" ? data.model : "Nieoczekiwany błąd";
    systemInfoSpans.cpuStepping.innerHTML = data.stepping != "" ? data.stepping : "Nieoczekiwany błąd";
    systemInfoSpans.cpuRevision.innerHTML = data.revision != "" ? data.revision : "Nieoczekiwany błąd";
    systemInfoSpans.cpuVoltage.innerHTML = data.voltage != "" ? data.voltage : "Nieoczekiwany błąd";
    systemInfoSpans.cpuCacheL3.innerHTML = data.cache.l3 != "" ? data.cache.l3/1024/1024+" MB" : "Nieoczekiwany błąd";
    systemInfoSpans.cpuCacheL2.innerHTML = data.cache.l2 != "" ? data.cache.l2/1024/1024+" MB" : "Nieoczekiwany błąd";
    systemInfoSpans.cpuCacheL1Data.innerHTML = data.cache.l1d != "" ? data.cache.l1d/1024+" KB" : "Nieoczekiwany błąd";
    systemInfoSpans.cpuCacheL1Intruction.innerHTML = data.cache.l1i != "" ? data.cache.l1i/1024+" KB" : "Nieoczekiwany błąd";
  });
  si.cpuTemperature().then((data) => {
    systemInfoSpans.cpuTemperature.innerHTML = data.main != "" ? data.main+" °C" : "Nieoczekiwany błąd";
  });
  si.currentLoad().then((data) => {
    let cpuLoadToFixed = data.currentload;
    systemInfoSpans.cpuLoad.innerHTML = data.currentload !== "" ? cpuLoadToFixed.toFixed(1)+" %" : "Nieoczekiwany błąd";
  });
}

function ramInformationCollect(e) {
  si.mem().then((data) => {
    let memoryTotal = data.total/1024/1024/1024;
    let memoryFree = data.free/1024/1024/1024;
    let memoryUsed = data.used/1024/1024/1024;
    let memorySWAPTotal = data.swaptotal/1024/1024/1024;
    let memorySWAPUsed = data.swapused/1024/1024/1024;
    let memorySWAPFree = data.swapfree/1024/1024/1024;
    systemInfoSpans.memoryTotal.innerHTML = data.total != "" ? memoryTotal.toFixed(3)+" GB" : "Nieoczekiwany błąd";
    systemInfoSpans.memoryFree.innerHTML = data.free != "" ? memoryFree.toFixed(3)+" GB" : "Nieoczekiwany błąd";
    systemInfoSpans.memoryUsed.innerHTML = data.used != "" ? memoryUsed.toFixed(3)+" GB" : "Nieoczekiwany błąd";
    systemInfoSpans.memorySWAPTotal.innerHTML = data.swaptotal != "" ? memorySWAPTotal.toFixed(3)+" GB" : "Nieoczekiwany błąd";
    systemInfoSpans.memorySWAPUsed.innerHTML = data.swapused != "" ? memorySWAPUsed.toFixed(3)+" GB" : "Nieoczekiwany błąd";
    systemInfoSpans.memorySWAPFree.innerHTML = data.swapfree != "" ? memorySWAPFree.toFixed(3)+" GB" : "Nieoczekiwany błąd";
  });
  let argumentE = e.currentTarget;
  si.memLayout().then((data) => {
    if(data.length != 0) {
      for(let i = 0; i<data.length; i++) {
        let iToFix = i+1;
        let slotInfoDiv = document.createElement("div");
        let memoryClockSpeedDiv = document.createElement("div");
        let memoryManufacturerDiv = document.createElement("div");
        let memoryTypeDiv = document.createElement("div");
        let memorySizeDiv = document.createElement("div");
        let memorySerialDiv = document.createElement("div");
        let memoryPartNumDiv = document.createElement("div");
        let memorySlotDiv = document.createElement("div");
        let memoryVoltageDiv = document.createElement("div");
        let memoryBankDiv = document.createElement("div");
        let memoryClockSpeedValue = data[i].clockSpeed != "" ? data[i].clockSpeed+" MHz" : "Nieoczekiwany błąd";
        let memoryManufacturerValue = data[i].manufacturer != "" ? data[i].manufacturer : "Nieoczekiwany błąd";
        let memoryTypeValue = data[i].type != "" ? data[i].type : "Nieoczekiwany błąd";
        let memorySizeToFixed = data[i].size/1024/1024/1024;
        let memorySizeValue = data[i].size != "" ? memorySizeToFixed.toFixed(3)+" GB" : "Nieoczekiwany błąd";
        let memorySerialValue = data[i].serialNum != "" ? data[i].serialNum : "Nieoczekiwany błąd";
        let memoryPartNumValue = data[i].partNum != "" ? data[i].partNum : "Nieoczekiwany błąd";
        let memorySlotValue = data[i].formFactor != "" ? data[i].formFactor : "Nieoczekiwany błąd";
        let memoryVoltageValue = data[i].voltageConfigured != "" ? data[i].voltageConfigured : "Nieoczekiwany błąd";
        let memoryBankValue = data[i].bank != "" ? data[i].bank : "Nieoczekiwany błąd";
        slotInfoDiv.className = "sysInfoSlotInfo";
        memoryClockSpeedDiv.className = "sysInfoOneInfo";
        memoryManufacturerDiv.className = "sysInfoOneInfo";
        memoryTypeDiv.className = "sysInfoOneInfo";
        memorySizeDiv.className = "sysInfoOneInfo";
        memorySerialDiv.className = "sysInfoOneInfo";
        memoryPartNumDiv.className = "sysInfoOneInfo";
        memorySlotDiv.className = "sysInfoOneInfo";
        memoryVoltageDiv.className = "sysInfoOneInfo";
        memoryBankDiv.className = "sysInfoOneInfo";
        slotInfoDiv.innerHTML = "Informacje o module pamięci nr. "+iToFix;
        memoryClockSpeedDiv.innerHTML = "Prędkość modułu pamięci RAM: "+memoryClockSpeedValue;
        memoryManufacturerDiv.innerHTML = "Producent modułu pamięci RAM: "+memoryManufacturerValue;
        memoryTypeDiv.innerHTML = "Typ modułu pamięci RAM: "+memoryTypeValue;
        memorySizeDiv.innerHTML = "Pojemność modułu pamięci RAM: "+memorySizeValue;
        memorySerialDiv.innerHTML = "Numer seryjny modułu pamięci RAM: "+memorySerialValue;
        memoryPartNumDiv.innerHTML = "Numer części modułu pamięci RAM: "+memoryPartNumValue;
        memorySlotDiv.innerHTML = "Slot modułu pamięci RAM: "+memorySlotValue;
        memoryVoltageDiv.innerHTML = "Napięcie modułu pamięci RAM: "+memoryVoltageValue;
        memoryBankDiv.innerHTML = "Bank modułu pamięci RAM: "+memoryBankValue;
        argumentE.parentElement.children[1].appendChild(slotInfoDiv);
        argumentE.parentElement.children[1].appendChild(memoryClockSpeedDiv);
        argumentE.parentElement.children[1].appendChild(memoryManufacturerDiv);
        argumentE.parentElement.children[1].appendChild(memoryTypeDiv);
        argumentE.parentElement.children[1].appendChild(memorySizeDiv);
        argumentE.parentElement.children[1].appendChild(memorySerialDiv);
        argumentE.parentElement.children[1].appendChild(memoryPartNumDiv);
        argumentE.parentElement.children[1].appendChild(memorySlotDiv);
        argumentE.parentElement.children[1].appendChild(memoryVoltageDiv);
        argumentE.parentElement.children[1].appendChild(memoryBankDiv);
      }
    }
  })

}

function batteryInformationCollect() {
  si.battery().then((data) => {
    let powerResourceConnected;
    let computerHaveBattery;
    if(data.acconnected == true) {
      powerResourceConnected = "tak";
    } else {
      powerResourceConnected = "nie";
    }
    if(data.battery === true) {
      computerHaveBattery = "tak";
    } else {
      computerHaveBattery = "nie";
    }
    systemInfoSpans.batteryPowerConnected.innerHTML = data.acconnected !== "" ? powerResourceConnected : "Nieoczekiwany błąd";
    systemInfoSpans.batteryHasBattery.innerHTML = data.hasbattery !== "" ? computerHaveBattery : "Nieoczekiwany błąd";
    if(computerHaveBattery == "tak") {
      batteryExt.forEach((batteryExtDiv) => {
        batteryExtDiv.style.display = "block";
      });
      let batteryIsCharging;
      if(data.ischarging == true) {
        batteryIsCharging = "tak";
      } else {
        batteryIsCharging = "nie";
      }
      systemInfoSpans.batteryCycleCount.innerHTML = data.cyclecount !== "" ? data.cyclecount : "Nieoczekiwany błąd";
      systemInfoSpans.batteryIsCharging.innerHTML = data.ischarging !== "" ? batteryIsCharging : "Nieoczekiwany błąd";
      systemInfoSpans.batteryMaxCapacity.innerHTML = data.maxcapacity !== "" ? data.maxcapacity+" mAh" : "Nieoczekiwany błąd";
      systemInfoSpans.batteryCurrentCapacity.innerHTML = data.currentcapacity !== "" ? data.currentcapacity+" mAh" : "Nieoczekiwany błąd";
      systemInfoSpans.batteryPercent.innerHTML = data.percent !== "" ? data.percent+"%" : "Nieoczekiwany błąd";
      systemInfoSpans.batteryTimeLeft.innerHTML = data.timeremaining !== "" ? data.timeremaining+" minut" : "Nieoczekiwany błąd";
      systemInfoSpans.batteryType.innerHTML = data.type != "" ? data.type : "Nieoczekiwany błąd";
      systemInfoSpans.batteryModel.innerHTML = data.model != "" ? data.model : "Nieoczekiwany błąd";
      systemInfoSpans.batteryManufacturer.innerHTML = data.manufacturer != "" ? data.manufacturer : "Nieoczekiwany błąd";
      systemInfoSpans.batterySerial.innerHTML = data.serial != "" ? data.serial : "Nieoczekiwany błąd";
    }
  });
}

function graphicInformationCollect() {
  si.graphics().then((data) => {
    systemInfoSpans.graphicModel.innerHTML = data.controllers[0].model != "" ? data.controllers[0].model : "Nieoczekiwany błąd";
    systemInfoSpans.graphicVendor.innerHTML = data.controllers[0].vendor != "" ? data.controllers[0].vendor : "Nieoczekiwany błąd";
    if(data.controllers[0].vendor == "NVIDIA") {
      systemInfoSpans.graphicModel.style.color = "#76b900"
      systemInfoSpans.graphicVendor.style.color = "#76b900"
    } else if (data.controllers[0].vendor == "AMD") {
      systemInfoSpans.graphicModel.style.color = "#ed1c24"
      systemInfoSpans.graphicVendor.style.color = "#ed1c24"
    } else if (data.controllers[0].vendor == "Intel Corporation") {
      systemInfoSpans.graphicModel.style.color = "#0071c5"
      systemInfoSpans.graphicVendor.style.color = "#0071c5"
    }
    systemInfoSpans.graphicBus.innerHTML = data.controllers[0].bus != "" ? data.controllers[0].bus : "Nieoczekiwany błąd";
    let graphicVRAMToFix = data.controllers[0].vram/1024
    systemInfoSpans.graphicVRAM.innerHTML = data.controllers[0].vram != "" ? graphicVRAMToFix.toFixed(3)+" GB" : "Nieoczekiwany błąd";
    let dynamicVRAM;
    if(data.controllers[0].vramDynamic == true) {
      dynamicVRAM = "tak"
    } else {
      dynamicVRAM = "nie"
    }
    systemInfoSpans.graphicVRAMDynamic.innerHTML = data.controllers[0].vramDynamic !== "" ? dynamicVRAM : "Nieoczekiwany błąd";
  });
}

function displayInformationCollect() {
  si.graphics().then((data) => {
    let displayModel = data.displays[0].model;
    let displayModelFix = displayModel.replace("�", "ó");
    systemInfoSpans.displayModel.innerHTML = data.displays[0].model != "" ? displayModelFix : "Nieoczekiwany błąd";
    let builtIn;
    if(data.displays[0].builtin == true) {
      builtIn = "tak";
    } else {
      builtIn = "nie";
    }
    systemInfoSpans.displayBuiltIn.innerHTML = data.displays[0].builtin !== "" ? builtIn : "Nieoczekiwany błąd";
    systemInfoSpans.displayConnection.innerHTML = data.displays[0].connection != "" ? data.displays[0].connection : "Nieoczekiwany błąd";
    systemInfoSpans.displayResolutionX.innerHTML = data.displays[0].resolutionx != "" ? data.displays[0].resolutionx+" pikseli" : "Nieoczekiwany błąd";
    systemInfoSpans.displayResolutionY.innerHTML = data.displays[0].resolutiony != "" ? data.displays[0].resolutiony+" pikseli" : "Nieoczekiwany błąd";
    systemInfoSpans.displayColorDepth.innerHTML = data.displays[0].pixeldepth != ("" || undefined) ? data.displays[0].pixeldepth+" bitowa" : "Nieoczekiwany błąd";
  });
}

function osInformationCollect() {
  si.osInfo().then((data) => {
    systemInfoSpans.osDistro.innerHTML = data.distro != "" ? data.distro : "Nieoczekiwany błąd";
    systemInfoSpans.osArch.innerHTML = data.arch != "" ? data.arch : "Nieoczekiwany błąd";
    systemInfoSpans.osHostname.innerHTML = data.hostname != "" ? data.hostname : "Nieoczekiwany błąd";
    systemInfoSpans.osBuild.innerHTML = data.build != "" ? data.build : "Nieoczekiwany błąd";
    systemInfoSpans.osSerial.innerHTML = data.serial != "" ? data.serial : "Nieoczekiwany błąd";
    systemInfoSpans.osRelease.innerHTML = data.release != "" ? data.release : "Nieoczekiwany błąd";
    systemInfoSpans.osCodePage.innerHTML = data.codepage != "" ? data.codepage : "Nieoczekiwany błąd";
    systemInfoSpans.osCodeName.innerHTML = data.codename != "" ? data.codename : "Nieoczekiwany błąd";
  });
  si.uuid().then((data) => {
    systemInfoSpans.osUUID.innerHTML = data.os != "" ? data.os : "Nieoczekiwany błąd";
  });
}

function versionsInformationCollect() {
  si.versions().then((data) => {
    systemInfoSpans.versionNodeJS.innerHTML = data.node != "" ? data.node : "Nieoczekiwany błąd";
    systemInfoSpans.versionV8.innerHTML = data.v8 != "" ? data.v8 : "Nieoczekiwany błąd";
    systemInfoSpans.versionPerl.innerHTML = data.perl != "" ? data.perl : "Nieoczekiwany błąd";
    systemInfoSpans.versionDocker.innerHTML = data.docker != "" ? data.docker : "Nieoczekiwany błąd";
    systemInfoSpans.versionJava.innerHTML = data.java != "" ? data.java : "Nieoczekiwany błąd";
    systemInfoSpans.versionPython.innerHTML = data.python != "" ? data.python : "Nieoczekiwany błąd";
    systemInfoSpans.versionGit.innerHTML = data.git != "" ? data.git : "Nieoczekiwany błąd";
    systemInfoSpans.versionYarn.innerHTML = data.yarn != "" ? data.yarn : "Nieoczekiwany błąd";
    systemInfoSpans.versionTypeScript.innerHTML = data.tsc != "" ? data.tsc : "Nieoczekiwany błąd";
  });
}

function networkInformationCollect(e) {
  let argumentE = e.currentTarget;
  si.networkInterfaces().then((data) => {
    if(data.length != 0) {
      for(let i = 0; i<data.length; i++) {
        let iToFix = i+1;
        let slotInfoDiv = document.createElement("div");
        let networkInterfaceDiv = document.createElement("div");
        let networkInterfaceNameDiv = document.createElement("div");
        let networkIPv4Div = document.createElement("div");
        let networkIPv6Div = document.createElement("div");
        let networkMacDiv = document.createElement("div");
        let networkInternalDiv = document.createElement("div");
        let networkTypeDiv = document.createElement("div");
        let networkSpeedDiv = document.createElement("div");
        let networkInterfaceValue = data[i].iface != "" ? data[i].iface : "Nieoczekiwany błąd";
        let networkInterfaceNameValue = data[i].ifaceName != "" ? data[i].ifaceName : "Nieoczekiwany błąd";
        let networkIPv4Value = data[i].ip4 != "" ? data[i].ip4 : "Nieoczekiwany błąd";
        let networkIPv6Value = data[i].ip6 != "" ? data[i].ip6 : "Nieoczekiwany błąd";
        let networkMacValue = data[i].mac != "" ? data[i].mac : "Nieoczekiwany błąd";
        let networkInternalToFix;
        if(data[i].internal === true) {
          networkInternalToFix = "tak";
        } else {
          networkInternalToFix = "nie";
        }
        let networkInternalValue = data[i].internal !== "" ? networkInternalToFix : "Nieoczekiwany błąd";
        let networkTypeToFix;
        if(data[i].type == "wired") {
          networkTypeToFix = "przewodowa";
        } else {
          networkTypeToFix = "bezprzewodowa";
        }
        let networkTypeValue = data[i].type !== "" ? networkTypeToFix : "Nieoczekiwany błąd";
        let networkSpeedValue = data[i].speed != ("" || "-1") ? data[i].speed/1000/1000+" Mb/s" : "Nieoczekiwany błąd";
        slotInfoDiv.className = "sysInfoSlotInfo";
        networkInterfaceDiv.className = "sysInfoOneInfo";
        networkInterfaceNameDiv.className = "sysInfoOneInfo";
        networkIPv4Div.className = "sysInfoOneInfo";
        networkIPv6Div.className = "sysInfoOneInfo";
        networkMacDiv.className = "sysInfoOneInfo";
        networkInternalDiv.className = "sysInfoOneInfo";
        networkTypeDiv.className = "sysInfoOneInfo";
        networkSpeedDiv.className = "sysInfoOneInfo";
        slotInfoDiv.innerHTML = "Informacje o karcie sieciowej nr. "+iToFix;
        networkInterfaceDiv.innerHTML = "Interfejs karty sieciowej: "+networkInterfaceValue;
        networkInterfaceNameDiv.innerHTML = "Nazwa karty sieciowej w systemie: "+networkInterfaceNameValue;
        networkIPv4Div.innerHTML = "Adres IPv4 karty sieciowej: "+networkIPv4Value;
        networkIPv6Div.innerHTML = "Adres IPv6 karty sieciowej: "+networkIPv6Value;
        networkMacDiv.innerHTML = "Adres MAC karty sieciowej: "+networkMacValue;
        networkInternalDiv.innerHTML = "Karta obsługuje sieć lokalną: "+networkInternalValue;
        networkTypeDiv.innerHTML = "Typ karty sieciowej: "+networkTypeValue;
        networkSpeedDiv.innerHTML = "Prędkość karty sieciowej: "+networkSpeedValue;
        argumentE.parentElement.children[1].appendChild(slotInfoDiv);
        argumentE.parentElement.children[1].appendChild(networkInterfaceDiv);
        argumentE.parentElement.children[1].appendChild(networkInterfaceNameDiv);
        argumentE.parentElement.children[1].appendChild(networkIPv4Div);
        argumentE.parentElement.children[1].appendChild(networkIPv6Div);
        argumentE.parentElement.children[1].appendChild(networkMacDiv);
        argumentE.parentElement.children[1].appendChild(networkInternalDiv);
        argumentE.parentElement.children[1].appendChild(networkTypeDiv);
        argumentE.parentElement.children[1].appendChild(networkSpeedDiv);
      }
    }
  });
}

function disksInformationCollect(e) {
  let argumentE = e.currentTarget;
  si.diskLayout().then((data) => {
    if(data.length != 0) {
      for(let i = 0; i<data.length; i++) {
        let iToFix = i+1;
        let slotInfoDiv = document.createElement("div");
        let diskTypeDiv = document.createElement("div");
        let diskNameDiv = document.createElement("div");
        let diskInterfaceDiv = document.createElement("div");
        let diskSerialDiv = document.createElement("div");
        let diskSizeDiv = document.createElement("div");
        let diskSMARTStatusDiv = document.createElement("div");
        let diskTypeToFixed;
        if(data[i].type == "HD") {
          diskTypeToFixed = "HDD";
        } else {
          diskTypeToFixed = data[i].type;
        }
        let diskTypeValue = data[i].type != "" ? diskTypeToFixed : "Nieoczekiwany błąd";
        let diskNameValue = data[i].name != "" ? data[i].name : "Nieoczekiwany błąd";
        let diskInterfaceValue = data[i].interfaceType != "" ? data[i].interfaceType : "Nieoczekiwany błąd";
        let diskSerialValue = data[i].serialNum != "" ? data[i].serialNum : "Nieoczekiwany błąd";
        let diskSizeToFixed = data[i].size/1024/1024/1024;
        let diskSizeValue = data[i].size != "" ? diskSizeToFixed.toFixed(3)+" GB" : "Nieoczekiwany błąd";
        let diskSMARTStatusValue = data[i].smartStatus != "" ? data[i].smartStatus : "Nieoczekiwany błąd";
        slotInfoDiv.className = "sysInfoSlotInfo";
        diskTypeDiv.className = "sysInfoOneInfo";
        diskNameDiv.className = "sysInfoOneInfo";
        diskInterfaceDiv.className = "sysInfoOneInfo";
        diskSerialDiv.className = "sysInfoOneInfo";
        diskSizeDiv.className = "sysInfoOneInfo";
        diskSMARTStatusDiv.className = "sysInfoOneInfo";
        slotInfoDiv.innerHTML = "Informacje o dysku nr. "+iToFix;
        diskTypeDiv.innerHTML = "Typ dysku: "+diskTypeValue;
        diskNameDiv.innerHTML = "Model dysku: "+diskNameValue;
        diskInterfaceDiv.innerHTML = "Interfejs dysku: "+diskInterfaceValue;
        diskSerialDiv.innerHTML = "Numer seryjny dysku: "+diskSerialValue;
        diskSizeDiv.innerHTML = "Pojemność dysku: "+diskSizeValue;
        diskSMARTStatusDiv.innerHTML = "Status S.M.A.R.T. dysku: "+diskSMARTStatusValue;
        argumentE.parentElement.children[1].appendChild(slotInfoDiv);
        argumentE.parentElement.children[1].appendChild(diskTypeDiv);
        argumentE.parentElement.children[1].appendChild(diskNameDiv);
        argumentE.parentElement.children[1].appendChild(diskInterfaceDiv);
        argumentE.parentElement.children[1].appendChild(diskSerialDiv);
        argumentE.parentElement.children[1].appendChild(diskSizeDiv);
        argumentE.parentElement.children[1].appendChild(diskSMARTStatusDiv);
      }
    }
  });
}
