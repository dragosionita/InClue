window.inclue = {
  dom: {
    app: document.createElement("div"),
  },
  data: {
    options: [{
      name: 'seizure',
      title: 'Seizure Safe Profile',
      subTitle: 'Eliminates flashes and redusec color',
      description: 'This profile enables epileptic and seizure prone users to browse safely by eliminating the risk of seizures that result from flashing or blinking animations and risky color combinations.'
    }, {
      name: 'vision',
      title: 'Vision Impaired Profile',
      subTitle: 'Enhances the website\'s visuals',
      description: ' This profile adjusts the website, so that it is accessible to the majority of visual impairments such as Degrading Eyesight, Tunnel Vision, Cataract, Glaucoma, and others. '
    }],
    checkedOptions: [],
    colorOptions: [{
      name: 'monochrome',
      title: 'Monochrome'
    },
    {
      name: 'lightContrast',
      title: 'Light Contrast',
    }],
    contentOptions: [{
      name: 'magnifier',
      title: 'Text Magnifier'
    },
    {
      name: 'center',
      title: 'Align Center',
    }],
    orientationOptions: [{
      name: 'cursorBlack',
      title: 'Big Black Cursor'
    },
    {
      name: 'cursorWhite',
      title: 'Big White Cursor',
    }],
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
