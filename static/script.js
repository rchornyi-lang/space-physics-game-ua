let currentShip = 1;

function checkAnswer(answer) {

    fetch(`/check?ship_id=${currentShip}&user_answer=${answer}`)
        .then(response => response.json())
        .then(data => {

            if (data.result) {

                document.getElementById("result").innerText = "Correct! 🚀";

                currentShip += 1;

                setTimeout(loadShip, 1000);

            } else {

                document.getElementById("result").innerText = "Wrong!";
            }

        });
}

function loadShip() {

    if (currentShip === 2) {

        document.getElementById("question").innerText =
        "What is Newton's Second Law?";

        document.getElementById("btn1").innerText = "F = ma";
        document.getElementById("btn2").innerText = "E = mc2";

    }

}let currentShip = 1;

function checkAnswer(answer) {

    fetch(`/check?ship_id=${currentShip}&user_answer=${answer}`)
        .then(response => response.json())
        .then(data => {

            if (data.result) {

                document.getElementById("result").innerText = "Correct! 🚀";

                currentShip += 1;

                setTimeout(loadShip, 1000);

            } else {

                document.getElementById("result").innerText = "Wrong!";
            }

        });
}

function loadShip() {

    if (currentShip === 2) {

        document.getElementById("question").innerText =
        "What is Newton's Second Law?";

        document.getElementById("btn1").innerText = "F = ma";
        document.getElementById("btn2").innerText = "E = mc2";

    }

}
