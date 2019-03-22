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
  versionsSectionState: false
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
  versionNodeJS: document.getElementById("sysInfoVersionNodeJS"),
  versionV8: document.getElementById("sysInfoVersionV8"),
  versionPerl: document.getElementById("sysInfoVersionPerl"),
  versionDocker: document.getElementById("sysInfoVersionDocker"),
  versionJava: document.getElementById("sysInfoVersionJava"),
  versionPython: document.getElementById("sysInfoVersionPython")
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
    }
  } else if(e.currentTarget.parentElement.children[1].id == "ram") {
    if(states.ramSectionState === false) {
      states.ramSectionState = true;
      ramInformationCollect();
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
  }
}

function refreshMemoryInformation() {
  si.mem().then((data) => {
    let memoryFree = data.free/1024/1024/1024;
    systemInfoSpans.memoryFree.innerHTML = data.free != "" ? memoryFree.toFixed(3)+" GB" : "Nieoczekiwany błąd";
  });
  si.mem().then((data) => {
    let memoryUsed = data.used/1024/1024/1024;
    systemInfoSpans.memoryUsed.innerHTML = data.used != "" ? memoryUsed.toFixed(3)+" GB" : "Nieoczekiwany błąd";
  });
  si.mem().then((data) => {
    let memorySWAPFree = data.swapfree/1024/1024/1024;
    systemInfoSpans.memorySWAPFree.innerHTML = data.swapfree != "" ? memorySWAPFree.toFixed(3)+" GB" : "Nieoczekiwany błąd";
  });
}

function refreshCPUTemp() {
  si.cpuTemperature().then((data) => {
    systemInfoSpans.cpuTemperature.innerHTML = data.main != "" ? data.main+" °C" : "Nieoczekiwany błąd";
  });
}

function generalInformationCollect() {
  systemInfoSpans.libVersion.innerHTML = si.version() != "" ? si.version() : "Nieoczekiwany błąd";
  systemInfoSpans.timezone.innerHTML = si.time().timezone != "" ? si.time().timezone : "Nieoczekiwany błąd";
  systemInfoSpans.timezoneName.innerHTML = si.time().timezoneName != "" ? si.time().timezoneName : "Nieoczekiwany błąd";
  si.system().then((data) => {
    systemInfoSpans.systemManufacturer.innerHTML = data.manufacturer != "" ? data.manufacturer : "Nieoczekiwany błąd";
  });
  si.system().then((data) => {
    systemInfoSpans.systemModel.innerHTML = data.model != "" ? data.model : "Nieoczekiwany błąd";
  });
  si.system().then((data) => {
    systemInfoSpans.systemVersion.innerHTML = data.version != "" ? data.version : "Nieoczekiwany błąd";
  });
  si.system().then((data) => {
    systemInfoSpans.systemSerial.innerHTML = data.serial != "" ? data.serial : "Nieoczekiwany błąd";
  });
  si.system().then((data) => {
    systemInfoSpans.systemUUID.innerHTML = data.uuid != "" ? data.uuid : "Nieoczekiwany błąd";
  });
  si.system().then((data) => {
    systemInfoSpans.systemSKU.innerHTML = data.sku != "" ? data.sku : "Nieoczekiwany błąd";
  });
  si.chassis().then((data) => {
    systemInfoSpans.chassistType.innerHTML = data.type != "" ? data.type : "Nieoczekiwany błąd";
  });
}

function biosInformationCollect() {
  si.bios().then((data) => {
    systemInfoSpans.biosVendor.innerHTML = data.vendor != "" ? data.vendor : "Nieoczekiwany błąd";
  });
  si.bios().then((data) => {
    systemInfoSpans.biosVersion.innerHTML = data.version != "" ? data.version : "Nieoczekiwany błąd";
  });
  si.bios().then((data) => {
    systemInfoSpans.biosReleaseDate.innerHTML = data.releaseDate != "" ? data.releaseDate : "Nieoczekiwany błąd";
  });
  si.bios().then((data) => {
    systemInfoSpans.biosRevision.innerHTML = data.revision != "" ? data.revision : "Nieoczekiwany błąd";
  });
}

