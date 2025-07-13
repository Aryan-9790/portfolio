  var vapiInstance = null;
  const assistant = "c3e5f293-1038-49e7-acf5-69cae41c42f1"; 
  const apiKey = "0f823684-60e6-4688-8daf-8a24fccb3a02"; 
  const buttonConfig = {}; 

  (function (d, t) {
    var g = document.createElement(t),
      s = d.getElementsByTagName(t)[0];
    g.src =
      "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
    g.defer = true;
    g.async = true;
    s.parentNode.insertBefore(g, s);

    g.onload = function () {
      vapiInstance = window.vapiSDK.run({
        apiKey: apiKey, 
        assistant: assistant, 
        config: buttonConfig, 
      });
    };
  })(document, "script");
