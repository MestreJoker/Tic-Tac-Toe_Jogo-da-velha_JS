var vez = "X"
        var area1 = document.getElementById('area1')
        area1.innerText = ""
        var area2 = document.getElementById('area2')
        area2.innerText = ""
        var area3 = document.getElementById('area3')
        area3.innerText = ""
        var area4 = document.getElementById('area4')
        area4.innerText = ""
        var area5 = document.getElementById('area5')
        area5.innerText = ""
        var area6 = document.getElementById('area6')
        area6.innerText = ""
        var area7 = document.getElementById('area7')
        area7.innerText = ""
        var area8 = document.getElementById('area8')
        area8.innerText = ""
        var area9 = document.getElementById('area9')
        area9.innerText = ""

        var section = document.getElementsByTagName('section')[0]
        var caixaVencedor = document.getElementById('caixaVencedor')
        var vencedorP = document.getElementById('vencedor')
        var btOk = document.getElementsByTagName('button')[0]
        var caixaEmpate = document.getElementById('caixaEmpate')

        var placarX = document.getElementById('placarX')
        var placarO = document.getElementById('placarO')

        var idiomaSelecionado = document.getElementById('idiomaSelecionado')
        var h1 = document.getElementsByTagName('h1')[0]
        var btResetarPlacar = document.getElementById('btResetarPlacar')
        var vencedorText = document.getElementById('vencedorText')
        var empateText = document.getElementById('empateText')

        var caixaConfirmacao = document.getElementById('caixaConfirmacao')
        var confirmText = document.getElementById('confirmText')
        var btSim = document.getElementsByClassName('btSim')[0]
        var btNao = document.getElementsByClassName('btNao')[0]

        let opcoesIdioma = document.getElementsByClassName('opcoesIdioma')[0];

        function clickArea1() {
            if (vez == "X") {
                area1.innerText = "X"
                vez = "O"
                area1.style.color = "#177597"
                area1.style.pointerEvents = "none"
                verificarJogada()
            }
            else {
                area1.innerText = "O"
                vez = "X"
                area1.style.color = "red"
                area1.style.pointerEvents = "none"
                verificarJogada()
            }
        }

        function clickArea2() {
            if (vez == "X") {
                area2.innerText = "X"
                vez = "O"
                area2.style.color = "#177597"
                area2.style.pointerEvents = "none"
                verificarJogada()
            }
            else {
                area2.innerText = "O"
                vez = "X"
                area2.style.color = "red"
                area2.style.pointerEvents = "none"
                verificarJogada()
            }
        }

        function clickArea3() {
            if (vez == "X") {
                area3.innerText = "X"
                vez = "O"
                area3.style.color = "#177597"
                area3.style.pointerEvents = "none"
                verificarJogada()
            }
            else {
                area3.innerText = "O"
                vez = "X"
                area3.style.color = "red"
                area3.style.pointerEvents = "none"
                verificarJogada()
            }
        }

        function clickArea4() {
            if (vez == "X") {
                area4.innerText = "X"
                vez = "O"
                area4.style.color = "#177597"
                area4.style.pointerEvents = "none"
                verificarJogada()
            }
            else {
                area4.innerText = "O"
                vez = "X"
                area4.style.color = "red"
                area4.style.pointerEvents = "none"
                verificarJogada()
            }
        }

        function clickArea5() {
            if (vez == "X") {
                area5.innerText = "X"
                vez = "O"
                area5.style.color = "#177597"
                area5.style.pointerEvents = "none"
                verificarJogada()
            }
            else {
                area5.innerText = "O"
                vez = "X"
                area5.style.color = "red"
                area5.style.pointerEvents = "none"
                verificarJogada()
            }
        }

        function clickArea6() {
            if (vez == "X") {
                area6.innerText = "X"
                vez = "O"
                area6.style.color = "#177597"
                area6.style.pointerEvents = "none"
                verificarJogada()
            }
            else {
                area6.innerText = "O"
                vez = "X"
                area6.style.color = "red"
                area6.style.pointerEvents = "none"
                verificarJogada()
            }
        }

        function clickArea7() {
            if (vez == "X") {
                area7.innerText = "X"
                vez = "O"
                area7.style.color = "#177597"
                area7.style.pointerEvents = "none"
                verificarJogada()
            }
            else {
                area7.innerText = "O"
                vez = "X"
                area7.style.color = "red"
                area7.style.pointerEvents = "none"
                verificarJogada()
            }
        }

        function clickArea8() {
            if (vez == "X") {
                area8.innerText = "X"
                vez = "O"
                area8.style.color = "#177597"
                area8.style.pointerEvents = "none"
                verificarJogada()
            }
            else {
                area8.innerText = "O"
                vez = "X"
                area8.style.color = "red"
                area8.style.pointerEvents = "none"
                verificarJogada()
            }
        }

        function clickArea9() {
            if (vez == "X") {
                area9.innerText = "X"
                vez = "O"
                area9.style.color = "#177597"
                area9.style.pointerEvents = "none"
                verificarJogada()
            }
            else {
                area9.innerText = "O"
                vez = "X"
                area9.style.color = "red"
                area9.style.pointerEvents = "none"
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

        function resetarAreas(params) {
            area1.innerText = ""
            area1.style.pointerEvents = "auto"
            area2.innerText = ""
            area2.style.pointerEvents = "auto"
            area3.innerText = ""
            area3.style.pointerEvents = "auto"
            area4.innerText = ""
            area4.style.pointerEvents = "auto"
            area5.innerText = ""
            area5.style.pointerEvents = "auto"
            area6.innerText = ""
            area6.style.pointerEvents = "auto"
            area7.innerText = ""
            area7.style.pointerEvents = "auto"
            area8.innerText = ""
            area8.style.pointerEvents = "auto"
            area9.innerText = ""
            area9.style.pointerEvents = "auto"
        }

        function verificarNovoJogo() {
            section.style.display = "flex"
            caixaConfirmacao.style.display = "flex"
        }
        function resetarPlacar(confirmacao) {
            if (confirmacao == true) {
                if(Number(placarX.innerText) > Number(placarO.innerText)){
                    alert("O jogador X ganhou a partida/The player X won the match")
                }
                else if(Number(placarX.innerText) < Number(placarO.innerText)){
                    alert("O jogador O ganhou a partida/The player O won the match")
                }
                else{
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