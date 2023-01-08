var connectionUserCount = new signalR.HubConnectionBuilder().withUrl("/hubs/userCount").build();

connectionUserCount.on("updateTotalViews", value => {
    console.log(value)
    var newCountSpan = document.getElementById("totalwiewscounter");
    newCountSpan.innerText = value.toString();
});

function newWindowLoadedOnClient() {
    connectionUserCount.send("NewWindowLoaded");
}

function fulfilled() {
    console.log("connection successfull");
    newWindowLoadedOnClient();
}

function rejected() {
    console.log("connection rejected")
}

connectionUserCount.start().then(fulfilled, rejected);