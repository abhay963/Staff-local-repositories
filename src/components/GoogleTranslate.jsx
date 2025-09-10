import React, { useEffect, useState } from "react";

const LANGUAGES = {
  en: "English",
  hi: "हिन्दी",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  zh: "中文",
  ja: "日本語",
  ru: "Русский",
};

const GoogleTranslate = () => {
  const [language, setLanguage] = useState("en");

  // Load Google Translate script and initialize
  useEffect(() => {
    if (!window.google || !window.google.translate) {
      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: Object.keys(LANGUAGES).join(","),
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          "google_translate_element"
        );
      };
    }
  }, []);

  // On language change, trigger Google Translate
  const handleChange = (e) => {
    const lang = e.target.value;
    setLanguage(lang);

    const frame = document.querySelector("iframe.goog-te-menu-frame");
    if (!frame) {
      // Sometimes iframe not loaded yet
      setTimeout(() => triggerGoogleTranslate(lang), 500);
    } else {
      triggerGoogleTranslate(lang);
    }
  };

  // Helper function to select language in Google's iframe menu
  const triggerGoogleTranslate = (lang) => {
    const frame = document.querySelector("iframe.goog-te-menu-frame");
    if (!frame) return;

    const doc = frame.contentDocument || frame.contentWindow.document;
    const langs = doc.querySelectorAll(".goog-te-menu2-item");

    for (let i = 0; i < langs.length; i++) {
      const el = langs[i];
      if (el.getAttribute("value") === lang) {
        el.click();
        break;
      }
    }
  };

  return (
    <>
      <div id="google_translate_element" style={{ display: "none" }} />
      <select
        value={language}
        onChange={handleChange}
        className="bg-white text-gray-800 font-semibold rounded-md px-3 py-1 shadow-md cursor-pointer hover:shadow-lg transition"
        title="Select Language"
      >
        {Object.entries(LANGUAGES).map(([code, name]) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
    </>
  );
};

export default GoogleTranslate;
