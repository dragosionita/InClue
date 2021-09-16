window.inclue = {
  dom: {
    app: document.createElement("div"),
  },
  data: {
    options: [
      {
        name: "seizure",
        title: "Seizure Safe Profilea",
        subTitle: "Eliminates flashes and redusec color",
        description:
          "This profile enables epileptic and seizure prone users to browse safely by eliminating the risk of seizures that result from flashing or blinking animations and risky color combinations.",
      },
      {
        name: "vision",
        title: "Vision Impaired Profile",
        subTitle: "Enhances the website's visuals",
        description:
          " This profile adjusts the website, so that it is accessible to the majority of visual impairments such as Degrading Eyesight, Tunnel Vision, Cataract, Glaucoma, and others. ",
      },
    ],
    checkedOptions: [],
    colorOptions: [
      {
        name: "monochrome",
        title: "Monochrome",
      },
      {
        name: "lightContrast",
        title: "Light Contrast",
      },
    ],
    checkedColorOptions: [],
    contentOptions: [
      {
        name: "magnifier",
        title: "Text Magnifier",
      },
      {
        name: "center",
        title: "Align Center",
      },
    ],
    checkedContentOptions: [],
    orientationOptions: [
      {
        name: "cursorBlack",
        title: "Big Black Cursor",
      },
      {
        name: "cursorWhite",
        title: "Big White Cursor",
      },
    ],
    checkedOrientationColorOptions: [],
  },
  handleOption: function (fnName, value) {
    var fn = window.inclue.features[fnName];
    fn(value);
  },
  features: {
    seizure: function (toggle) {
      if (toggle) {
        document.documentElement.classList.add("icl-desaturate");
      } else {
        document.documentElement.classList.remove("icl-desaturate");
      }
    },
    vision: function (toggle) {
      if (toggle) {
        document.documentElement.classList.add("icl-saturation-contrast");
        document.body.classList.add("icl-readable-font");

        var elements = document.body.childNodes;
        for (var i = 0; i < elements.length; i++) {
          console.log("elements[i].tagName", elements[i].tagName);
          if (
            elements[i].tagName == "DIV" &&
            !elements[i].classList.contains("inclue-app")
          ) {
            elements[i].style.zoom = 1.1131;
          }
        }
      } else {
        document.documentElement.classList.remove("icl-saturation-contrast");
        document.body.classList.remove("icl-readable-font");
        var elements = document.body.childNodes;
        for (var i = 0; i < elements.length; i++) {
          if (elements[i].tagName == "DIV") {
            elements[i].style.zoom = 1;
          }
        }
      }
    },
  },
  init: function (params) {
    this.loadVendors();
  },
  loadVendors: function () {
    var s = document.createElement("script");
    var e = !document.body ? document.querySelector("head") : document.body;
    s.src = "https://unpkg.com/alpinejs";
    s.async = true;
    s.onload = function () {
      inclue.start();
    };
    e.appendChild(s);
  },
  start: function () {
    this.dom.app.innerHTML = `$APP_TEMPLATE$`;
    this.dom.app.classList.add("inclue-app");
    document.body.appendChild(this.dom.app);
  },
};
