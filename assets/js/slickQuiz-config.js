// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Cuestionario pendiente 2",
        "main":    "Cuestionario acerca del tema visto el dia 11/11/2015",
        "results": "<h5>Mas informacion</h5><p>Para mas informacion acerca de este cuestionario consulte www.estapagina.com/textos</p>",
        "level1":  "Perfecto",
        "level2":  "Muy bien",
        "level3":  "Bien",
        "level4":  "Regular",
        "level5":  "Mal" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Pregunta con una sola respuesta",
            "a": [
                {"option": "8",      "correct": false},
                {"option": "14",     "correct": false},
                {"option": "Esta es la correcta",      "correct": true},
                {"option": "23",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Respuesta correcta</span> Aclaraciones sobre la respuesta</p>",
            "incorrect": "<p><span>Respuesta incorrecta</span> Aclaraciones sobre el error, consultar www.estapagina.com/textos</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Pregunta con varias respuestas, solo se puede seleccionar una",
            "a": [
                {"option": "Incorrecta",               "correct": false},
                {"option": "Correcta",   "correct": true},
                {"option": "Incorrecta",               "correct": false},
                {"option": "Correcta tambien", "correct": true} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Respuesta correcta</span> Aclaraciones sobre la respuesta</p>",
            "incorrect": "<p><span>Respuesta incorrecta</span> Aclaraciones sobre el error, consultar www.estapagina.com/textos</p>"
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Preguntas con varias respuestas, se pueden seleccionar todas",
            "a": [
                {"option": "Correcta",           "correct": true},
                {"option": "Incorrecta",                  "correct": false},
                {"option": "Correcta",  "correct": true},
                {"option": "Correcta",          "correct": true} // no comma here
            ],
            "correct": "<p><span>Respuesta correcta</span> Aclaraciones sobre la respuesta</p>",
            "incorrect": "<p><span>Respuesta incorrecta</span> Aclaraciones sobre el error, consultar www.estapagina.com/textos</p>"
        },
        { // Question 4
            "q": "Otra pregunta con una sola respuesta",
            "a": [
                {"option": "Incorrecta",    "correct": false},
                {"option": "Correcta",     "correct": true},
                {"option": "Incorrecta",      "correct": false},
                {"option": "Incorrecta",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Respuesta correcta</span> Aclaraciones sobre la respuesta</p>",
            "incorrect": "<p><span>Respuesta incorrecta</span> Aclaraciones sobre el error, consultar www.estapagina.com/textos</p>"
        },
        { // Question 5
            "q": "Pregunta si o no",
            "a": [
                {"option": "Si (Correcta)",    "correct": true},
                {"option": "No",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Respuesta correcta</span> Aclaraciones sobre la respuesta</p>",
            "incorrect": "<p><span>Respuesta incorrecta</span> Aclaraciones sobre el error, consultar www.estapagina.com/textos</p>"
        } // no comma here
    ]
};