function motherboardInformationCollect() {
  si.baseboard().then((data) => {
    systemInfoSpans.motherboardManufacturer.innerHTML = data.manufacturer != "" ? data.manufacturer : "Nieoczekiwany błąd";
  });
  si.baseboard().then((data) => {
    systemInfoSpans.motherboardModel.innerHTML = data.model != "" ? data.model : "Nieoczekiwany błąd";
  });
  si.baseboard().then((data) => {
    systemInfoSpans.motherboardVersion.innerHTML = data.version != "" ? data.version : "Nieoczekiwany błąd";
  });
  si.baseboard().then((data) => {
    systemInfoSpans.motherboardSerial.innerHTML = data.serial != "" ? data.serial : "Nieoczekiwany błąd";
  });
  si.baseboard().then((data) => {
    systemInfoSpans.motherboardAssetTag.innerHTML = data.assetTag != "" ? data.assetTag : "Nieoczekiwany błąd";
  });
}

function cpuInformationCollect() {
  si.cpu().then((data) => {
    systemInfoSpans.cpuProcessors.innerHTML = data.processors != "" ? data.processors : "Nieoczekiwany błąd";
  });
  si.cpu().then((data) => {
    systemInfoSpans.cpuManufacturer.innerHTML = data.manufacturer != "" ? data.manufacturer : "Nieoczekiwany błąd";
    if(data.manufacturer == "Intel®") {
      systemInfoSpans.cpuManufacturer.style.color = "#0071c5";
      systemInfoSpans.cpuBrand.style.color = "#0071c5";
    } else if(data.manufacturer == "AMD") {
      systemInfoSpans.cpuManufacturer.style.color = "#ed1c24";
      systemInfoSpans.cpuBrand.style.color = "#ed1c24";
    }
  });
  si.cpu().then((data) => {
    systemInfoSpans.cpuBrand.innerHTML = data.brand != "" ? data.brand : "Nieoczekiwany błąd";
  });
  si.cpu().then((data) => {
    systemInfoSpans.cpuSpeed.innerHTML = data.speed != "" ? data.speed+" GHz" : "Nieoczekiwany błąd";
  });
  si.cpu().then((data) => {
    systemInfoSpans.cpuMaxSpeed.innerHTML = data.speedmax != "" ? data.speedmax+" GHz" : "Nieoczekiwany błąd";
  });
  si.cpu().then((data) => {
    systemInfoSpans.cpuMinSpeed.innerHTML = data.speedmin != "" ? data.speedmin+" GHz" : "Nieoczekiwany błąd";
  });
  si.cpu().then((data) => {
    systemInfoSpans.cpuCores.innerHTML = data.physicalCores != "" ? data.physicalCores : "Nieoczekiwany błąd";
  });
  si.cpu().then((data) => {
    systemInfoSpans.cpuThreads.innerHTML = data.cores != "" ? data.cores : "Nieoczekiwany błąd";
  });
  si.cpu().then((data) => {
    systemInfoSpans.cpuSocket.innerHTML = data.socket != "" ? data.socket : "Nieoczekiwany błąd";
  });
  si.cpu().then((data) => {
    systemInfoSpans.cpuVendor.innerHTML = data.vendor != "" ? data.vendor : "Nieoczekiwany błąd";
  });
  si.cpu().then((data) => {
    systemInfoSpans.cpuFamily.innerHTML = data.family != "" ? data.family : "Nieoczekiwany błąd";
  });
  si.cpu().then((data) => {
    systemInfoSpans.cpuModel.innerHTML = data.model != "" ? data.model : "Nieoczekiwany błąd";
  });
  si.cpu().then((data) => {
    systemInfoSpans.cpuStepping.innerHTML = data.stepping != "" ? data.stepping : "Nieoczekiwany błąd";
  });
  si.cpu().then((data) => {
    systemInfoSpans.cpuRevision.innerHTML = data.revision != "" ? data.revision : "Nieoczekiwany błąd";
  });
  si.cpu().then((data) => {
    systemInfoSpans.cpuVoltage.innerHTML = data.voltage != "" ? data.voltage : "Nieoczekiwany błąd";
  });
  si.cpu().then((data) => {
    systemInfoSpans.cpuCacheL3.innerHTML = data.cache.l3 != "" ? data.cache.l3/1024/1024+" MB" : "Nieoczekiwany błąd";
  });
  si.cpu().then((data) => {
    systemInfoSpans.cpuCacheL2.innerHTML = data.cache.l2 != "" ? data.cache.l2/1024/1024+" MB" : "Nieoczekiwany błąd";
  });
  si.cpu().then((data) => {
    systemInfoSpans.cpuCacheL1Data.innerHTML = data.cache.l1d != "" ? data.cache.l1d/1024+" KB" : "Nieoczekiwany błąd";
  });
  si.cpu().then((data) => {
    systemInfoSpans.cpuCacheL1Intruction.innerHTML = data.cache.l1i != "" ? data.cache.l1i/1024+" KB" : "Nieoczekiwany błąd";
  });
  si.cpuTemperature().then((data) => {
    systemInfoSpans.cpuTemperature.innerHTML = data.main != "" ? data.main+" °C" : "Nieoczekiwany błąd";
  });
}

