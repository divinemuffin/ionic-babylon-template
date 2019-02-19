
So, after you pulled and installed dependencies just run 
    ionic serve
You can easily use Babylon features right in app/home/home.page.ts file where an instance of
an engine was imported.


So, this is based on Ionic 4, but this is vanilla one so I used 
    ionic start io-baby blank
but not
    ionic start io-baby blank --type=angular

then, in a nutshell I installed 3D Babylon engine:
    npm install babylonjs --save

NOTE: for versions with an old Babylon engine (prior to 2.5.0) you might wanna export class explicitly. Go into it's script @ node_modules/babylonjs/dist and exported it:
    export = BABYLON;
But we don't need that in newer one's! Just import it as it is.

NOTE: Depending of what you intend to do in your app, other dependencies might be needed (e.g. cannon.js or hand.js) You could install them the same way as BabylonJS, but I just downloaded the javascript files, saved them in the www folder and referenced using script tags in index.html. However, this has a downside, the www folder is generated after transpiling, so you will need to add those javascript files manually.

After this I generated an Angular Provider (Service) that will wrap our BabylonJS Engine:
    ionic g service BabylonJS

Besides holding our Engine instance, being in a Service allows for different pages to access the same Engine, e.g. you define different scenes in different pages and use the same Engine Service for all.

Also added types of engine to tsconfig.json since project uses TypeScript




