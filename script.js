const exercises = [
    {
        bodyPart: "neck",
        name: "Chin Tuck",
        description: "Roll your chin down to your chest as if looking at your upper chest.",
        parameters: "3 sets, 10 reps",
        image: "images/chintuck.png",
    },
    {
        bodyPart: "neck",
        name: "Upper Trap Stretch",
        description: "Gently tilt your head to one side to stretch the opposite side of your neck.",
        parameters: "3 sets, 20–30 sec hold",
        image: "images/utstretch.png"
    },
    {
        bodyPart: "neck",
        name: "Neck Rotation",
        description: "Slowly turn your head side to side within a comfortable range.",
        parameters: "3 sets, 10 reps each side",
        image: "images/neckrot.png"
    },
    {
        bodyPart: "shoulder",
        name: "Scap Retraction",
        description: "Pinch your shoulder blades together.",
        parameters: "3 sets, 10 reps",
        image: "images/scapsqueeze.png",
    },
    {
        bodyPart: "shoulder",
        name: "Wall Slides",
        description: "Slide your arms up a wall while keeping them in contact with the surface.",
        parameters: "3 sets, 10 reps",
        image: "images/wallslide.png"
    },
    {
        bodyPart: "shoulder",
        name: "Shoulder External Rotation",
        description: "Rotate your arm outward while keeping your elbow at your side.",
        parameters: "3 sets, 10 reps",
        image: "images/shoulderER.png"
    },
    {
        bodyPart: "hip",
        name: "Bridge",
        description: "Lift your buttocks in the air.",
        parameters: "3 sets, 10 reps",
        image: "images/bridge.png",
    },
    {
        bodyPart: "hip",
        name: "Clamshell",
        description: "Lie on your side and lift your top knee while keeping your feet together.",
        parameters: "3 sets, 12 reps",
        image: "images/clam.png"
    },
    {
        bodyPart: "hip",
        name: "Hip Flexor Stretch",
        description: "Step into a lunge and gently push your hips forward to stretch the front of your hip.",
        parameters: "3 sets, 20–30 sec hold",
        image: "images/hipflexorstr.png"
    },
    {
        bodyPart: "knee",
        name: "Knee Extension",
        description: "Straighten your knee. Lower slowly.",
        parameters: "3 sets, 10 reps",
        image: "images/kneeExt.png",
    },
    {
        bodyPart: "knee",
        name: "Straight Leg Raise",
        description: "Lift your leg straight up while keeping your knee locked.",
        parameters: "3 sets, 10 reps",
        image: "images/straightlegraise.png"
    },
    {
        bodyPart: "knee",
        name: "Hamstring Curl",
        description: "Bend your knee to bring your heel toward your buttocks.",
        parameters: "3 sets, 10 reps",
        image: "images/hscurl.png"
    },
    {
        bodyPart: "ankle",
        name: "Heel Raise",
        description: "Raise your heels off the ground.",
        parameters: "3 sets, 10 reps",
        image: "images/heelraise.png",
    },
    {
        bodyPart: "ankle",
        name: "Ankle Circles",
        description: "Rotate your ankle in a circular motion in both directions.",
        parameters: "3 sets, 10 reps each direction",
        image: "images/anklecircle.png"
    },
    {
        bodyPart: "ankle",
        name: "Toe Raises",
        description: "Lift your toes off the ground while keeping your heels planted.",
        parameters: "3 sets, 10 reps",
        image: "images/toeraise.png"
    }
]

const exerciseList = document.getElementById("exerciseList");
const bodyPartSelect = document.getElementById("bodypart");
const searchInput = document.getElementById("search");
const searchForm = document.getElementById("search-container");


function displayExercises(list) {
    exerciseList.innerHTML = "";

    if (list.length === 0) {
        exerciseList.innerHTML = "<p>No exercises found.</p>";
        return;
    }

    for (let exercise of list) {
        exerciseList.innerHTML += `
            <div class="card">
                <img src="${exercise.image}" alt="${exercise.name}">
                <h3>${exercise.name}</h3>
                <p>${exercise.description}</p>
                <p><strong>${exercise.parameters}</strong></p>
            </div>
        `;
    }
}


function filterExercises() {
    const selectedBodyPart = bodyPartSelect.value;
    const searchText = searchInput.value.toLowerCase();

    let results = [];

    for (let exercise of exercises) {
        let matchesBodyPart = false;
        let matchesSearch = false;

        if (selectedBodyPart === "all") {
            matchesBodyPart = true;
        } else if (exercise.bodyPart === selectedBodyPart) {
            matchesBodyPart = true;
        }

        if (searchText === "") {
            matchesSearch = true;
        } else if (
            exercise.name.toLowerCase().includes(searchText) ||
            exercise.description.toLowerCase().includes(searchText)
        ) {
            matchesSearch = true;
        }

        if (matchesBodyPart && matchesSearch) {
            results.push(exercise);
        }
    }

    displayExercises(results)
}


filterExercises();

document.getElementById("bodypart").addEventListener("change", filterExercises);
document.getElementById("search").addEventListener("input", filterExercises);
searchForm.addEventListener("submit", function(event){
    event.preventDefault();
    filterExercises();
});