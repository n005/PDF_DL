var page = 0
browser.browserAction.onClicked.addListener(async (tab) => {
	browser.tabs.executeScript(tab.id, {
        code: `[function]` //Change function to first page (eg: window.wrappedJSObject._docIndex = 0; window.wrappedJSObject.openNavPdf(!0);)
    })
	
	await new Promise(r => setTimeout(r, 3000));
	
	for (let i = 0; i < page; i++) { 
	
	/*var downloadUrl = "[URL]";  //Change the URL to image download location (eg:https://europresse.com/Pdf/Image?imageIndex=0)

	var downloading = browser.downloads.download({
		url : downloadUrl,
		filename : 'folder/result/image '+ i + '.png', //Change file Download location HERE
		conflictAction : 'uniquify'
	});*/
	
	const currentId = await download(i);
	const success = await onDownloadComplete(currentId);
	
	//await new Promise(r => setTimeout(r, 3000));
	await new Promise(r => setTimeout(r, 1000));  //Change timeout if needed
	
	browser.tabs.executeScript(tab.id, {
        code: `turnPage()` //Call the function to turn the page
    })
	
	await new Promise(r => setTimeout(r, 5000)); //Change timeout if needed
	//await new Promise(r => setTimeout(r, 2000));
	}
	
})

browser.runtime.onMessage.addListener(notify);

function notify(message) {
	page = message
}

var downloadUrl = "[URL]";  //Change HERE
function download(nb) {
  return new Promise(resolve => browser.downloads.download({
		url : downloadUrl,
		filename : 'folder/result/image'+ nb + '.png', //Change file Download location HERE
		conflictAction : 'uniquify'
	}, resolve));
}

function onDownloadComplete(itemId) {
  return new Promise(resolve => {
    browser.downloads.onChanged.addListener(function onChanged({id, state}) {
      if (id === itemId && state && state.current !== 'in_progress') {
        browser.downloads.onChanged.removeListener(onChanged);
        resolve(state.current === 'complete');
      }
    });
  });
}

//window.wrappedJSObject._docNameList.length