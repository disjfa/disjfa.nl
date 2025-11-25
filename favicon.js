import favicons from "favicons";
import fs from "fs/promises";
import path from "path";

const src = "./assets/logo.png";
const dest = "./favicons";
const htmlBasename = "index.html";


const configuration = {
  path: "/favicons",
  appName: "disjfa.nl",
  appShortName: "disjfa",
  appDescription: "Homepage of disjfa.nl",
  dir: "auto",
  lang: "en-US",
  background: "#0c5bd6",
  theme_color: "#fff",
  appleStatusBarStyle: "black-translucent",
  display: "standalone",
  orientation: "any",
  scope: "/",
  start_url: "/?homescreen=1",
  preferRelatedApplications: false,
  version: "1.0",
  pixel_art: false,
  loadManifestWithCredentials: false,
  manifestMaskable: false,
  icons: {
    android: true, appleIcon: true, appleStartup: true, favicons: true, windows: true, yandex: true,
  },
};


const response = await favicons(src, configuration);
await fs.mkdir(dest, { recursive: true });
await Promise.all(response.images.map(async (image) => await fs.writeFile(path.join(dest, image.name), image.contents),),);
await Promise.all(response.files.map(async (file) => await fs.writeFile(path.join(dest, file.name), file.contents),),);
await fs.writeFile(path.join(dest, htmlBasename), response.html.join("\n"));
