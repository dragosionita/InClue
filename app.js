window.inclue = {
  dom: {
    app: document.createElement("div"),
    magnifier: document.createElement("div"),
    readingMaskTop: document.createElement("div"),
    readingMaskBottom: document.createElement("div"),
  },
  handlers: {
    magnifier: function (event) {
      var tooltip = document.querySelector(".icl-tooltip");
      setTimeout(function () {
        if (
          event.target.tagName == "P" &&
          event.target.firstChild.nodeValue.trim().length > 2
        ) {
          var mouseX = event.clientX;
          var mouseY = event.clientY;

          tooltip.style.display = "block";
          tooltip.style.top = mouseY + "px";
          tooltip.style.left = mouseX + "px";
          tooltip.innerHTML = event.target.firstChild.nodeValue;
        } else {
          tooltip.style.display = "none";
        }
      }, 500);
    },
    readingMask: function (event) {
      var readingMaskTop = document.querySelector(".icl-reading-mask-element-top");
      var readingMaskBottom = document.querySelector(".icl-reading-mask-element-bottom");

      readingMaskTop.style.height = event.clientY - 80 + 'px';
      readingMaskBottom.style.height = window.innerHeight - event.clientY - 80 + 'px';
    },
  },
  data: {
    options: [
      {
        name: "seizure",
        title: "Seizure Safe Profile",
        subTitle: "Eliminates flashes and redusec color",
        description:
          "This profile enables epileptic and seizure prone users to browse safely by eliminating the risk of seizures that result from flashing or blinking animations and risky color combinations.",
      },
      {
        name: "vision",
        title: "Vision Impaired Profile",
        subTitle: "Enhances the website's visuals",
        description:
          "This profile adjusts the website, so that it is accessible to the majority of visual impairments such as Degrading Eyesight, Tunnel Vision, Cataract, Glaucoma, and others. ",
      },
      {
        name: "readingMask",
        title: "ADHD Friendly Profile",
        subTitle: "Enhances the website's visuals",
        description:
          "This profile significantly reduces distractions, to help people with ADHD and Neurodevelopmental disorders browse, read, and focus on the essential elements of the website more easily.",
      },
      {
        name: "adhd",
        title: "Cognitive Disability Profile",
        subTitle: "Assists with reading and focusing",
        description:
          " This profile provides various assistive features to help users with cognitive disabilities such as Autism, Dyslexia, CVA, and others, to focus on the essential elements of the website more easily. ",
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
      {
        name: "darkContrast",
        title: "Dark Contrast",
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
      {
        name: "left",
        title: "Align Left",
      },
      {
        name: "right",
        title: "Align Right",
      },
      {
        name: "lineHeight",
        title: "Adjust Line Height",
      },
      {
        name: "letterSpacing",
        title: "Adjust Letter Spacing",
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
      {
        name: "hideImages",
        title: "Hide Images",
      },
      {
        name: "readingGuide",
        title: "Reading Guide",
      },
    ],
    checkedOrientationOptions: [],
  },
  handleOption: function (fnName, value) {
    console.log("0000", fnName);
    var fn = this.features[fnName];
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
    zoom: function (toggle) {
      if (toggle) {
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
        var elements = document.body.childNodes;
        for (var i = 0; i < elements.length; i++) {
          if (elements[i].tagName == "DIV") {
            elements[i].style.zoom = 1;
          }
        }
      }
    },
    readingMask: function (toggle) {
      if (toggle) {
        document.querySelector(".icl-reading-mask-element-top").style.display = 'block';
        document.querySelector(".icl-reading-mask-element-bottom").style.display = 'block';
        document.addEventListener("mousemove", this.inclue.handlers.readingMask, true);
      } else {
        document.removeEventListener("mousemove", this.inclue.handlers.readingMask, true);
        document.querySelector(".icl-reading-mask-element-top").style.display = 'none';
        document.querySelector(".icl-reading-mask-element-bottom").style.display = 'none';
      }
    },
    vision: function (toggle) {
      if (toggle) {
        document.documentElement.classList.add("icl-saturation-contrast");
        document.body.classList.add("icl-readable-font");
        window.inclue.features.zoom(true);
      } else {
        document.documentElement.classList.remove("icl-saturation-contrast");
        document.body.classList.remove("icl-readable-font");
        window.inclue.features.zoom(false);
      }
    },
    adhd: function (toggle) {
      if (toggle) {
        document.documentElement.classList.add("icl-emphasize-links");
      } else {
        document.documentElement.classList.remove("icl-emphasize-links");
      }
    },
    magnifier: function (toggle) {
      if (toggle) {
        document.addEventListener("mousemove", this.inclue.handlers.magnifier, true);
      } else {
        document.removeEventListener("mousemove", this.inclue.handlers.magnifier, true);
      }
    },
    monochrome: function (toggle) {
      if (toggle) {
        document.documentElement.classList.add("icl-monochrome-contrast");
      } else {
        document.documentElement.classList.remove("icl-monochrome-contrast");
      }
    },
    lightContrast: function (toggle) {},
    darkContrast: function (toggle) {},
    center: function (toggle) {},
    left: function (toggle) {},
    right: function (toggle) {},
    lineHeight: function (toggle) {},
    letterSpacing: function (toggle) {},
    cursorBlack: function (toggle) {},
    cursorWhite: function (toggle) {},
    hideImages: function (toggle) {},
    readingGuide: function (toggle) {},
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
    this.dom.magnifier.classList.add("icl-tooltip");
    this.dom.readingMaskTop.classList.add("icl-reading-mask-element", "icl-reading-mask-element-top");
    this.dom.readingMaskBottom.classList.add("icl-reading-mask-element", "icl-reading-mask-element-bottom");


    document.body.appendChild(this.dom.app);
    document.body.appendChild(this.dom.magnifier);
    document.body.appendChild(this.dom.readingMaskTop);
    document.body.appendChild(this.dom.readingMaskBottom);
  },
};
