import { Component, ViewChild, ElementRef } from '@angular/core';
import * as BABYLON from 'babylonjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  @ViewChild("canvas") canvas: ElementRef;
  constructor() { }
  engine;

  createScene = function() {
    this.engine = new BABYLON.Engine(
      this.canvas.nativeElement, 
      true, 
      {
        preserveDrawingBuffer: true, 
        stencil: true
      }
    );

    // Create a basic BJS Scene object
    var scene = new BABYLON.Scene(this.engine);
    // Create a FreeCamera, and set its position to {x: 0, y: 5, z: -10}
    var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene);
    // Target the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());
    // Attach the camera to the canvas
    camera.attachControl(this.canvas.nativeElement, false);
    // Create a basic light, aiming 0, 1, 0 - meaning, to the sky
    var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
    // Create a built-in "sphere" shape; its constructor takes 6 params: name, segment, diameter, scene, updatable, sideOrientation
    var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene, false, BABYLON.Mesh.FRONTSIDE);
    // Move the sphere upward 1/2 of its height
    sphere.position.y = 1;
    // Create a built-in "ground" shape; its constructor takes 6 params : name, width, height, subdivision, scene, updatable
    var ground = BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, scene, false);
    // Return the created scene
    return scene;
  };

  ngOnInit() {
    // call the createScene function
    let mainScene = this.createScene();
    // run the render loop
    this.engine.runRenderLoop(function(){
      mainScene.render();
    });
    // the canvas/window resize event handler
    window.addEventListener('resize', _ => {
      this.engine.resize();
    });
  }
  
}
