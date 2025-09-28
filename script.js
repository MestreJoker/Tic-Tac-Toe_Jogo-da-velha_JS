let vez = "X"
let main = document.querySelector('main')
let area = 1
for (let i = 1; i <= 3; i++) {
    main.innerHTML += `<div class="linha${i}"></div>`
    for (let j = 1; j <= 3; j++) {
        let linha = document.querySelector(`.linha${i}`)
        linha.innerHTML +=
            `<div class="area" id="area${area}" onclick="clickArea(${area - 1})"></div>`
        area++
    }
}

let section = document.getElementsByTagName('section')[0]
let caixaVencedor = document.getElementById('caixaVencedor')
let vencedorP = document.getElementById('vencedor')
let btOk = document.getElementsByTagName('button')[0]
let caixaEmpate = document.getElementById('caixaEmpate')

let placarX = document.getElementById('placarX')
let placarO = document.getElementById('placarO')

let idiomaSelecionado = document.getElementById('idiomaSelecionado')
let h1 = document.getElementsByTagName('h1')[0]
let btResetarPlacar = document.getElementById('btResetarPlacar')
let vencedorText = document.getElementById('vencedorText')
let empateText = document.getElementById('empateText')

let caixaConfirmacao = document.getElementById('caixaConfirmacao')
let confirmText = document.getElementById('confirmText')
let btSim = document.getElementsByClassName('btSim')[0]
let btNao = document.getElementsByClassName('btNao')[0]

let opcoesIdioma = document.getElementsByClassName('opcoesIdioma')[0];

let areas = []
for (let i = 1; i <= 9; i++) {
    areas.push(document.getElementById(`area${i}`))
}

function clickArea(area) {
    if (vez == "X") {
        areas[area].innerText = "X"
        vez = "O"
        areas[area].style.color = "#177597"
        areas[area].style.pointerEvents = "none"
        verificarJogada()
    }
    else {
        areas[area].innerText = "O"
        vez = "X"
        areas[area].style.color = "red"
        areas[area].style.pointerEvents = "none"
        verificarJogada()
    }
}

function verificarJogada() {
    // Verificar linhas
    if (
        area1.innerText == "X" && area2.innerText == "X" && area3.innerText == "X" ||
        area4.innerText == "X" && area5.innerText == "X" && area6.innerText == "X" ||
        area7.innerText == "X" && area8.innerText == "X" && area9.innerText == "X"
    ) {
        setTimeout(() => {
            placarX.innerText = String(Number(placarX.innerText) + 1)
            vencedorP.innerText = "X"
            vencedorP.style.color = "#177597"
            section.style.display = "flex"
            caixaVencedor.style.display = "flex"
            caixaEmpate.style.display = "none"

        }, 200);
    } else if (
        area1.innerText == "O" && area2.innerText == "O" && area3.innerText == "O" ||
        area4.innerText == "O" && area5.innerText == "O" && area6.innerText == "O" ||
        area7.innerText == "O" && area8.innerText == "O" && area9.innerText == "O"
    ) {
        setTimeout(() => {
            placarO.innerText = String(Number(placarO.innerText) + 1)
            vencedorP.innerText = "O"
            vencedorP.style.color = "red"
            section.style.display = "flex"
            caixaVencedor.style.display = "flex"
            caixaEmpate.style.display = "none"
        }, 200);
    }

    // Verificar colunas
    else if (
        area1.innerText == "X" && area4.innerText == "X" && area7.innerText == "X" ||
        area2.innerText == "X" && area5.innerText == "X" && area8.innerText == "X" ||
        area3.innerText == "X" && area6.innerText == "X" && area9.innerText == "X"
    ) {
        setTimeout(() => {
            placarX.innerText = String(Number(placarX.innerText) + 1)
            vencedorP.innerText = "X"
            vencedorP.style.color = "#177597"
            section.style.display = "flex"
            caixaVencedor.style.display = "flex"
            caixaEmpate.style.display = "none"
        }, 200);
    } else if (
        area1.innerText == "O" && area4.innerText == "O" && area7.innerText == "O" ||
        area2.innerText == "O" && area5.innerText == "O" && area8.innerText == "O" ||
        area3.innerText == "O" && area6.innerText == "O" && area9.innerText == "O"
    ) {
        setTimeout(() => {
            placarO.innerText = String(Number(placarO.innerText) + 1)
            vencedorP.innerText = "O"
            vencedorP.style.color = "red"
            section.style.display = "flex"
            caixaVencedor.style.display = "flex"
            caixaEmpate.style.display = "none"
        }, 200);
    }

    // Verificar diagonais
    else if (
        area1.innerText == "X" && area5.innerText == "X" && area9.innerText == "X" ||
        area3.innerText == "X" && area5.innerText == "X" && area7.innerText == "X"
    ) {
        setTimeout(() => {
            placarX.innerText = String(Number(placarX.innerText) + 1)
            vencedorP.innerText = "X"
            vencedorP.style.color = "#177597"
            section.style.display = "flex"
            caixaVencedor.style.display = "flex"
            caixaEmpate.style.display = "none"
        }, 200);
    } else if (
        area1.innerText == "O" && area5.innerText == "O" && area9.innerText == "O" ||
        area3.innerText == "O" && area5.innerText == "O" && area7.innerText == "O"
    ) {
        setTimeout(() => {
            placarO.innerText = String(Number(placarO.innerText) + 1)
            vencedorP.innerText = "O"
            vencedorP.style.color = "red"
            section.style.display = "flex"
            caixaVencedor.style.display = "flex"
            caixaEmpate.style.display = "none"
        }, 200);
    }

    else if (
        area1.innerText != "" && area2.innerText != "" && area3.innerText != "" &&
        area4.innerText != "" && area5.innerText != "" && area6.innerText != "" &&
        area7.innerText != "" && area8.innerText != "" && area9.innerText != ""
    ) {
        section.style.display = "flex"
        caixaVencedor.style.display = "none"
        caixaEmpate.style.display = "flex"
    }
}

