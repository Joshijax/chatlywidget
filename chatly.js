(function () {
  // Replace USERNAME with your GitHub username
  var USERNAME = "joshijax";

  // Replace REPOSITORY with the name of your repository
  var REPOSITORY = "chatlywidget";

  // Replace BRANCH with the name of the branch that contains your files (usually 'main' or 'master')
  var BRANCH = "master";

  // Wait for the document to finish loading
  document.addEventListener("DOMContentLoaded", function () {
    // Create a new div element with the "chatly-app" id and append it to the body
    var chatlycon = document.createElement("div");
    chatlycon.id = "chatly-container";
    chatlycon.attachShadow({ mode: "open" });
    document.body.appendChild(chatlycon);
    // Create a Shadow Root for the app
    var shadowRoot = chatlycon;

    // Load all the JavaScript files from the scripts directory
    fetch(
      "https://api.github.com/repos/" +
        USERNAME +
        "/" +
        REPOSITORY +
        "/contents/js?ref=" +
        BRANCH
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (files) {
        files.forEach(function (file) {
          if (file.type === "file" && file.name.endsWith(".js")) {
            var scriptElement = document.createElement("script");
            scriptElement.src =
              "https://" +
              USERNAME +
              ".github.io/" +
              REPOSITORY +
              "/js/" +
              file.name;
            shadowRoot.appendChild(scriptElement);
          }
        });
      });

    // Load all the CSS files from the stylesheets directory
    fetch(
      "https://api.github.com/repos/" +
        USERNAME +
        "/" +
        REPOSITORY +
        "/contents/css?ref=" +
        BRANCH
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (files) {
        files.forEach(function (file) {
          if (file.type === "file" && file.name.endsWith(".css")) {
            var linkElement = document.createElement("link");
            linkElement.rel = "stylesheet";
            linkElement.type = "text/css";
            linkElement.href =
              "https://" +
              USERNAME +
              ".github.io/" +
              REPOSITORY +
              "/css/" +
              file.name;
            shadowRoot.appendChild(linkElement);
          }
        });
      });

    // Load all the MP3 files from the media directory
    fetch(
      "https://api.github.com/repos/" +
        USERNAME +
        "/" +
        REPOSITORY +
        "/contents/media?ref=" +
        BRANCH
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (files) {
        files.forEach(function (file) {
          if (file.type === "file" && file.name.endsWith(".mp3")) {
            var audioElement = document.createElement("audio");
            audioElement.src =
              "https://" +
              USERNAME +
              ".github.io/" +
              REPOSITORY +
              "/media/" +
              file.name;
            audioElement.preload = "auto";
            shadowRoot.appendChild(audioElement);
          }
        });
      });

          // Load all the MP3 files from the media directory
    fetch(
      "https://api.github.com/repos/" +
        USERNAME +
        "/" +
        REPOSITORY +
        "/contents/media?ref=" +
        BRANCH
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (files) {
        files.forEach(function (file) {
          if (file.type === "file" && file.name.endsWith(".mp3")) {
            var audioElement = document.createElement("audio");
            audioElement.src =
              "https://" +
              USERNAME +
              ".github.io/" +
              REPOSITORY +
              "/media/" +
              file.name;
            audioElement.preload = "auto";
            shadowRoot.appendChild(audioElement);
          }
        });
      });

    // Create a new div element inside the Shadow Root with the "chatly-app" id
    var chatlyApp = document.createElement("div");
    chatlyApp.id = "chatly-app";
    document.body.appendChild(chatlyApp);
  });
})();
