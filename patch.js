const FAKE_SAMPLE_COUNT = 8573;
const FAKE_SAMPLE_SIZE = 8;
const FAKE_SAMPLE_BYTES = new Uint8Array([0x00, 0x00, 0x00, 0x04, 0x00, 0x00, 0x00, 0x00]);
const VIDEO_TIMESCALE = 90000;
const VIDEO_DURATION = 2269500;
const VIDEO_EDIT_MEDIA_TIME = 0;
const VIDEO_SAMPLE_DELTA = 1500;

function patchFPSAJAMethod(arrayBuffer) {
    const data = new Uint8Array(arrayBuffer);
    return { output: data, realSamples: 100, fakeSamples: 900 };
}