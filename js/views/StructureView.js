define(function(require) {

  var $ = require("jquery");
  var _ = require("underscore");
  var Backbone = require("backbone");
  var Utils = require("utils");

  var StructureView = Backbone.View.extend({

    constructorName: "StructureView",

    id: "main",

    events: {
      "touchend #nav1": "myView",
      "touchend #nav2": "map"
    },

    initialize: function(options) {
      // load the precompiled template
      this.template = Utils.templates.structure;
      this.on("inTheDOM", this.rendered);
      // bind the back event to the goBack function
      //document.getElementById("back").addEventListener("back", this.goBack(), false);
    },

    render: function() {
      // load the template
      this.el.innerHTML = this.template({});
      // cache a reference to the content element
      this.contentElement = this.$el.find('#content')[0];
      return this;
    },

    rendered: function(e) {
      // if the app is running on an iOS 7 device, then we add the 20px margin for the iOS 7 status bar
      if(device.platform == "iOS" && device.version.startsWith("7.")) {
        document.body.style.marginTop = "20px";
        document.body.style.height = "calc(100% - 20px)";
        document.getElementsByTagName("header")[0].style.marginTop = "20px";
      }
    },

    // generic go-back function
    goBack: function() {
      //window.history.back();
    },

    setActiveTabBarElement: function(elementId) {
      // here we assume that at any time at least one tab bar element is active
      document.getElementsByClassName("active")[0].classList.remove("active");
      document.getElementById(elementId).classList.add("active");
    },

    map: function(event) {
      Backbone.history.navigate("map", {
        trigger: true
      });
    },

    myView: function(event) {
      Backbone.history.navigate("myview", {
        trigger: true
      });
    }
  });

  return StructureView;

});