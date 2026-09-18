document.getElementById("checkinForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const mood =
            Number(document.getElementById("mood").value);

        const stress =
            Number(document.getElementById("stress").value);

        const sleep =
            Number(document.getElementById("sleep").value);

        const study =
            Number(document.getElementById("study").value);

        const journal =
            document.getElementById("journal").value;


        const checkin = {

            date: new Date().toLocaleDateString(),

            mood: mood,

            stress: stress,

            sleep: sleep,

            study: study,

            journal: journal

        };


        let records =
            JSON.parse(localStorage.getItem("mindtrackData")) || [];


        records.push(checkin);


        localStorage.setItem(
            "mindtrackData",
            JSON.stringify(records)
        );


        alert("Check-in saved successfully 🔐");


        window.location.href = "insights.html";

    });