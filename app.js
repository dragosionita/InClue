window.inclue = {
  dom: {
    app: document.createElement("div"),
    magnifier: document.createElement("div"),
    readingMaskTop: document.createElement("div"),
    readingMaskBottom: document.createElement("div"),
    readingGuide: document.createElement("div"),
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
    readingGuide: function (event) {
      var readingGuide = document.querySelector(".icl-reading-guide");
      readingGuide.style.top = event.clientY + 150 + 'px';
      readingGuide.style.left = event.clientX + 'px';
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
        svg: `<svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.763 13.563c-1.515 1.488-.235 3.016-2.247 5.279-.908 1.023 3.738.711 6.039-1.551.977-.961.701-2.359-.346-3.389-1.047-1.028-2.47-1.3-3.446-.339zM19.539.659C18.763-.105 10.16 6.788 7.6 9.305c-1.271 1.25-1.695 1.92-2.084 2.42-.17.219.055.285.154.336.504.258.856.496 1.311.943.456.447.699.793.959 1.289.053.098.121.318.342.152.51-.383 1.191-.801 2.462-2.049C13.305 9.88 20.317 1.422 19.539.659z"/></svg>`
      },
      {
        name: "lightContrast",
        title: "Light Contrast",
        svg: `<?xml version="1.0" encoding="iso-8859-1"?>
        <!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
           height="20px" width="20px" viewBox="0 0 297 297" style="enable-background:new 0 0 297 297;" xml:space="preserve">
        <g>
          <g>
            <path d="M86.312,29.03c1.57,3.809,5.249,6.111,9.127,6.111c1.253,0,2.526-0.24,3.755-0.747c5.039-2.077,7.44-7.845,5.364-12.882
              l-0.296-0.718c-2.078-5.04-7.846-7.441-12.882-5.364c-5.039,2.076-7.44,7.845-5.364,12.882L86.312,29.03z"/>
            <path d="M197.806,34.394c1.23,0.507,2.502,0.747,3.755,0.747c3.878,0,7.557-2.302,9.127-6.111l0.296-0.718
              c2.076-5.038-0.326-10.806-5.364-12.882c-5.036-2.076-10.806,0.326-12.882,5.364l-0.296,0.718
              C190.366,26.55,192.767,32.318,197.806,34.394z"/>
            <path d="M210.688,267.97c-2.077-5.04-7.846-7.44-12.882-5.364c-5.039,2.077-7.44,7.845-5.364,12.882l0.296,0.718
              c1.57,3.809,5.249,6.111,9.127,6.111c1.253,0,2.526-0.24,3.755-0.747c5.039-2.077,7.44-7.845,5.364-12.882L210.688,267.97z"/>
            <path d="M99.194,262.606c-5.036-2.075-10.806,0.326-12.882,5.364l-0.296,0.718c-2.076,5.038,0.326,10.806,5.364,12.882
              c1.229,0.507,2.503,0.747,3.755,0.747c3.879,0,7.557-2.302,9.127-6.111l0.296-0.718
              C106.634,270.45,104.233,264.682,99.194,262.606z"/>
            <path d="M21.512,192.441l-0.718,0.296c-5.038,2.077-7.44,7.845-5.364,12.882c1.57,3.809,5.249,6.111,9.127,6.111
              c1.253,0,2.526-0.24,3.755-0.747l0.718-0.296c5.038-2.077,7.44-7.845,5.364-12.882C32.318,192.766,26.548,190.364,21.512,192.441z
              "/>
            <path d="M20.794,104.263l0.718,0.296c1.229,0.507,2.502,0.747,3.755,0.747c3.878,0,7.557-2.302,9.127-6.111
              c2.075-5.038-0.326-10.806-5.364-12.882l-0.718-0.296c-5.036-2.075-10.806,0.325-12.882,5.364
              C13.354,96.418,15.756,102.186,20.794,104.263z"/>
            <path d="M271.733,105.305c1.253,0,2.525-0.24,3.755-0.747l0.718-0.296c5.038-2.076,7.44-7.845,5.364-12.882
              c-2.077-5.039-7.845-7.441-12.882-5.364l-0.718,0.296c-5.039,2.077-7.44,7.845-5.364,12.882
              C264.176,103.003,267.854,105.305,271.733,105.305z"/>
            <path d="M276.206,192.737l-0.718-0.296c-5.037-2.076-10.806,0.326-12.882,5.364c-2.076,5.038,0.326,10.806,5.364,12.882
              l0.718,0.296c1.229,0.507,2.503,0.747,3.755,0.747c3.879,0,7.557-2.302,9.127-6.111
              C283.646,200.582,281.244,194.814,276.206,192.737z"/>
          </g>
          <g>
            <path d="M107.655,75.222c5.705-3.193,11.819-5.731,18.242-7.53l-8.373-20.333c-2.077-5.039-7.845-7.44-12.881-5.367
              c-5.039,2.076-7.442,7.843-5.367,12.881L107.655,75.222z"/>
            <path d="M255.008,104.644c-2.075-5.04-7.841-7.44-12.881-5.367l-20.348,8.379c3.193,5.705,5.731,11.819,7.53,18.242l20.333-8.372
              C254.679,115.451,257.082,109.684,255.008,104.644z"/>
            <path d="M148.5,64.575c3.34,0,6.628,0.218,9.867,0.6V9.867c0-5.449-4.418-9.867-9.867-9.867c-5.449,0-9.867,4.418-9.867,9.867
              v55.307C141.872,64.793,145.16,64.575,148.5,64.575z"/>
            <path d="M241.919,198.114c1.241,0.517,2.527,0.762,3.792,0.762c3.864,0,7.532-2.286,9.112-6.075
              c2.097-5.031-0.282-10.807-5.312-12.903l-20.298-8.458c-1.826,6.414-4.392,12.516-7.609,18.208L241.919,198.114z"/>
            <path d="M189.648,75.397l8.465-20.317c2.096-5.03-0.282-10.807-5.313-12.903c-5.027-2.099-10.808,0.282-12.903,5.313
              l-8.456,20.297C177.855,69.614,183.956,72.18,189.648,75.397z"/>
            <path d="M41.992,192.356c1.569,3.81,5.249,6.113,9.128,6.113c1.252,0,2.524-0.24,3.753-0.746l20.349-8.378
              c-3.193-5.705-5.731-11.819-7.53-18.242l-20.333,8.372C42.321,181.549,39.917,187.316,41.992,192.356z"/>
            <path d="M214.368,96.586l39.136-39.137c3.853-3.853,3.853-10.101,0-13.955c-3.854-3.852-10.1-3.852-13.955,0l-39.136,39.137
              C205.593,86.722,210.278,91.407,214.368,96.586z"/>
            <path d="M55.08,98.886c-5.032-2.099-10.809,0.283-12.903,5.312c-2.096,5.031,0.282,10.807,5.312,12.903l20.299,8.458
              c1.826-6.414,4.392-12.516,7.609-18.208L55.08,98.886z"/>
            <path d="M148.5,78.389c-38.66,0-70.112,31.451-70.112,70.111s31.452,70.111,70.112,70.111s70.111-31.451,70.111-70.111
              S187.16,78.389,148.5,78.389z"/>
            <path d="M189.344,221.778c-5.705,3.193-11.819,5.731-18.242,7.53l8.372,20.333c1.569,3.81,5.249,6.113,9.128,6.113
              c1.252,0,2.524-0.24,3.753-0.746c5.038-2.075,7.442-7.842,5.367-12.881L189.344,221.778z"/>
            <path d="M82.631,96.586c4.091-5.179,8.775-9.864,13.955-13.955L57.45,43.495c-3.854-3.852-10.1-3.852-13.955,0
              c-3.853,3.853-3.853,10.101,0,13.955L82.631,96.586z"/>
            <path d="M148.5,232.425c-3.34,0-6.628-0.218-9.867-0.6v55.307c0,5.449,4.418,9.867,9.867,9.867c5.449,0,9.867-4.418,9.867-9.867
              v-55.307C155.128,232.207,151.84,232.425,148.5,232.425z"/>
            <path d="M287.133,138.633h-55.307c0.381,3.239,0.6,6.527,0.6,9.867s-0.218,6.628-0.6,9.867h55.307
              c5.449,0,9.867-4.418,9.867-9.867S292.582,138.633,287.133,138.633z"/>
            <path d="M214.368,200.414c-4.091,5.179-8.775,9.864-13.955,13.955l39.136,39.137c1.927,1.926,4.452,2.89,6.977,2.89
              c2.525,0,5.05-0.964,6.977-2.89c3.853-3.853,3.853-10.101,0-13.955L214.368,200.414z"/>
            <path d="M107.351,221.603l-8.465,20.317c-2.096,5.03,0.282,10.807,5.313,12.903c1.24,0.517,2.526,0.762,3.791,0.762
              c3.864,0,7.533-2.286,9.112-6.076l8.457-20.297C119.145,227.386,113.043,224.82,107.351,221.603z"/>
            <path d="M64.575,148.5c0-3.34,0.218-6.628,0.6-9.867H9.867C4.418,138.633,0,143.051,0,148.5s4.418,9.867,9.867,9.867h55.307
              C64.793,155.128,64.575,151.84,64.575,148.5z"/>
            <path d="M82.631,200.414l-39.136,39.137c-3.853,3.853-3.853,10.101,0,13.955c1.927,1.926,4.452,2.89,6.977,2.89
              c2.526,0,5.05-0.964,6.977-2.89l39.136-39.137C91.407,210.278,86.722,205.594,82.631,200.414z"/>
          </g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        </svg>
        `
      },
      {
        name: "darkContrast",
        title: "Dark Contrast",
        svg: `<svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13.719 1.8A8.759 8.759 0 1 1 1.8 13.719c3.335 1.867 7.633 1.387 10.469-1.449 2.837-2.837 3.318-7.134 1.45-10.47z"/></svg>`
      },
    ],
    checkedColorOptions: [],
    contentOptions: [
      {
        name: "magnifier",
        title: "Text Magnifier",
        svg: `<?xml version="1.0" encoding="iso-8859-1"?>
        <!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
           height="20px" width="20px" viewBox="0 0 184.615 184.615" style="enable-background:new 0 0 184.615 184.615;" xml:space="preserve">
        <path d="M169.045,15.57C159.005,5.53,145.656,0,131.458,0C117.259,0,103.91,5.53,93.87,15.57
          c-16.739,16.74-19.951,41.955-9.651,61.956c-2.983,3.414-2.811,9,0.078,14.182l-13.79,13.79l-3.076-3.076
          c-1.328-1.328-3.48-1.328-4.808,0L3.636,161.409c-4.848,4.848-4.848,12.708,0,17.556l2.015,2.015c4.848,4.848,12.708,4.848,17.556,0
          l58.988-58.988c1.328-1.328,1.328-3.48,0-4.808l-3.076-3.076l13.79-13.79c5.174,2.885,10.752,3.06,14.168,0.09
          c7.448,3.854,15.755,5.906,24.382,5.906c14.198,0,27.547-5.529,37.587-15.569s15.57-23.389,15.57-37.587
          S179.085,25.61,169.045,15.57z M161.975,83.674c-8.151,8.151-18.989,12.641-30.517,12.641c-11.528,0-22.366-4.489-30.518-12.641
          c-16.826-16.827-16.826-44.206,0-61.033C109.092,14.49,119.93,10,131.458,10c11.527,0,22.365,4.489,30.517,12.641
          s12.641,18.989,12.641,30.517C174.615,64.685,170.126,75.523,161.975,83.674z"/>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        </svg>`
      },
      {
        name: "center",
        title: "Align Center",
        svg: `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 6H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3 14H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6 10L18 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6 18L18 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`
      },
      {
        name: "left",
        title: "Align Left",
        svg: `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 10L17 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3 6H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3 18L17 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3 14H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`
      },
      {
        name: "right",
        title: "Align Right",
        svg: `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 10L21 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3 6H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7 18L21 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3 14H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`
      },
    ],
    checkedContentOptions: [],
    orientationOptions: [
      {
        name: "cursorBlack",
        title: "Big Black Cursor",
        svg: `<svg width="20px" height="20px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="#000" d="M123.193 29.635L121 406.18l84.31-82.836 65.87 159.02 67.5-27.96-65.87-159.02L391 294.342z"/></svg>`
      },
      {
        name: "cursorWhite",
        title: "Big White Cursor",
        svg: `<svg width="20px" height="20px" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:none;}</style></defs><title>cursor--1</title><path d="M23,28a1,1,0,0,1-.71-.29l-6.13-6.14-3.33,5a1,1,0,0,1-1,.44,1,1,0,0,1-.81-.7l-6-20A1,1,0,0,1,6.29,5l20,6a1,1,0,0,1,.7.81,1,1,0,0,1-.44,1l-5,3.33,6.14,6.13a1,1,0,0,1,0,1.42l-4,4A1,1,0,0,1,23,28Zm0-2.41L25.59,23l-7.16-7.15,5.25-3.5L7.49,7.49l4.86,16.19,3.5-5.25Z"/><rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"/></svg>`
      },
      {
        name: "hideImages",
        title: "Hide Images",
        svg: `<svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="7.499" cy="9.5" r="1.5"/><path d="m10.499 14-1.5-2-3 4h12l-4.5-6z"/><path d="M19.999 4h-16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-16 14V6h16l.002 12H3.999z"/></svg>`
      },
      {
        name: "readingGuide",
        title: "Reading Guide",
        svg: `<svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v17l-4-4-4 4V2c0-.553.585-1.02 1-1h6c.689-.02 1 .447 1 1z"/></svg>`
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
    lightContrast: function (toggle) {
      if (toggle) {
        document.documentElement.classList.add("icl-light-contrast");
      } else {
        document.documentElement.classList.remove("icl-light-contrast");
      }
    },
    darkContrast: function (toggle) {
      if (toggle) {
        document.documentElement.classList.add("icl-dark-contrast");
      } else {
        document.documentElement.classList.remove("icl-dark-contrast");
      }
    },
    center: function (toggle) {
      if (toggle) {
        document.documentElement.classList.add("icl-text-align-center");
      } else {
        document.documentElement.classList.remove("icl-text-align-center");
      }
    },
    left: function (toggle) {
      if (toggle) {
        document.documentElement.classList.add("icl-text-align-left");
      } else {
        document.documentElement.classList.remove("icl-text-align-left");
      }
    },
    right: function (toggle) {
      if (toggle) {
        document.documentElement.classList.add("icl-text-align-right");
      } else {
        document.documentElement.classList.remove("icl-text-align-right");
      }
    },
    lineHeight: function (toggle) {},
    letterSpacing: function (toggle) {},
    cursorBlack: function (toggle) {
      if (toggle) {
        document.documentElement.classList.add("icl-big-black-cursor");
      } else {
        document.documentElement.classList.remove("icl-big-black-cursor");
      }
    },
    cursorWhite: function (toggle) {
      if (toggle) {
        document.documentElement.classList.add("icl-big-white-cursor");
      } else {
        document.documentElement.classList.remove("icl-big-white-cursor");
      }
    },
    hideImages: function (toggle) {
      if (toggle) {
        var images = document.getElementsByTagName('img');
        for (i = 0; i < images.length;i++ ) {
          images[i].style.visibility = 'hidden';
        }
      } else {
        var images = document.getElementsByTagName('img');
        for (i = 0; i < images.length;i++ ) {
          images[i].style.visibility = 'visible';
        }
      }
    },
    readingGuide: function (toggle) {
      if (toggle) {
        document.querySelector('.icl-reading-guide').style.display = 'block';
        document.addEventListener("mousemove", this.inclue.handlers.readingGuide, true);
      } else {
        document.querySelector('.icl-reading-guide').style.display = 'none';
        document.removeEventListener("mousemove", this.inclue.handlers.readingGuide, true);
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
    this.dom.magnifier.classList.add("icl-tooltip");
    this.dom.readingMaskTop.classList.add("icl-reading-mask-element", "icl-reading-mask-element-top");
    this.dom.readingMaskBottom.classList.add("icl-reading-mask-element", "icl-reading-mask-element-bottom");
    this.dom.readingGuide.classList.add('icl-reading-guide')


    document.body.appendChild(this.dom.app);
    document.body.appendChild(this.dom.magnifier);
    document.body.appendChild(this.dom.readingMaskTop);
    document.body.appendChild(this.dom.readingMaskBottom);
    document.body.appendChild(this.dom.readingGuide);
  },
};
