
    require([
      "esri/WebScene",
      "esri/views/SceneView",
      "esri/Camera",
      "esri/widgets/Home",
      "dojo/domReady!"
    ], function(WebScene, SceneView, Camera, Home) {

      var scene = new WebScene({
        portalItem:{
         id:"8046207c1c214b5587230f5e5f8efc77" 
        }
      });
      
      var camera = new Camera({
        position: [
          -71.04228346769618,
          42.34647316847768,
          2500// elevation in meters
        ],
        tilt:0,
        heading: 0
      })
      
      var camera2 = new Camera({
        position: [
          -71.06605477409002,
          42.30189885242615,
          2500// elevation in meters
        ],
        tilt: 0,
        heading: 0
      });

      var view = new SceneView({
        container: "viewDiv",
        map: scene,
        viewingMode:"local",
        camera: camera,
        environment: {
            lighting: {
              date: new Date(),
              directShadowsEnabled: true,
              // don't update the view time when user pans.
              // The clock widget drives the time
              cameraTrackingEnabled: false
            }
        },
    });
    
    var homeBtn = new Home({
        view: view
      });

    view.ui.add(homeBtn, "top-left");
    
    [b1, b2, b3].forEach(function(button) {
      button.style.display = 'flex';
      view.ui.add(button, 'top-right');
    });
    
    b1.addEventListener('click', function() {
      view.goTo({
        target:camera
      });
    });
    
    b2.addEventListener('click', function() {
      view.goTo({
        target:camera2
      });
    });
      
    b3.addEventListener('click', function() {
      view.goTo({
        position: {
          x: -71.02327161310104 ,
          y:  42.38330237780319, 
          z: 3500
        },
        tilt: -50,
        heading: 50
      });
    });


    });