function clickFora(podeFechar) {
    if (
        !caixaVencedor.contains(event.target) &&
        !caixaEmpate.contains(event.target) &&
        !caixaConfirmacao.contains(event.target) ||
        podeFechar == true
    ) {
        section.style.display = 'none'
        caixaConfirmacao.style.display = "none"
        caixaEmpate.style.display = "none"
        caixaVencedor.style.display = "none"
        resetarAreas()
    }
}

function resetarAreas() {
    for (i in areas) {
        areas[i].innerText = ""
        areas[i].style.pointerEvents = "auto"
    }
}

function verificarNovoJogo() {
    section.style.display = "flex"
    caixaConfirmacao.style.display = "flex"
}
function resetarPlacar(confirmacao) {
    if (confirmacao == true) {
        if (Number(placarX.innerText) > Number(placarO.innerText)) {
            alert("O jogador X ganhou a partida/The player X won the match")
        }
        else if (Number(placarX.innerText) < Number(placarO.innerText)) {
            alert("O jogador O ganhou a partida/The player O won the match")
        }
        else {
            alert("Empate/Draw")
        }
        placarX.innerText = "0"
        placarO.innerText = "0"
        vez = "X"
        section.style.display = "none"
        caixaConfirmacao.style.display = "none"
        resetarAreas()
    }
    else {
        section.style.display = "none"
        caixaConfirmacao.style.display = "none"
    }
}

function mudarLinguagem(linguagem) {
    if (linguagem == 1) {
        idiomaSelecionado.innerText = "🌐 Português"
        h1.innerText = "JOGO DA VELHA"
        btResetarPlacar.innerText = "NOVO JOGO"
        vencedorText.innerHTML = "Ponto para o jogador"
        empateText.innerHTML = "Deu velha!"
        confirmText.innerText = "Tem certeza que deseja iniciar um novo jogo"
        btSim.innerText = "Sim"
        btNao.innerText = "Não"
    }
    else {
        idiomaSelecionado.innerText = "🌐 English"
        h1.innerText = "TIC-TAC-TOE"
        btResetarPlacar.innerText = "NEW GAME"
        vencedorText.innerHTML = "Point for player"
        empateText.innerHTML = "Draw!"
        confirmText.innerText = "Are you sure you want to start a new game?"
        btSim.innerText = "Yes"
        btNao.innerText = "No"
    }
}