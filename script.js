const fileInput = document.getElementById("fileInput");
const chooseBtn = document.getElementById("chooseBtn");
const patchBtn = document.getElementById("patchBtn");
const uploadBox = document.getElementById("uploadBox");
const videoPreview = document.getElementById("videoPreview");
const emptyPreview = document.getElementById("emptyPreview");
const fileName = document.getElementById("fileName");
const statusText = document.getElementById("statusText");

let selectedFile = null;

chooseBtn.onclick = () => fileInput.click();
uploadBox.onclick = () => fileInput.click();

fileInput.onchange = (e) => {
    if (e.target.files[0]) loadVideo(e.target.files[0]);
};

function loadVideo(file) {
    selectedFile = file;
    patchBtn.disabled = false;
    statusText.textContent = "Video Selected";
    fileName.textContent = file.name;
    const url = URL.createObjectURL(file);
    videoPreview.src = url;
    videoPreview.style.display = "block";
    emptyPreview.style.display = "none";
}

patchBtn.onclick = async () => {
    if (!selectedFile) return;
    try {
        patchBtn.disabled = true;
        statusText.textContent = "Processing...";
        const buffer = await selectedFile.arrayBuffer();
        const result = patchFPSAJAMethod(buffer);
        const blob = new Blob([result.output], { type: 'video/mp4' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `${selectedFile.name}_patched.mp4`;
        a.click();
        statusText.textContent = "Done!";
    } catch (err) {
        statusText.textContent = "Error";
    } finally {
        patchBtn.disabled = false;
    }
};