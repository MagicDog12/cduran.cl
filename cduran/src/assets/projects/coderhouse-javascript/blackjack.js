"use strict";

//
// Funciones relacionadas con el flujo de juego:
//

// initDeck: Void ->  [Card]
// Inicializa el mazo de cartas
const initDeck = async () => {
    const resp = await fetch("./data.json");
    const data = await resp.json()
    return data.cards;
};

// mixDeck: [Card] -> [Card]
// Mezcla el mazo de forma aleatoria
const mixDeck = (deck) => {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
};

// getCardValue: Card -> int
// Obtiene el valor de una carta
const getCardValue = (card) => {
    const value = card.value;
    if (value === 'A') return 11;
    if (['K', 'Q', 'J'].includes(value)) return 10;
    return parseInt(value);
};

// dealCard: [Card] -> Card
// Reparte una carta del mazo
const dealCard = (deck) => {
    return deck.pop();;
};

// getPoints: [Card] -> int
// Calcula el total de puntos de una mano
const getPoints = (hand) => {
    let total = 0;
    let asCount = 0;
    for (const card of hand) {
        const value = getCardValue(card);
        if (value === 11) asCount++;
        total += value;
    }
    while (total > 21 && asCount > 0) {
        total -= 10;
        asCount--;
    }
    return total;
};

// getResult: [Card] [Card] -> string bool
// Determina el resultado del juego dado la mano del jugador y el dealer
const getResult = (playerHand, dealerHand) => {
    const playerPoints = getPoints(playerHand);
    const dealerPoints = getPoints(dealerHand);
    if (playerPoints > 21) {
        return { message: 'Has perdido. Te pasaste de 21.', win: false };
    } else if (dealerPoints > 21) {
        return { message: '¡Ganaste! El dealer se pasó de 21.', win: true };
    } else if (playerPoints > dealerPoints) {
        return { message: '¡Ganaste! Tienes más puntos que el dealer.', win: true };
    } else if (dealerPoints > playerPoints) {
        return { message: 'Has perdido. El dealer tiene más puntos que tú.', win: false };
    } else {
        return { message: 'Es un empate.', win: true };
    }
};

// startPlayerTurn: string -> Promise
// Ejecuta el turno de un jugador dado el titulo, mensaje e icono para mostrar el mensaje
const startPlayerTurn = (message) => {
    showMessage(message);
    return getPlayerAction()
};

// playerTurn: Void -> Void
//
const playerTurn = async () => {
    const { deck, playerHand, dealerHand } = getGameState();
    let continuePlaying = true;
    while (getPoints(playerHand) < 21 && continuePlaying) {
        const action = await startPlayerTurn('¿Quieres pedir otra carta? (si/no)');
        if (action === 'si') {
            const newCard = dealCard(deck);
            playerHand.push(newCard);
            putGameState({ deck, playerHand, dealerHand });
            const defaultDealerCard = {
                "id": 53,
                "kind": "Default",
                "value": "0",
                "img": "default-2.png"
            }
            showState(playerHand, [dealerHand[0], defaultDealerCard]);
            showImgs(playerHand, [dealerHand[0], defaultDealerCard]);
        } else {
            console.log("no quiero otra carta")
            continuePlaying = false;
        }
    }
};

// playerRound: Void -> Void
//
const playerRound = async () => {
    showMessage('¿Quieres volver a jugar? (si/no)');
    await getPlayerGame();
};

//
// Funciones relacionadas con el almacenamiento del estado del juego
//

// getGameState: Void -> State
// Obtiene el estado del juego desde localStorage
const getGameState = () => {
    const state = localStorage.getItem('gameState');
    return state ? JSON.parse(state) : null;
};

// putGameState: State -> Void
// Guarda el estado del juego en localStorage
const putGameState = (state) => {
    localStorage.setItem('gameState', JSON.stringify(state));
};

// deleteGameState: Void -> Void
// Función para guardar el estado del juego en localStorage
const deleteGameState = () => {
    localStorage.removeItem('gameState');
};

// showState: [Card] [Card] -> Void
// Muestra el estado del juego
const showState = (playerHand, dealerHand) => {
    const playerHandValues = [];
    for (const card of playerHand) {
        playerHandValues.push(card.value);
    }
    const dealerHandValues = [];
    for (const card of dealerHand) {
        if (card.value !== "0") {
            dealerHandValues.push(card.value);
        }
    }
    showMessage(`Tus cartas: ${playerHandValues.join(', ')}. Total de puntos: ${getPoints(playerHand)}. Cartas visibles del dealer: ${dealerHandValues.join(', ')}. Total de puntos del dealer: ${getPoints(dealerHand)}.`);
};

