document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.getElementById("generateButton");
    const downloadButton = document.getElementById("downloadButton");
    const textToGenerate = document.getElementById("textToGenerate");
    const barcodeContainer = document.getElementById("barcodeContainer");

    generateButton.addEventListener("click", function () {
        const inputText = textToGenerate.value.trim();
        if (!inputText) return; 

        const fixedWidth = 15;
        const barcodeHeight = 50; 
        const widthPerChar = fixedWidth / inputText.length; 
        JsBarcode(barcodeContainer, inputText, {
            format: "CODE128",
            width: widthPerChar,
            height: barcodeHeight,
            displayValue: false 
        });

        downloadButton.style.display = "inline-block";
    });

    downloadButton.addEventListener("click", function () {
        const svg = barcodeContainer;
        const serializer = new XMLSerializer();
        const svgString = serializer.serializeToString(svg);

        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        const img = new Image();

        img.onload = function () {
            canvas.width = img.width;
            canvas.height = img.height;
            context.drawImage(img, 0, 0);

            const link = document.createElement("a");
            link.href = canvas.toDataURL("image/png");
            link.download = "barcode.png";
            link.click();
        };

        img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgString)));
    });
});