function ramInformationCollect() {
  si.mem().then((data) => {
    let memoryTotal = data.total/1024/1024/1024;
    systemInfoSpans.memoryTotal.innerHTML = data.total != "" ? memoryTotal.toFixed(3)+" GB" : "Nieoczekiwany błąd";
  });
  si.mem().then((data) => {
    let memoryFree = data.free/1024/1024/1024;
    systemInfoSpans.memoryFree.innerHTML = data.free != "" ? memoryFree.toFixed(3)+" GB" : "Nieoczekiwany błąd";
  });
  si.mem().then((data) => {
    let memoryUsed = data.used/1024/1024/1024;
    systemInfoSpans.memoryUsed.innerHTML = data.used != "" ? memoryUsed.toFixed(3)+" GB" : "Nieoczekiwany błąd";
  });
  si.mem().then((data) => {
    let memorySWAPTotal = data.swaptotal/1024/1024/1024;
    systemInfoSpans.memorySWAPTotal.innerHTML = data.swaptotal != "" ? memorySWAPTotal.toFixed(3)+" GB" : "Nieoczekiwany błąd";
  });
  si.mem().then((data) => {
    let memorySWAPUsed = data.swapused/1024/1024/1024;
    systemInfoSpans.memorySWAPUsed.innerHTML = data.swapused != "" ? memorySWAPUsed.toFixed(3)+" GB" : "Nieoczekiwany błąd";
  });
  si.mem().then((data) => {
    let memorySWAPFree = data.swapfree/1024/1024/1024;
    systemInfoSpans.memorySWAPFree.innerHTML = data.swapfree != "" ? memorySWAPFree.toFixed(3)+" GB" : "Nieoczekiwany błąd";
  });
}

function batteryInformationCollect() {
  let computerHaveBattery;
  si.battery().then((data) => {
    let powerResourceConnected;
    if(data.acconnected == true) {
      powerResourceConnected = "tak";
    } else {
      powerResourceConnected = "nie";
    }
    systemInfoSpans.batteryPowerConnected.innerHTML = data.acconnected !== "" ? powerResourceConnected : "Nieoczekiwany błąd";
  });
  si.battery().then((data) => {
    if(data.battery === true) {
      computerHaveBattery = "tak";
    } else {
      computerHaveBattery = "nie";
    }
    systemInfoSpans.batteryHasBattery.innerHTML = data.hasbattery !== "" ? computerHaveBattery : "Nieoczekiwany błąd";
    if(computerHaveBattery == "tak") {
      batteryExt.forEach((batteryExtDiv) => {
        batteryExtDiv.style.display = "block";
      });
      si.battery().then((data) => {
        systemInfoSpans.batteryCycleCount.innerHTML = data.cyclecount !== "" ? data.cyclecount : "Nieoczekiwany błąd";
      });
      si.battery().then((data) => {
        let batteryIsCharging;
        if(data.ischarging == true) {
          batteryIsCharging = "tak";
        } else {
          batteryIsCharging = "nie";
        }
        systemInfoSpans.batteryIsCharging.innerHTML = data.ischarging !== "" ? batteryIsCharging : "Nieoczekiwany błąd";
      });
      si.battery().then((data) => {
        systemInfoSpans.batteryMaxCapacity.innerHTML = data.maxcapacity !== "" ? data.maxcapacity+" mAh" : "Nieoczekiwany błąd";
      });
      si.battery().then((data) => {
        systemInfoSpans.batteryCurrentCapacity.innerHTML = data.currentcapacity !== "" ? data.currentcapacity+" mAh" : "Nieoczekiwany błąd";
      });
      si.battery().then((data) => {
        systemInfoSpans.batteryPercent.innerHTML = data.percent !== "" ? data.percent+"%" : "Nieoczekiwany błąd";
      });
      si.battery().then((data) => {
        systemInfoSpans.batteryTimeLeft.innerHTML = data.timeremaining !== "" ? data.timeremaining+" minut" : "Nieoczekiwany błąd";
      });
      si.battery().then((data) => {
        systemInfoSpans.batteryType.innerHTML = data.type != "" ? data.type : "Nieoczekiwany błąd";
      });
      si.battery().then((data) => {
        systemInfoSpans.batteryModel.innerHTML = data.model != "" ? data.model : "Nieoczekiwany błąd";
      });
      si.battery().then((data) => {
        systemInfoSpans.batteryManufacturer.innerHTML = data.manufacturer != "" ? data.manufacturer : "Nieoczekiwany błąd";
      });
      si.battery().then((data) => {
        systemInfoSpans.batterySerial.innerHTML = data.serial != "" ? data.serial : "Nieoczekiwany błąd";
      });
    }
  });
}

