const records =
    JSON.parse(localStorage.getItem("mindtrackData")) || [];


if (records.length === 0) {

    document.getElementById("patternBox").innerHTML =
        "No check-in data available yet. Please complete your first check-in.";

}
else {

    analyzePattern();

}


function analyzePattern() {

    const latest =
        records[records.length - 1];


    let previousRecords;


    if (records.length > 1) {

        previousRecords =
            records.slice(0, records.length - 1);

    }
    else {

        previousRecords = records;

    }


    const averageMood =
        calculateAverage(previousRecords, "mood");

    const averageStress =
        calculateAverage(previousRecords, "stress");

    const averageSleep =
        calculateAverage(previousRecords, "sleep");

    const averageStudy =
        calculateAverage(previousRecords, "study");


    document.getElementById("moodValue")
        .innerText = latest.mood + "/5";

    document.getElementById("stressValue")
        .innerText = latest.stress + "/5";

    document.getElementById("sleepValue")
        .innerText = latest.sleep + " hrs";

    document.getElementById("studyValue")
        .innerText = latest.study + " hrs";


    let changes = [];


    if (latest.mood < averageMood - 0.7) {

        changes.push("Mood has decreased");

    }


    if (latest.stress > averageStress + 0.7) {

        changes.push("Stress has increased");

    }


    if (latest.sleep < averageSleep - 1) {

        changes.push("Sleep has decreased");

    }


    if (latest.study > averageStudy + 2) {

        changes.push("Study/workload has increased");

    }


    displayPattern(changes);

}


function calculateAverage(data, property) {

    let total = 0;


    for (let record of data) {

        total += Number(record[property]);

    }


    return total / data.length;

}


function displayPattern(changes) {

    const patternBox =
        document.getElementById("patternBox");


    const suggestionsList =
        document.getElementById("suggestionsList");


    suggestionsList.innerHTML = "";


    if (changes.length === 0) {

        patternBox.innerHTML = `
            <h2>✅ Your recent pattern looks consistent</h2>

            <p>
                Your latest check-in does not show a
                significant change compared with your
                previous personal pattern.
            </p>
        `;


        addSuggestion(
            "Continue checking in regularly."
        );

        addSuggestion(
            "Keep observing your personal wellbeing trends."
        );

    }

    else {

        patternBox.innerHTML = `
            <h2>⚠️ Recent Pattern Change</h2>

            <p>
                Your recent wellbeing pattern has changed
                compared with your previous personal pattern.
            </p>

            <br>

            <strong>Observed changes:</strong>

            <ul>
                ${changes.map(change =>
                    `<li>${change}</li>`
                ).join("")}
            </ul>
        `;


        if (changes.includes("Stress has increased")) {

            addSuggestion(
                "Consider taking short breaks during demanding tasks."
            );

        }


        if (changes.includes("Sleep has decreased")) {

            addSuggestion(
                "Try to maintain a regular sleep routine where possible."
            );

        }


        if (changes.includes("Study/workload has increased")) {

            addSuggestion(
                "Consider breaking larger tasks into smaller manageable steps."
            );

        }


        if (changes.includes("Mood has decreased")) {

            addSuggestion(
                "Consider taking some time for activities that help you recharge."
            );

        }


        addSuggestion(
            "If you feel you need additional support, consider exploring available campus resources."
        );

    }

}


function addSuggestion(text) {

    const li =
        document.createElement("li");

    li.innerText = "✓ " + text;

    document.getElementById(
        "suggestionsList"
    ).appendChild(li);

}


function goToSupport() {

    window.location.href = "support.html";

}