//
// Juego principal
//

// playGame: Void -> Void
// Simula una partida del juego de Black Jack
const playGame = async () => {
    let main = 'si';

    while (main === 'si') {
        // Se reinicia el juego
        deleteMessage();
        deleteGameState();
        resetCardsImg();
        // Inicia el juego
        let gameState = getGameState();
        let deck, playerHand, dealerHand;
        if (!gameState) {
            deck = mixDeck(await initDeck());
            playerHand = [dealCard(deck), dealCard(deck)];
            dealerHand = [dealCard(deck), dealCard(deck)];
            putGameState({ deck, playerHand, dealerHand });
        } else {
            deck = gameState.deck;
            playerHand = gameState.playerHand;
            dealerHand = gameState.dealerHand;
            putGameState({ deck, playerHand, dealerHand });
        }
        const defaultDealerCard = {
            "id": 53,
            "kind": "Default",
            "value": "0",
            "img": "default-2.png"
        }
        showState(playerHand, [dealerHand[0], defaultDealerCard]);
        showImgs(playerHand, [dealerHand[0], defaultDealerCard]);

        // Turno del jugador
        await playerTurn();

        const newState = getGameState();
        deck = newState.deck;
        playerHand = newState.playerHand;
        dealerHand = newState.dealerHand;
        showImgs(playerHand, dealerHand);
        // Turno del dealer
        while (getPoints(dealerHand) < 17) {
            console.log("jugando dealer")
            const newCard = dealCard(deck);
            dealerHand.push(newCard);
            putGameState({ deck, playerHand, dealerHand });
        }
        console.log("termina turno dealer")
        showImgs(playerHand, dealerHand);
        // Muestra las manos finales
        const playerHandValues = [];
        for (const card of playerHand) {
            playerHandValues.push(card.value);
        }
        const dealerHandValues = [];
        for (const card of dealerHand) {
            dealerHandValues.push(card.value);
        }
        showMessage(`Mano del jugador: ${playerHandValues.join(', ')}. Total de puntos: ${getPoints(playerHand)}`);
        showMessage(`Mano del dealer: ${dealerHandValues.join(', ')}. Total de puntos: ${getPoints(dealerHand)}`);

        // Determina el resultado del juego
        const { message, win } = getResult(playerHand, dealerHand);
        showMessage(message);
        deleteGameState();
        if (win) {
            showAlert('Felicidades', message, 'success');
            // Solicita volver a jugar
            await playerRound();
            main = gameInput.value.toLowerCase().trim();
        } else {
            showAlert('Lo siento', message, 'error');
            // Solicita volver a jugar
            await playerRound();
            main = gameInput.value.toLowerCase().trim();
        }
    }
    deleteMessage();
    deleteGameState();
    resetCardsImg();
    showAlert('Gracias por jugar', 'Espero que te haya gustado el juego', 'info');
};

//
// Funciones relacionadas con el uso del DOM
//

// Obtener referencias a elementos del DOM
const playButton = document.getElementById('playButton');
const historialDiv = document.getElementById('historial');
const actionInput = document.getElementById('actionInput');
const actionButton = document.getElementById('actionButton');
const gameInput = document.getElementById('gameInput');
const gameButton = document.getElementById('gameButton');
const playerCardsDiv = document.getElementById('playerCards');
const dealerCardsDiv = document.getElementById('dealerCards');

// Asignar evento al botón para iniciar el juego
playButton.addEventListener('click', playGame);

// showMessage: string -> Void
// Muestra los mensajes en el historial
const showMessage = (message) => {
    const messageDiv = document.createElement('p');
    messageDiv.textContent = message;
    historialDiv.appendChild(messageDiv);
};

// deleteMessage: Void -> Void
// Borra los mensajes del historial
const deleteMessage = () => {
    historialDiv.textContent = "Historial: \n";
};

// showAlert: string string string -> Void
// Muestra una alerta usando sweet alerta con un titulo, mensaje e icono.
const showAlert = (title, message, icon) => {
    Swal.fire({
        title: title,
        text: message,
        icon: icon,
        showConfirmButton: false,
        timer: 2500
    })
};

