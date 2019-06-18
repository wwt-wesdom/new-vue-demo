module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    [
      "import",
      {
        libraryName: "vant",
        style: name => `${name}/style/less`
      },
      "vant"
    ]
  ]
}
