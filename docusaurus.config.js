// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("prism-react-renderer").themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "European Unified ID",
  tagline:
    "European Unified ID (EUID) uses encrypted email data to provide a privacy-conscious and accurate identity standard for the digital advertising ecosystem.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://euid.eu",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "European-Unified-ID", // Usually your GitHub org/user name.
  projectName: "EUID-docs", // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  scripts: [
    // String format.
    "//pages.thetradedesk.com/js/forms2/js/forms2.js",
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    "docusaurus-plugin-sass",
    [
      "@docusaurus/plugin-google-tag-manager",
      {
        containerId: "GTM-K3NQMDX",
      },
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/social-sharing-default-card.png",
      colorMode: {
        defaultMode: "light",
      },

      navbar: {
        title: "",
        logo: {
          alt: "European Unified ID logo",
          src: "img/logo-dark.svg",
          srcDark: "/img/logo-white.svg",
        },
        items: [
          //uncomment once docs are added
          {
            to: "/request-access",
            label: "Request access",
            className: "mobile-only menu__cta button button--nav",
            position: "left",
          },
          {
            to: "https://github.com/European-Unified-ID/EUID-docs",
            label: "Documentation",
            position: "left",
          },
          // {
          //   type: "doc",
          //   docId: "overviews/overview-publishers",
          //   label: "Publishers",
          //   position: "left",
          // },
          // {
          //   type: "doc",
          //   docId: "overviews/overview-advertisers",
          //   label: "Advertisers",
          //   position: "left",
          // },
          // {
          //   type: "doc",
          //   docId: "overviews/overview-dsps",
          //   label: "DSPs",
          //   position: "left",
          // },
          // {
          //   type: "doc",
          //   docId: "overviews/overview-data-providers",
          //   label: "Data Providers",
          //   position: "left",
          // },
          // {
          //   type: "doc",
          //   docId: "intro",
          //   label: "Documentation",
          //   position: "left",
          // },

          {
            type: "search",
            position: "right",
            className: "desktop-only hide-on-marketing-page",
          },
          {
            type: "custom-NavbarColorModeToggle",
            position: "right",
            className: "desktop-only hide-on-marketing-page",
          },
          {
            type: "custom-NavbarSeparator",
            position: "right",
            classNames: "desktop-only hide-on-marketing-page navbar__divider",
          },
          {
            type: "custom-NavbarCta",
            href: "/request-access",
            label: "Request access",
            position: "right",
            className: "desktop-only",
          },
        ],
      },
      footer: {
        logo: {
          alt: "European Unified ID logo",
          src: "img/logo-dark.svg",
          srcDark: "/img/logo-white.svg",
        },
        links: [
          {
            items: [
              // {
              //   type: "doc",
              //   label: "Publishers",
              //   to: "/docs/overviews/overview-publishers",
              // },
              // {
              //   type: "doc",
              //   label: "Advertisers",
              //   to: "/docs/overviews/overview-advertisers",
              // },
              // {
              //   type: "doc",
              //   label: "DSPs",
              //   to: "/docs/overviews/overview-dsps",
              // },
              // {
              //   type: "doc",
              //   label: "Data Providers",
              //   to: "/docs/overviews/overview-data-providers",
              // },
              // {
              //   type: "doc",
              //   label: "UID2 Overview",
              //   to: "/docs/intro",
              // },
              {
                label: "European Unified ID GitHub",
                href: "https://github.com/European-Unified-ID/EUID-docs",
              },
              {
                type: "doc",
                label: "Prebid",
                to: "https://docs.prebid.org/dev-docs/modules/userid-submodules/euid.html",
              },
            ],
          },
          {
            items: [
              {
                label: "Website Privacy Policy",
                href: "https://www.thetradedesk.com/us/website-privacy-policy",
              },
              {
                label: "Opt-out",
                href: "https://transparentadvertising.eu/",
              },
              {
                label: "Do not sell my data",
                href: "https://www.adsrvr.org/",
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["csharp", "java"],
      },
      //will update this once we have the actual values
      // algolia: {
      //   // N.b. per Algolia, these are public values - once we get them, we can commit them to the open source repo.
      //   appId: "GRNBXN1TTS", //prod
      //   apiKey: "97e7dc35be9559b65f0d03c0c9684272", //prod
      //   indexName: "unifiedid", //prod

      //   // appId: "TESTINGXSOWQK10AP", //staging
      //   // apiKey: "58f35480017be37aca9f762323a0b4d1", //staging
      //   // indexName: "UID2", //staging
      // },
    }),
};

module.exports = config;
