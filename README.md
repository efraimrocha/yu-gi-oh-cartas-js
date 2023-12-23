# YU-GU-OH - Jokenpô


## Visão geral
Bem-vindo ao jogo YU-GU-OH - Jokenpô. Este jogo foi desenvolvido como projeto LAB do Bootcamp Potencia Tech IFOOD realizado pela Digital Innovation One. Este README fornece uma visão geral abrangente da base de código e das funcionalidades do jogo.

## Índice
* Introdução
* Estados do jogo
* Dados do cartão
* Geração aleatória de cartões
* Renderização de cartão
* Lógica de Duelo
* Gerenciamento de pontuação
* Integração de áudio
* Inicialização
* Como jogar
* Introdução

O YU-GU-OH - Jokenpô é um jogo de duelo de cartas onde os jogadores competem contra o computador. Cada jogador possui um conjunto de cartas com atributos diferentes, e o objetivo é vencer duelos selecionando cartas estrategicamente.

## Estados do jogo
O jogo mantém vários estados usando o stateobjeto, incluindo:

* Pontuação : rastreia as pontuações do jogador e do computador.
* Sprites de cartões : gerencia imagens e detalhes de cartões na interface do usuário.
* Field Cards : Manipula a exibição de cartas de jogadores e de computador em campo.
* Lados do Jogador : Define os lados do jogador e do computador para renderização de cartas.
* Ações : Gerencia os botões de ação do jogo.

## Dados do cartão
O jogo possui um conjunto predefinido de cartas armazenadas no cardDataarray. Cada cartão possui um ID, nome, tipo, caminho da imagem e informações sobre como ganhar e perder contra outros tipos de cartão.

## Geração aleatória de cartões
A getRandomCardIdfunção gera um ID de cartão aleatório a partir dos dados do cartão.

## Renderização de cartão
A renderização de cartas é feita por funções como createCardImagee drawCards, exibindo cartas nos lados do jogador e do computador.

## Lógica de Duelo
A lógica central do jogo está em funções como setCardsFielde checkDuelResults. Essas funções gerenciam o fluxo dos duelos, incluindo seleção de cartas, determinação de vencedores e atualização de pontuações.

## Gerenciamento de pontuação
O jogo acompanha as pontuações e atualiza a IU de acordo com a updateScorefunção.

## Integração de áudio
O feedback de áudio é fornecido durante o jogo usando a playAudiofunção. Cenários de vitória e derrota acionam efeitos de áudio correspondentes.

## Inicialização
A initfunção inicializa o jogo ocultando detalhes das cartas, comprando cartas iniciais para ambos os jogadores e iniciando música de fundo.

## Como jogar
Para jogar o jogo YU-GU-OH - JokenpôO:

Siga os passos abaixo ou clique aqui:

1. Abra o arquivo HTML em um navegador.
2. As cartas são sorteadas automaticamente para ambos os jogadores.
3. Passe o mouse sobre seus cartões para ver os detalhes.
4. Clique em um cartão para selecioná-lo.
5. Clique no botão “Próximo duelo” para revelar a carta do computador e determinar o vencedor.
6. Repita as etapas 3 a 5 até ficar satisfeito ou reinicie o duelo.
   
Divirta-se jogando o jogo YU-GU-OH - Jokenpô.
