document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.getElementById("generateButton");
    const textToGenerate = document.getElementById("textToGenerate");
    const barcodeContainer = document.getElementById("barcodeContainer");

    generateButton.addEventListener("click", function () {
        const inputText = textToGenerate.value;

        // استخدم مكتبة JsBarcode لتوليد باركود
        JsBarcode(barcodeContainer, inputText, {
            format: "CODE128",
            width: 0.5,
            height: 50,
        });
    });
});