// getPlayerAction: Void -> Promise
// Obtiene la accion de un jugador para saber si es que va a agregar una nueva carta
const getPlayerAction = () => {
    return new Promise(resolve => {
        const clickHandler = () => {
            const action = actionInput.value.toLowerCase().trim();
            resolve(action);
            actionButton.removeEventListener('click', clickHandler); // Elimina el listener después de la jugada
        };
        actionButton.addEventListener('click', clickHandler);
    });
};

// getPlayerGame: Void -> Promise
// Obtiene el juego de un jugador para saber si es que va a querer jugar otra partida
const getPlayerGame = () => {
    return new Promise(resolve => {
        const clickHandler = () => {
            const game = gameInput.value.toLowerCase().trim();
            resolve(game);
            gameButton.removeEventListener('click', clickHandler);
        };
        gameButton.addEventListener('click', clickHandler);
    });
};

// addCardImg: Card HTMLElement -> Void
// Crea y agrega una carta al DOM
const addCardImg = (card, container) => {
    const { kind, value, img } = card;
    let newDiv = document.createElement('div');
    newDiv.classList.add('col');
    let newImg = document.createElement('img');
    newImg.src = "./img/" + img;
    newImg.classList.add("img-thumbnail");
    newImg.alt = "Carta " + value + " de " + kind;
    newDiv.appendChild(newImg);
    container.appendChild(newDiv);
};

// resetCardsImg: Void -> Void
// Borra todas las cartas y pone las cartas por defecto en el DOM
const resetCardsImg = () => {
    while (playerCardsDiv.firstChild) {
        playerCardsDiv.removeChild(playerCardsDiv.firstChild);
    }
    while (dealerCardsDiv.firstChild) {
        dealerCardsDiv.removeChild(dealerCardsDiv.firstChild);
    }
    createDefaultCards();
};

// createDefaultCards: Void -> Void
// Crea las cartas por defecto y las agrega a los contenedores
const createDefaultCards = () => {
    let divDefault1 = document.createElement('div');
    let divDefault2 = document.createElement('div');
    let divDefault3 = document.createElement('div');
    let divDefault4 = document.createElement('div');
    divDefault1.classList.add('col');
    divDefault2.classList.add('col');
    divDefault3.classList.add('col');
    divDefault4.classList.add('col');
    let imgDefault1 = document.createElement('img');
    let imgDefault2 = document.createElement('img');
    let imgDefault3 = document.createElement('img');
    let imgDefault4 = document.createElement('img');
    imgDefault1.src = "./img/default-1.png";
    imgDefault2.src = "./img/default-1.png";
    imgDefault3.src = "./img/default-2.png";
    imgDefault4.src = "./img/default-2.png";
    imgDefault1.classList.add("img-thumbnail");
    imgDefault2.classList.add("img-thumbnail");
    imgDefault3.classList.add("img-thumbnail");
    imgDefault4.classList.add("img-thumbnail");
    imgDefault1.alt = "Carta por defecto";
    imgDefault2.alt = "Carta por defecto";
    imgDefault3.alt = "Carta por defecto";
    imgDefault4.alt = "Carta por defecto";
    divDefault1.appendChild(imgDefault1);
    divDefault2.appendChild(imgDefault2);
    divDefault3.appendChild(imgDefault3);
    divDefault4.appendChild(imgDefault4);
    playerCardsDiv.appendChild(divDefault1);
    playerCardsDiv.appendChild(divDefault2);
    dealerCardsDiv.appendChild(divDefault3);
    dealerCardsDiv.appendChild(divDefault4);
};

// showImgs: [Card] [Card] -> Void
// Muestra las cartas actuales en el DOM
const showImgs = (playerHand, dealerHand) => {
    deleteOldImgs();
    for (const card of playerHand) {
        addCardImg(card, playerCardsDiv);
    }
    for (const card of dealerHand) {
        addCardImg(card, dealerCardsDiv);
    }
}

// deleteOldImgs: Void -> Void
// Quita las cartas antiguas en el DOM
const deleteOldImgs = () => {
    while (playerCardsDiv.firstChild) {
        playerCardsDiv.removeChild(playerCardsDiv.firstChild);
    }
    while (dealerCardsDiv.firstChild) {
        dealerCardsDiv.removeChild(dealerCardsDiv.firstChild);
    }
}
