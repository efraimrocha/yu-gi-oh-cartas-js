
// Criando os states da engine.
const state = {
    score: {
        playerScore: 0,
        computerScore: 0,
        scorebox: document.getElementById('score_points'),
    },
    cardSprites: {
        avatar: document.getElementById("card-image"),
        name: document.getElementById("card-image"),
        type: document.getElementById("card-image"),
    },
    fieldCards: {
        player: document.getElementById("player-field-card"),
        computer: document.getElementById("computer-field-card")
    },
    actions: {
        buttom: document.getElementById("next-duel"),
    },
};
//----------------------------------------------------------

// Cia mapeamento das cartas. 
// Idealmente essas cartas estariamem um banco de dados.
// Por hora a idéia é o foco na lógica do game.

//----------------------------------------------------------
// Criando enumeração das cartas.

// Cria o pathImagens para recuperar esse caminho quando necessário
const patthImages = ".src/assets/icons/"

// cardData é a lista de objetos que irá fazer o pabel de base de dados.
// Enumeração das cartas.
const cardData = [
    {
        id: 0,
        name: "Blue Eyes White Dragon",
        type: "Paper",
        img: `${patthImages}gradon.png`,
        WinOf: [1],
        LoseOf: [2],
    },
    {
        id: 1,
        name: "Dark Magician",
        type: "Rock",
        img: `${patthImages}gradon.png`,
        WinOf: [2],
        LoseOf: [0],
    },
    {
        id: 2,
        name: "Exodia",
        type: "Scissors",
        img: `${patthImages}exodia.png`,
        WinOf: [0],
        LoseOf: [1],
    },
];


// const players = {
//     player1: "player_cards",
// };



// Função principal que chama o restante das outras funções do game.
function init(){
}
// Chama a função princpal para inicio do jogo.
init();