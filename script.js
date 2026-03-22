const exerciseList = document.getElementById("exerciseList");

const exercises = [
    {
        bodyPart: "neck",
        name: "Chin Tuck",
        description: "Roll your chin down to your chest as if looking at your upper chest.",
        parameters: "3 sets, 10 reps",
        image: "url",
    },
    {
        bodyPart: "shoulder",
        name: "Scap Retraction",
        description: "Pinch your shoulder blades together.",
        parameters: "3 sets, 10 reps",
        image: "url",
    },
    {
        bodyPart: "hip",
        name: "Bridge",
        description: "Lift your buttocks in the air.",
        parameters: "3 sets, 10 reps",
        image: "url",
    }
]

function displayExercises(list) {
    exerciseList.innerHTML = "";

    list.forEach(exercise => {
        exerciseList.innerHTML += `
            <div class="card">
                <img src="${exercise.image}" alt="${exercise.name}">
                <h3>${exercise.name}</h3>
                <p>${exercise.description}</p>
                <p><strong>${exercise.parameters}</strong></p>
        `;
    });
}

displayExercises(exercises);