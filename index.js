module.exports = function onIframeReady($iframe, callback) {
  if ($iframe.contentWindow && iframe.contentWindow.document.readyState === 'complete') {
    callback();
  } else {
    $iframe.addEventListener('load', callback);
  }
}
