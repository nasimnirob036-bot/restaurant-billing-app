const {app,BrowserWindow}=require('electron');
function createWindow(){
 const win=new BrowserWindow({width:1400,height:900});
 win.loadFile('restaurant-billing.html');
}
app.whenReady().then(createWindow);
