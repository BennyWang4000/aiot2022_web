
import * as BABYLON from 'babylonjs';
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