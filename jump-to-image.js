function postMessage_noWorker(response) {
  if(response.data.wwaData) {
    location.href = "./" + response.data.wwaData.mapCGName;
  } else if (response.data.error) {
    var error = response.data.error;
    alert("エラーです:" + (error.message ? error.message : error));
    console.error(error);
  } else if (response.data.progress) {
    var stage = response.data.stage;
    var current = response.data.current;
    var total = response.data.total;
    console.log("[WWALoader] stage" + stage + ": " + current + "/" + total);
  }
}

