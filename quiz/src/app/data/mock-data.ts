import { Quiz } from '../models/quiz';
import { QuestionType } from '../models/question-type';

const QUESTIONTYPE: QuestionType[] = [
    {
        id: 1,
        name: 'unique answer'
    }
];

export const QUIZ: Quiz[] = [
    {
        id: 1,
        name: 'CSS',
        description: 'Prueba de conocimiento CSS',
        questions: [
            {
                id: 1,
                name: '¿Qué significa CSS?',
                quizId: 1,
                questionTypeId: 1,
                answers: [
                    {
                        id: 1,
                        name: 'Creative Style Sheets',
                        questionId: 1,
                        isAnswer: false,
                        selected: false
                    },
                    {
                        id: 2,
                        name: 'Colorful Style Sheets',
                        questionId: 1,
                        isAnswer: false,
                        selected: false
                    },
                    {
                        id: 3,
                        name: 'Cascading Style Sheets',
                        questionId: 1,
                        isAnswer: true,
                        selected: false
                    },
                    {
                        id: 4,
                        name: 'Computer Style Sheets',
                        questionId: 1,
                        isAnswer: false,
                        selected: false
                    },
                ]
            },
            {
                id: 2,
                name: '¿Cuál es el HTML correcto para referenciar a una hoja de estilo externa?',
                quizId: 1,
                questionTypeId: 1,
                answers: [
                    {
                        id: 5,
                        name: '<stylesheet>mystyle.css</stylesheet>',
                        questionId: 2,
                        isAnswer: false,
                        selected: false
                    },
                    {
                        id: 6,
                        name: '<link rel="stylesheet" type="text/css" href="mystyle.css">',
                        questionId: 2,
                        isAnswer: true,
                        selected: false
                    },
                    {
                        id: 7,
                        name: '<style src="mystyle.css">',
                        questionId: 2,
                        isAnswer: false,
                        selected: false
                    },
                ]
            },
            {
                id: 3,
                name: '¿Cuál es el lugar correcto para colocar la referencia a una hoja de estilo externa dentro de un documento HTML?',
                quizId: 1,
                questionTypeId: 1,
                answers: [
                    {
                        id: 8,
                        name: 'En la sección <head>',
                        questionId: 3,
                        isAnswer: true,
                        selected: false
                    },
                    {
                        id: 9,
                        name: 'En la sección <body>',
                        questionId: 3,
                        isAnswer: false,
                        selected: false
                    },
                    {
                        id: 10,
                        name: 'Al final del documento',
                        questionId: 3,
                        isAnswer: false,
                        selected: false
                    },
                ]
            },
            {
                id: 4,
                name: '¿Qué etiqueta HTML se utiliza para definir una hoja de estilo interna?',
                quizId: 1,
                questionTypeId: 1,
                answers: [
                    {
                        id: 11,
                        name: '<style>',
                        questionId: 4,
                        isAnswer: true,
                        selected: false
                    },
                    {
                        id: 12,
                        name: '<script>',
                        questionId: 4,
                        isAnswer: false,
                        selected: false
                    },
                    {
                        id: 13,
                        name: '<css>',
                        questionId: 4,
                        isAnswer: false,
                        selected: false
                    },
                ]
            },
            {
                id: 5,
                name: '¿Qué atributo HTML se usa para definir los estilos de línea?',
                quizId: 1,
                questionTypeId: 1,
                answers: [
                    {
                        id: 14,
                        name: 'styles',
                        questionId: 5,
                        isAnswer: false,
                        selected: false
                    },
                    {
                        id: 15,
                        name: 'font',
                        questionId: 5,
                        isAnswer: false,
                        selected: false
                    },
                    {
                        id: 16,
                        name: 'style',
                        questionId: 5,
                        isAnswer: true,
                        selected: false
                    },
                    {
                        id: 17,
                        name: 'class',
                        questionId: 5,
                        isAnswer: false,
                        selected: false
                    },
                ]
            }
        ]
    },
    {
        id: 2,
        name: 'JavaScript',
        description: 'Prueba de conocimiento JavaScript',
        questions: [
            {
                id: 6,
                name: '¿Dentro de qué elemento HTML ponemos el JavaScript?',
                quizId: 2,
                questionTypeId: 1,
                answers: [
                    {
                        id: 18,
                        name: '<javascript>',
                        questionId: 6,
                        isAnswer: false,
                        selected: false
                    },
                    {
                        id: 19,
                        name: '<js>',
                        questionId: 6,
                        isAnswer: false,
                        selected: false
                    },
                    {
                        id: 20,
                        name: '<scripting>',
                        questionId: 6,
                        isAnswer: false,
                        selected: false
                    },
                    {
                        id: 21,
                        name: '<script>',
                        questionId: 6,
                        isAnswer: true,
                        selected: false
                    },
                ]
            },
            {
                id: 7,
                name: '¿Dónde es el lugar correcto para insertar código JavaScript?',
                quizId: 2,
                questionTypeId: 1,
                answers: [
                    {
                        id: 21,
                        name: 'La sección <body>',
                        questionId: 7,
                        isAnswer: false,
                        selected: false
                    },
                    {
                        id: 22,
                        name: 'Tanto la sección <head> como la sección <body> son correctas',
                        questionId: 7,
                        isAnswer: true,
                        selected: false
                    },
                    {
                        id: 23,
                        name: 'La sección <head>',
                        questionId: 7,
                        isAnswer: false,
                        selected: false
                    }
                ]
            },
            {
                id: 8,
                name: '¿Cuál es la sintaxis correcta para referencia a un script externo llamado "xxx.js"?',
                quizId: 2,
                questionTypeId: 1,
                answers: [
                    {
                        id: 24,
                        name: '<script name="xxx.js">',
                        questionId: 8,
                        isAnswer: false,
                        selected: false
                    },
                    {
                        id: 25,
                        name: '<script src="xxx.js">',
                        questionId: 8,
                        isAnswer: true,
                        selected: false
                    },
                    {
                        id: 26,
                        name: '<script href="xxx.js">',
                        questionId: 8,
                        isAnswer: false,
                        selected: false
                    }
                ]
            },
            {
                id: 9,
                name: 'El archivo JavaScript externo debe contener la etiqueta <script>.',
                quizId: 2,
                questionTypeId: 1,
                answers: [
                    {
                        id: 27,
                        name: 'Si',
                        questionId: 9,
                        isAnswer: true,
                        selected: false
                    },
                    {
                        id: 28,
                        name: 'No',
                        questionId: 9,
                        isAnswer: false,
                        selected: false
                    }
                ]
            },
            {
                id: 10,
                name: '¿Cómo se imprime "Hello World" en un cuadro de diálogo?',
                quizId: 2,
                questionTypeId: 1,
                answers: [
                    {
                        id: 29,
                        name: 'alertBox("Hello World");',
                        questionId: 10,
                        isAnswer: false,
                        selected: false
                    },
                    {
                        id: 30,
                        name: 'msgBox("Hello World");',
                        questionId: 10,
                        isAnswer: false,
                        selected: false
                    },
                    {
                        id: 31,
                        name: 'msg("Hello World");',
                        questionId: 10,
                        isAnswer: false,
                        selected: false
                    },
                    {
                        id: 32,
                        name: 'alert("Hello World");',
                        questionId: 10,
                        isAnswer: true,
                        selected: false
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        name: 'HTML',
        description: 'Prueba de conocimiento HTML',
        questions: [
            {
                id: 11,
                name: '¿Qué significa HTML?',
                quizId: 3,
                questionTypeId: 1,
                answers: [
                    {
                        id: 33,
                        name: 'Hyperlinks and Text Markup Language',
                        questionId: 11,
                        isAnswer: false,
                        selected: false
                    },
                    {
                        id: 34,
                        name: 'Hyper Text Markup Language',
                        questionId: 11,
                        isAnswer: true,
                        selected: false
                    },
                    {
                        id: 35,
                        name: 'Home Tool Markup Language',
                        questionId: 11,
                        isAnswer: false,
                        selected: false
                    },
                ]
            },
            {
                id: 12,
                name: '¿Quién está haciendo los estándares web?',
                quizId: 3,
                questionTypeId: 1,
                answers: [
                    {
                        id: 36,
                        name: 'Mozilla',
                        questionId: 12,
                        isAnswer: false,
                        selected: false
                    },
                    {
                        id: 37,
                        name: 'The World Wide Web Consortium',
                        questionId: 12,
                        isAnswer: true,
                        selected: false
                    },
                    {
                        id: 38,
                        name: 'Microsoft',
                        questionId: 12,
                        isAnswer: false,
                        selected: false
                    },
                    {
                        id: 39,
                        name: 'Google',
                        questionId: 12,
                        isAnswer: false,
                        selected: false
                    },
                ]
            },
            {
                id: 13,
                name: 'Elija el elemento HTML correcto para el encabezado más grande:',
                quizId: 3,
                questionTypeId: 1,
                answers: [
                    {
                        id: 40,
                        name: '<head>',
                        questionId: 13,
                        isAnswer: false,
                        selected: false
                    },
                    {
                        id: 41,
                        name: '<h6>',
                        questionId: 13,
                        isAnswer: false,
                        selected: false
                    },
                    {
                        id: 42,
                        name: '<h1>',
                        questionId: 13,
                        isAnswer: true,
                        selected: false
                    },
                    {
                        id: 43,
                        name: '<heading>',
                        questionId: 13,
                        isAnswer: false,
                        selected: false
                    },
                ]
            },
            {
                id: 14,
                name: '¿Cuál es el elemento HTML correcto para insertar un salto de línea?',
                quizId: 3,
                questionTypeId: 1,
                answers: [
                    {
                        id: 44,
                        name: '<break>',
                        questionId: 14,
                        isAnswer: false,
                        selected: false
                    },
                    {
                        id: 45,
                        name: '<lb>',
                        questionId: 14,
                        isAnswer: false,
                        selected: false
                    },
                    {
                        id: 46,
                        name: '<br>',
                        questionId: 14,
                        isAnswer: true,
                        selected: false
                    }
                ]
            },
            {
                id: 15,
                name: 'Elija el elemento HTML correcto para definir el texto importante',
                quizId: 3,
                questionTypeId: 1,
                answers: [
                    {
                        id: 44,
                        name: '<i>',
                        questionId: 15,
                        isAnswer: false,
                        selected: false
                    },
                    {
                        id: 45,
                        name: '<b>',
                        questionId: 15,
                        isAnswer: false,
                        selected: false
                    },
                    {
                        id: 46,
                        name: '<strong>',
                        questionId: 15,
                        isAnswer: true,
                        selected: false
                    },
                    {
                        id: 46,
                        name: '<important>',
                        questionId: 15,
                        isAnswer: false,
                        selected: false
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        name: 'SQL',
        description: 'Prueba de conocimiento SQL',
        questions: [
            {
                id: 16,
                name: '¿Qué significa SQL?',
                quizId: 4,
                questionTypeId: 1,
                answers: [
                    {
                        id: 47,
                        name: 'Strong Question Language',
                        questionId: 16,
                        isAnswer: false,
                        selected: false
                    },
                    {
                        id: 48,
                        name: 'Structured Query Language',
                        questionId: 16,
                        isAnswer: true,
                        selected: false
                    },
                    {
                        id: 49,
                        name: 'Structured Question Language',
                        questionId: 16,
                        isAnswer: false,
                        selected: false
                    },
                ]
            },
            {
                id: 17,
                name: '¿Qué declaración SQL se utiliza para extraer datos de una base de datos?',
                quizId: 4,
                questionTypeId: 1,
                answers: [
                    {
                        id: 50,
                        name: 'SELECT',
                        questionId: 17,
                        isAnswer: true,
                        selected: false
                    },
                    {
                        id: 51,
                        name: 'GET',
                        questionId: 17,
                        isAnswer: false,
                        selected: false
                    },
                    {
                        id: 52,
                        name: 'OPEN',
                        questionId: 17,
                        isAnswer: false,
                        selected: false
                    },
                    {
                        id: 53,
                        name: 'EXTRACT',
                        questionId: 17,
                        isAnswer: false,
                        selected: false
                    },
                ]
            },
            {
                id: 18,
                name: '¿Qué declaración SQL se usa para actualizar datos en una base de datos?',
                quizId: 4,
                questionTypeId: 1,
                answers: [
                    {
                        id: 54,
                        name: 'SAVE AS',
                        questionId: 18,
                        isAnswer: false,
                        selected: false
                    },
                    {
                        id: 55,
                        name: 'SAVE',
                        questionId: 18,
                        isAnswer: false,
                        selected: false
                    },
                    {
                        id: 56,
                        name: 'MODIFY',
                        questionId: 18,
                        isAnswer: false,
                        selected: false
                    },
                    {
                        id: 57,
                        name: 'UPDATE',
                        questionId: 18,
                        isAnswer: true,
                        selected: false
                    },
                ]
            },
            {
                id: 19,
                name: '¿Qué declaración SQL se utiliza para eliminar datos de una base de datos?',
                quizId: 4,
                questionTypeId: 1,
                answers: [
                    {
                        id: 58,
                        name: 'REMOVE',
                        questionId: 19,
                        isAnswer: false,
                        selected: false
                    },
                    {
                        id: 59,
                        name: 'DELETE',
                        questionId: 19,
                        isAnswer: true,
                        selected: false
                    },
                    {
                        id: 60,
                        name: 'COLLAPSE',
                        questionId: 19,
                        isAnswer: false,
                        selected: false
                    }
                ]
            },
            {
                id: 20,
                name: '¿Qué declaración SQL se usa para insertar nuevos datos en una base de datos?',
                quizId: 4,
                questionTypeId: 1,
                answers: [
                    {
                        id: 44,
                        name: 'ADD RECORD',
                        questionId: 20,
                        isAnswer: false,
                        selected: false
                    },
                    {
                        id: 45,
                        name: 'INSERT NEW',
                        questionId: 20,
                        isAnswer: false,
                        selected: false
                    },
                    {
                        id: 46,
                        name: 'INSERT INTO',
                        questionId: 20,
                        isAnswer: true,
                        selected: false
                    },
                    {
                        id: 46,
                        name: 'ADD NEW',
                        questionId: 20,
                        isAnswer: false,
                        selected: false
                    }
                ]
            }
        ]
    }
];