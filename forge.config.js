export default {
  packagerConfig: {
    asar: true,
    icon: "./public/favicon",
  },
  rebuildConfig: {},
  makers: [
    // debian
    {
      name: "@electron-forge/maker-deb",
      config: {
        options: {
          maintainer: "spa5k",
          homepage: "https://remix.com",
        },
      },
    },
    // windows
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        name: "remix",
      },
    },
  ],
  plugins: [
    {
      name: "@electron-forge/plugin-auto-unpack-natives",
      config: {},
    },
  ],
  publishers: [
    {
      name: "@electron-forge/publisher-github",
      config: {
        repository: {
          owner: "spa5k",
          name: "remix",
        },
        prerelease: true,
      },
    },
  ],
};
