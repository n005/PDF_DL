# PDF_DL
An addon that downloads PDF images from PDF reader-only website magazine (like EuroPresse) (FIREFOX)

 
## Instructions:

### Please Follow **ALL** the instruction provided in comment of all files:
*For EuroPresse you can take the examples, it should work*

* Change URL where the reader open in **manifest.json** -**AND**- delete the comment ligne.
* Change URL where image can be saved (right-click on the image, *copy the link of the picture*) in **background.js**.
* Change fonctions to *turn page*, *get the total numbers of page* in **europress.js**.
* Change fonctions to *set to the first page* in **background.js**.

#### Optional:
* Change *timeout* and *file downlod location*, if needed in **background.js**.

## How to Install ?
* Click *code*, and *download zip*.  
Uncompress the zip file into a folder.

* In Firefox: Open the ***about:debugging*** page , click the *This Firefox* option, click the *Load Temporary Add-on* button, then select any file in your extension's directory.

The extension now installs, and remains installed until you restart Firefox.
