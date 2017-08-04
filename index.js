const {app, BrowserWindow} = require('electron')

let browserWindowa

app.on('ready', () => {
  browserWindowa = new BrowserWindow()
  browserWindowa.loadURL('file://' + __dirname__ + 'nippo.html')
})
