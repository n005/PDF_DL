document.body.style.border = "5px solid green"; //Page information
function turnPage() {
	document.getElementById('[ID]').click(); //Change function to change page (eg: document.getElementById('nextPdf').click();)
}

browser.runtime.sendMessage([Function]); //Change function to return the total number of pages (eg: window.wrappedJSObject._docNameList.length)