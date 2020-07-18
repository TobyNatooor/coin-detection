// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Webcam Image Classification using MobileNet
This example uses promises to create the classifier
=== */

// Grab elements, create settings, etc.
const video = document.getElementById("video");

// Create a webcam capture
navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
  video.srcObject = stream;
  video.play();
});

const loop = async classifier => {
  let results = await classifier.classify();
  result.innerText = results[0].label; 
  probability.innerText = results[0].confidence.toFixed(4);
  loop(classifier); // Call again to create a loop
};

async function init() {
    // Initialize the Image Classifier method with MobileNet passing the video as the
    // second argument and the getClassification function as the third
    console.log('Loading model');
    const url = 'https://tobynatooor.github.io/coin-detection/coin-trained-model/model.json';
    let classifier = await ml5.imageClassifier(url, video);
    console.log('Loading done');
    loop(classifier);
}

init();