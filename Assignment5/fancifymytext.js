window.onload = (event) => { // Add event handlers when page is loaded
    const fancyBtn = document.querySelector("#FancyShmancy");
    const boringBtn = document.querySelector("#BoringBetty");
    const mooBtn = document.querySelector("#mooBtn");

    console.log(fancyBtn);
    console.log(boringBtn);
    console.log(mooBtn);

    fancyBtn.addEventListener("click", () => {
        fancyFunc();
    });

    boringBtn.addEventListener("click", () => {
        boringFunc();
    });

    mooBtn.addEventListener("click", () => {
        mooFunc();
    });
};

// Fancify button functions
function biggerFunc() {
    alert("Hello, world!");
    document.getElementById("txtarea").style.fontSize = "24pt";
}

function fancyFunc() {
    const text = document.getElementById("txtarea").style;
    text.fontWeight = "bold";
    text.color = "blue";
    text.textDecoration = "underline";
}

function boringFunc() {
    const text = document.getElementById("txtarea").style;
    text.fontWeight = "normal";
    text.color = null;
    text.textDecoration = null;
}

function mooFunc() {
    var text = document.getElementById("txtarea").value;
    text = text.toUpperCase();
    var substrings = text.split(".");
    for (var i = 0; i < substrings.length-1; i++) {
        substrings[i] += "Moo";
    }
    text = substrings.join(".");
    document.getElementById("txtarea").value = text;
}

// Called when either radio button is changed
function radioChange() {
    const fancyBtn = document.querySelector("#FancyShmancy");
    const boringBtn = document.querySelector("#BoringBetty");

    if (fancyBtn.checked) {
        alert("Text fancified!");
    }
    else if (boringBtn.checked) {
        alert("Text boringfied!(???)");
    }
    else {
        alert("I have no idea what is happening");
    }
}
