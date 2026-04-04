ships = {
    1: {
        "question": "Who created the first calculator?",
        "answers": ["Blas Pascal", "Luis Witton"],
        "correct": "Blas Pascal"
    },

    2: {
        "question": "What is Newton's Second Law?",
        "answers": ["F = ma", "E = mc²"],
        "correct": "F = ma"
    },

    3: {
        "question": "Unit of electric current?",
        "answers": ["Ampere", "Volt"],
        "correct": "Ampere"
    }
}


def check_answer(ship_id, answer):
    correct = ships[ship_id]["correct"]
    return answer == correct