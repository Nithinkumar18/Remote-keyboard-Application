
let currentUser = null;

function loadKeyboard() {
    $.get("http://localhost:3000/keyboard", function(data) {
        let html = "";
        if (data.length === 0) {
            $("#keyboard").html("<p>No keys available</p>");
            return;
        }

        data.forEach(key => {
            html += `<div class='key ${key.state}' data-key='${key.key_number}'>${key.key_number}</div>`;
        });
        $("#keyboard").html(html);
    }).fail(function() {
        $("#keyboard").html("<p>Error loading keyboard</p>");
    });
}

$(document).on("click", "#acquire-control", function() {
    let userId = prompt("Enter user ID (1 or 2):");
    if (!userId || (userId !== "1" && userId !== "2")) {
        alert("Invalid user ID!");
        return;
    }

    $.post(`http://localhost:3000/control/acquire?user=${userId}`, function(response) {
        alert(response.message);
        currentUser = userId;
        loadKeyboard();
    }).fail(function(err) {
        alert("Error acquiring control: " + err.responseText);
    });
});

$(document).on("click", ".key", function() {
    if (!currentUser) {
        alert("You must acquire control first!");
        return;
    }

    let keyNumber = $(this).data("key");

    $.post(`http://localhost:3000/keyboard/toggle?user=${currentUser}&key=${keyNumber}`, function(response) {
        alert(response.message);
        loadKeyboard();
    }).fail(function(err) {
        alert("Error toggling key: " + err.responseText);
    });
});

$(document).on("click", ".key", function() {
    if (!currentUser) {
        alert("You must acquire control first!");
        return;
    }

    let keyNumber = $(this).data("key");

    $.post(`http://localhost:3000/keyboard/toggle?user=${currentUser}&key=${keyNumber}`, function(response) {
        alert(response.message);
        loadKeyboard();
    }).fail(function(err) {
        alert("You cannot change another user's box ");  
    });
});

setInterval(loadKeyboard, 1000);
loadKeyboard();
