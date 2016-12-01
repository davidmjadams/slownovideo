window.onload = function(){
  setTimeout(function(){
    if (!window.performance || !('getElementsByClassName' in document)) {
      return;
    }

    var timing = window.performance.timing;
    var loadTime = timing.loadEventEnd - timing.responseEnd;
    var video = document.getElementsByClassName('hero__video')[0];
    var source = document.createElement('source');

    if (loadTime < 1500 && video) {
      source.setAttribute('src', '/assets/video/aerial-fields.mp4');
      video.appendChild(source);
      video.play();
    }
  }, 0);
}
