const argResult = remote.process.argv;
const argOne = argResult[1];

function argOneHandling() {
  if(argOne == "light") {
    console.log("Jasny");
    db.update({ name: "colorTheme" }, { $set: { value: "light" }});
  } else if(argOne == "dark") {
    console.log("Ciemny");
    db.update({ name: "colorTheme" }, { $set: { value: "dark" }});
  } else if(argOne == "contrast") {
    console.log("Kontrastowy");
    db.update({ name: "colorTheme" }, { $set: { value: "contrast" }});
  }
  colorThemeSetup();
}

argOneHandling();
