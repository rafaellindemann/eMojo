

let usuario = {
    id: INT,
    nome: '',
    username: '',
    senha:''
}

let usuarios = []

let post = {
    ID: INT,
    autorID: INT,
    emoji: '',
    texto: '',
    data: DATE,
    reacts: [
        react,
    ],
    comentarios:[
        comentario
    ]
}

let posts = []

let comentario = {
    ID: INT,
    postID: INT,
    autorID:INT,
    texto: '',
    reacts: [react]
}

let react = {
    emoji: '',
    qtd: INT
}
