import * as BABYLON from 'babylonjs';

const canvas = document.getElementById("babylon_canvas");
const engine = new BABYLON.Engine(canvas, true);

var texture_dark
var texture_light
var texture_round
var btn_dark
var btn_light
var btn_round

var createScene = function () {
    var scene = new BABYLON.Scene(engine);
    var light = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(1, 1, 1), scene);
    var camera = new BABYLON.ArcRotateCamera("Camera", 2, 0, 0, new BABYLON.Vector3(0, 0, 0), scene);
    camera.setPosition(new BABYLON.Vector3(700, 600, 1200));
    scene.clearColor = new BABYLON.Color4(0, 0, 0, 0.0000000000000001);
    camera.attachControl(canvas, true);
    camera.useAutoRotationBehavior = true;
    var court = BABYLON.SceneLoader.ImportMesh("",
        "https://raw.githubusercontent.com/BennyWang4000/SWMGglb/main/", "court01.glb", scene, function (newMeshes) {
            scene.newMeshes.forEach((m) => m.isPickable = false);
        }
    );


    var plane_dark = BABYLON.Mesh.CreatePlane("plane_dark", 300, 0, scene);
    plane_dark.position.y = 400;
    plane_dark.position.x = -750;
    plane_dark.position.z = 250;
    plane_dark.billboardMode = BABYLON.Mesh.BILLBOARDMODE_ALL;
    texture_dark = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(plane_dark);
    btn_dark = BABYLON.GUI.Button.CreateSimpleButton("but1", "籃球場內\n人數:##.#%\n擁擠程度:普通");
    btn_dark.width = 1;
    btn_dark.height = 0.4;
    btn_dark.color = "white";
    btn_dark.fontSize = 70;
    btn_dark.background = "red";
    btn_dark.onPointerUpObservable.add(function () {
        alert("you did it!");
    });
    texture_dark.addControl(btn_dark);



    var plane_light = BABYLON.Mesh.CreatePlane("plane_light", 300, 0, scene);
    plane_light.position.y = 400;
    plane_light.position.x = -750;
    plane_light.position.z = -250;
    plane_light.billboardMode = BABYLON.Mesh.BILLBOARDMODE_ALL;
    texture_light = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(plane_light);
    btn_light = BABYLON.GUI.Button.CreateSimpleButton("but2", "籃球場內\n人數:##.#%\n擁擠程度:普通");
    btn_light.width = 1;
    btn_light.height = 0.4;
    btn_light.color = "white";
    btn_light.fontSize = 70;
    btn_light.background = "green";
    btn_light.onPointerUpObservable.add(function () {
        alert("you did it!");
    });
    texture_light.addControl(btn_light);


    var plane_round = BABYLON.Mesh.CreatePlane("plane_round", 300, 0, scene);
    plane_round.position.y = 400;
    plane_round.billboardMode = BABYLON.Mesh.BILLBOARDMODE_ALL;
    texture_round = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(plane_round);
    btn_round = BABYLON.GUI.Button.CreateSimpleButton("but3", "籃球場內\n人數:##.#%\n擁擠程度:普通");
    btn_round.width = 1;
    btn_round.height = 0.4;
    btn_round.color = "white";
    btn_round.fontSize = 70;
    btn_round.background = "green";
    btn_round.onPointerUpObservable.add(function () {
        alert("you did it!");
    });
    texture_round.addControl(btn_round);


    return scene;
};
count = 0

const scene = createScene();
scene.freezeActiveMeshes();

engine.runRenderLoop(function () {
    scene.render();

});

function socket_on() {

    $(document).ready(function () {
        // Socket.IO Start connect
        var socket = io.connect();
        // // Socket.IO send message
        // $("#send").click(function (e) {
        //     // Send message
        //     socket.emit('send', $('#message').val())
        //     // Clear input field
        //     $('#message').val('')
        // });

        // Socket.IO get message
        socket.on('count', function (count) {
            texture_round.removeControl(btn_round)
            btn_round = BABYLON.GUI.Button.CreateSimpleButton("but3", `籃球場內\n人數:${count}\n擁擠程度:普通`);
            btn_round.width = 1;
            btn_round.height = 0.4;
            btn_round.color = "white";
            btn_round.fontSize = 70;
            btn_round.background = "green";
            btn_round.onPointerUpObservable.add(function () {
                alert("you did it!");
            });
            texture_round.addControl(btn_round);
        });
    });
}

// function render_loop() {
//     engine.runRenderLoop(function () {
//         scene.render();

//     });
// }