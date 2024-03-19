// @ts-ignore
import logo from "./extensions/logo.png";

const config = {
  // locales: ["ar", "it"],
  auth: {
    logo,
  },
  head: {
    favicon: logo,
  },
  menu: {
    logo,
  },
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "El Debaran Dashboard",
      "app.components.LeftMenu.navbrand.workplace": "Admin Board",
      "Auth.form.welcome.title": "El-Debaran Dashboard",
      "Auth.form.welcome.subtitle": "Login to your account",
      "Settings.profile.form.section.experience.interfaceLanguageHelp":
        "Preference changes will apply only to you.",
    },
  },
  // Disable video tutorials
  tutorials: false,
  // Disable notifications about new Strapi releases
  notifications: { releases: false },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