function graphicInformationCollect() {
  si.graphics().then((data) => {
    systemInfoSpans.graphicModel.innerHTML = data.controllers[0].model != "" ? data.controllers[0].model : "Nieoczekiwany błąd";
  });
  si.graphics().then((data) => {
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
  });
  si.graphics().then((data) => {
    systemInfoSpans.graphicBus.innerHTML = data.controllers[0].bus != "" ? data.controllers[0].bus : "Nieoczekiwany błąd";
  });
  si.graphics().then((data) => {
    systemInfoSpans.graphicVRAM.innerHTML = data.controllers[0].vram != "" ? data.controllers[0].vram/1024+" GB" : "Nieoczekiwany błąd";
  });
  si.graphics().then((data) => {
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
  });
  si.graphics().then((data) => {
    let builtIn;
    if(data.displays[0].builtin == true) {
      builtIn = "tak";
    } else {
      builtIn = "nie";
    }
    systemInfoSpans.displayBuiltIn.innerHTML = data.displays[0].builtin !== "" ? builtIn : "Nieoczekiwany błąd";
  });
  si.graphics().then((data) => {
    systemInfoSpans.displayConnection.innerHTML = data.displays[0].connection != "" ? data.displays[0].connection : "Nieoczekiwany błąd";
  });
  si.graphics().then((data) => {
    systemInfoSpans.displayResolutionX.innerHTML = data.displays[0].resolutionx != "" ? data.displays[0].resolutionx+" pikseli" : "Nieoczekiwany błąd";
  });
  si.graphics().then((data) => {
    systemInfoSpans.displayResolutionY.innerHTML = data.displays[0].resolutiony != "" ? data.displays[0].resolutiony+" pikseli" : "Nieoczekiwany błąd";
  });
  si.graphics().then((data) => {
    systemInfoSpans.displayColorDepth.innerHTML = data.displays[0].pixeldepth != "" ? data.displays[0].pixeldepth+" bitowa" : "Nieoczekiwany błąd";
  });
}

function osInformationCollect() {
  si.osInfo().then((data) => {
    systemInfoSpans.osDistro.innerHTML = data.distro != "" ? data.distro : "Nieoczekiwany błąd";
  });
  si.osInfo().then((data) => {
    systemInfoSpans.osArch.innerHTML = data.arch != "" ? data.arch : "Nieoczekiwany błąd";
  });
  si.osInfo().then((data) => {
    systemInfoSpans.osHostname.innerHTML = data.hostname != "" ? data.hostname : "Nieoczekiwany błąd";
  });
  si.osInfo().then((data) => {
    systemInfoSpans.osBuild.innerHTML = data.build != "" ? data.build : "Nieoczekiwany błąd";
  });
  si.osInfo().then((data) => {
    systemInfoSpans.osSerial.innerHTML = data.serial != "" ? data.serial : "Nieoczekiwany błąd";
  });
  si.osInfo().then((data) => {
    systemInfoSpans.osRelease.innerHTML = data.release != "" ? data.release : "Nieoczekiwany błąd";
  });
}

function versionsInformationCollect() {
  si.versions().then((data) => {
    systemInfoSpans.versionNodeJS.innerHTML = data.node != "" ? data.node : "Nieoczekiwany błąd";
  });
  si.versions().then((data) => {
    systemInfoSpans.versionV8.innerHTML = data.v8 != "" ? data.v8 : "Nieoczekiwany błąd";
  });
  si.versions().then((data) => {
    systemInfoSpans.versionPerl.innerHTML = data.perl != "" ? data.perl : "Nieoczekiwany błąd";
  });
  si.versions().then((data) => {
    systemInfoSpans.versionDocker.innerHTML = data.docker != "" ? data.docker : "Nieoczekiwany błąd";
  });
  si.versions().then((data) => {
    systemInfoSpans.versionJava.innerHTML = data.java != "" ? data.java : "Nieoczekiwany błąd";
  });
  si.versions().then((data) => {
    systemInfoSpans.versionPython.innerHTML = data.python != "" ? data.python : "Nieoczekiwany błąd";
  });
}
