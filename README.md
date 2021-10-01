# InClue (http://inclue.life)
### Hackathon Project
Improve Accessibility for Users Who are Visually Impaired

## Contains
- Plugin App
- Presentation App

### Plugin App
Vanilla JS + SASS + Gulp + Alpine JS

`npm run build`
`npm run start`
`cd build`

### Presentation App
React

`cd presentation`
`npm run build`

After building, you need copy the plugin build into the presentation build:
`cp -R build presentation/build/static/`
`cd presentation/build/static`
`mv build app`