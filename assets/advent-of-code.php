<?php
//Template Name: AdventOfCode
?>
<!-- create basic html -->
<!DOCTYPE html>
<html>
<head>
    <!-- import scripts.js -->
    <script type="text/javascript" src="https://zbra.dev/wp-content/themes/zbra/assets/js/scripts_AoC.js"></script>
    <!-- import styles.css -->
    <link rel="stylesheet" href="https://zbra.dev/wp-content/themes/zbra/assets/css/styles_AoC.css">
    <!-- import font -->
    <link rel="stylesheet" href="https://use.typekit.net/wyk8hzs.css">

    <title>ZBRA - Advent of Code</title>
</head>
<body>
  <div class="App">
    <header>
      <div class="container">
        <nav class="navbar">
          <img src="https://zbra.dev/wp-content/themes/zbra/assets/images/ZBRA_Logo_AoC.svg" alt="logo zbra" />
          <ul class="web-menu">
            <li>
              <a href="#what-is-advent">O que é?</a>
            </li>
            <li>
              <a href="#how-it-works">Como funciona?</a>
            </li>
            <li>
              <a href="#whyzbrasupports">Porque a ZBRA apoia?</a>
            </li>
            <li>
              <a href="#joinwithzbra">Participe com a ZBRA</a>
            </li>
            <li>
              <a href="#getready">Prepare-se</a>
            </li>
            <li>
              <a href="#meetzbra">Conheça a ZBRA</a>
            </li>
            <li>
              <a href="#meetzbra" class="green-button">FAÇA PARTE</a>
            </li>
          </ul>

          <div class="nav-menu">
            <div class='header-mobile-menu'>
              <img src="https://zbra.dev/wp-content/themes/zbra/assets/images/ZBRA_Logo_AoC.svg" alt="logo zbra" />
              <div class="close" onclick="handleClick()">
                <img src="https://zbra.dev/wp-content/themes/zbra/assets/images/icons/close-icon.svg" alt="close icon" class='close-icon' />
              </div>
            </div>
            <ul>
              <li class="nav-item" onclick="handleClick()">
                <a href="#what-is-advent"> O que é? </a>
              </li>
              <li class="nav-item" onclick="handleClick()">
                <a href="#how-it-works"> Como funciona? </a>
              </li>
              <li class="nav-item" onclick="handleClick()">
                <a href="#whyzbrasupports"> Porque a ZBRA apoia? </a>
              </li>
              <li class="nav-item" onclick="handleClick()">
                <a href="#joinwithzbra"> Participe com a ZBRA </a>
              </li>
              <li class="nav-item" onclick="handleClick()">
                <a href="#getready"> Prepare-se </a>
              </li>
              <li class="nav-item" onclick="handleClick()">
                <a href="#meetzbra"> Conheça a ZBRA</a>
              </li>
              <li class="nav-item" onclick="handleClick()">
                <a href="#meetzbra" class="green-button"> FAÇA PARTE </a>
              </li>
            </ul>
            <div class="social-media-menu">
              <div class='socialmedia'>
                <a href='https://br.linkedin.com/company/zbra-dev'>
                  <img src="https://zbra.dev/wp-content/themes/zbra/assets/images/icons/Icone-Linkedin_AoC.svg" alt="Linkedin"/>
                </a>
                <a href='https://www.instagram.com/zbra.dev/'>
                  <img src="https://zbra.dev/wp-content/themes/zbra/assets/images/icons/Icone-Instagram_AoC.svg" alt="Instagram"/>
                </a>
                <a href='https://twitter.com/zbra_dev'>
                  <img src="https://zbra.dev/wp-content/themes/zbra/assets/images/icons/Icone-Twitter_AoC.svg" alt="Twitter"/>
                </a>
                <a href='https://pt-br.facebook.com/zbra.solucoes/'>
                  <img src="https://zbra.dev/wp-content/themes/zbra/assets/images/icons/Icone-Facebook_AoC.svg" alt="Facebook"/>
                </a>

              </div>
            </div>
          </div>
          <div class="hamburger" onclick="handleClick()">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
        </nav>
      </div>


      <div class='center-align zbraplusadvent'>
        <img src="https://zbra.dev/wp-content/themes/zbra/assets/images/ZBRA_Logo_AoC.svg" alt="logo zbra" />
        <p> + </p>
        <p class='adventofcode'>Advent of Code</p>
      </div>
    </header>


    <div id="what-is-advent" class='page-section center-align'>
      <h2 class='header-what-is-advent header-section highlight-green'> O QUE É <strong>O ADVENT OF CODE?</strong></h2>
      <div class="advent-content">
        <img src="https://zbra.dev/wp-content/themes/zbra/assets/images/advent.webp" alt="logo zbra com chapéu do papai noel" />
      </div>
      <div class='advent-content'>
        <p>
          O advent of code é um calendário de pequenos <span>quebra-cabeças de programação</span> que acontece todo ano antecedendo o Natal.
        </p>
        <p>
          São uma série de desafios para testar uma variedade de conjuntos e níveis de habilidades e que podem ser resolvidos em <span>qualquer linguagem de programação</span> que você quiser.
        </p>
        <p>
          O nome do evento é uma brincadeira com o Calendário do Advento, então um novo puzzle é liberado <span>todos os dias entre 1 e 25 de dezembro.</span>
        </p>
        <p>
          É sempre uma boa oportunidade pra aprender alguma linguagem nova, relembrar alguns conceitos ou simplesmente <span>testar suas habilidades.</span>
        </p>
      </div>
    </div>

    <div id="how-it-works">
      <h2 class='howitworkstitle'>COMO <strong>FUNCIONA?</strong></h2>
      <div class='how-it-works-content'>
        <p>
          Acessando o site <strong>adventofcode.com</strong> você pode <span>se cadastrar para participar</span> e ter acesso ao puzzles do ano.
        </p>
        <p>
          A partir do dia 1 de dezembro, por volta das 2 da manhã, no horário de Brasília,
          todos os dias <span>um novo quebra-cabeças é desvendado</span>,
          em geral contando uma historinha de como o Papai Noel precisa de ajuda para o Natal.
        </p>

        <p>
          Cada desafio do dia consiste em <span>2 partes</span>, sendo
          que a segunda só é apresentada depois que você consegue terminar a primeira com a resposta correta.
        </p>
        <p>
          O site vai trazer uma descrição do desafio e então te apresentar uma opção para baixar
          os inputs necessários para a sua solução do problema (cada usuário tem uma sequência de
          inputs único que vai gerar um resultado único). Ao acertar a primeira, você ganha uma
          estrela e então a segunda parte é apresentada. Sua posição no ranking
          depende de <span>quantos desafios e de quanto tempo</span> levou para terminar, desde o anúncio.
        </p>
        <p>
          Mas se não terminar algum desafio, não desanime. Você pode pular para outro dia e voltar para esse desafio em outro momento quando tiver outra ideia.
        </p>
      </div>
    </div>

    <div id="whyzbrasupports" class='page-section'>
      <div class='advent-content'>
        <div class='header-section'>
          <h2> PORQUE A </h2>
          <h2 class='highlight-blue'>
            <strong>ZBRA APOIA?</strong>
          </h2>
        </div>
        <div class='support-content'>
          <p>
            <strong>Um dos valores que nos move é </strong> <span>“Aprenda e melhore continuamente”.</span>
          </p>
          <p>
            Para a ZBRA, o Advent of Code é uma excelente oportunidade para
            cada pessoa poder <span>aprender e se desafiar</span>
            cada vez mais. E como gostamos de um ambiente bem descontraído e animado,
            vemos como uma excelente oportunidade para fazer
            isso ainda de um jeito divertido. 😝
          </p>
          <p>
            A ZBRA <span>investe muito no treinamento das pessoas</span> e em seu desenvolvimento,
            e acreditamos que essa é uma oportunidade para estimularmos a melhora das habilidades
            das pessoas junto das outras iniciativas que temos internamente.
          </p>
        </div>
      </div>
      <div class='adventcontent'>
        <img src='https://zbra.dev/wp-content/themes/zbra/assets/images/womanzbra.png' alt="" />
      </div>
    </div>

    <div id="joinwithzbra" class='page-section'>
      <div class="advent-content">
        <div class='header-section'>
          <h2> PARTICIPE </h2>
          <h2 class='highlight-green'><strong>COM A ZBRA</strong></h2>
        </div>
      </div>
      <div class="advent-content joinwithzbra-content">
        <p>
          Venha participar do leaderboard junto com o pessoal da ZBRA e veja sua posição.
        </p>
        <p>
          Para entrar basta entrar no site do Advent of Code, clicar em Leaderboars, depois em Private Leaderboard e usar o código abaixo:
        </p>

        <input type="text" id="copyvalue" value="1555177-3238d417" />
        <input type="submit" value="Copiar 🖇️" onclick="copyText()" />

        <p>
          Siga também a ZBRA nas redes sociais e acompanhe as postagens sobre o Advent of Code e muito mais.
        </p>

        <div class='socialmedia'>
          <a href='https://br.linkedin.com/company/zbra-dev'>
            <img src="https://zbra.dev/wp-content/themes/zbra/assets/images/icons/Icone-Linkedin.svg" alt="Linkedin"/>
          </a>
          <a href='https://www.instagram.com/zbra.dev/'>
            <img src="https://zbra.dev/wp-content/themes/zbra/assets/images/icons/Icone-Instagram.svg" alt="Instagram"/>
          </a>
          <a href='https://twitter.com/zbra_dev'>
            <img src="https://zbra.dev/wp-content/themes/zbra/assets/images/icons/Icone-Twitter.svg" alt="Twitter"/>
          </a>
          <a href='https://pt-br.facebook.com/zbra.solucoes/'>
            <img src="https://zbra.dev/wp-content/themes/zbra/assets/images/icons/Icone-Facebook.svg" alt="Facebook"/>
          </a>

        </div>
      </div>
    </div>

    <div id="getready" class=''>
      <h2> PREPARE-SE </h2>
      <h2><span><strong>COM ANTECEDÊNCIA</strong></span></h2>
      <h3 class='center-align'>
        Uma coisa importante para começar a participação no Advent of Code é a preparação.
      </h3>
      <div class='card-content'>
        <div class='card'>
          <img src="https://zbra.dev/wp-content/themes/zbra/assets/images/card1.svg" alt="arrow" />
          <h3>Decida a linguagem e estratégia</h3>
          <p>
            Pense com antecedência que linguagem você quer usar para resolver os desafios. Vai aprender uma linguagem nova? Vai se aprimorar em uma linguagem que já vem trabalhando? Vai querer tentar uma técnica ou framework novo? Pensar essas coisas com antecedência te dão uma tranquilidade para fazer um desafio por dia
          </p>
        </div>

        <div class='card'>
          <img src="https://zbra.dev/wp-content/themes/zbra/assets/images/card2.svg" alt="computer" />
          <h3>Prepare o ambiente</h3>
          <p>
            Escolha suas ferramentas. Pensar se vai usar uma IDE diferente ou extensões novas também é importante. Especialmente se você for trabalhar com uma linguagem que não é sua usual, ter o ambiente preparado com antecedência salva muito tempo. Ah, e talvez você já queira preparar bibliotecas para leitura e escrita de arquivos que podem ser bastante úteis 😉
          </p>
        </div>

        <div class='card'>
          <img src="https://zbra.dev/wp-content/themes/zbra/assets/images/card3.svg" alt="box of tools" />
          <h3>Prepare seu arsenal</h3>
          <p>
            Especialmente se tiver fazendo com uma linguagem que não tem tanta familiaridade, prepare seu arsenal de recursos. Seja Stackoverflow, Google ou outra fonte, esteja preparado para conseguir as informações rapidamente e se divertir no processo.
          </p>
        </div>
      </div>
    </div>

    <div id="meetzbra" class='page-section'>
      <div class='advent-content'>
        <div class='header-section'>
          <h2> CONHEÇA A ZBRA </h2>
          <h2 class='highlight-green'><strong>E CANDIDATE-SE</strong> </h2>
        </div>
      </div>
      <div class='advent-content meet-zebra-content'>
        <p>
          A ZBRA é uma empresa de desenvolvimento feita de dev para dev. Aqui nos preocupamos não só com a qualidade do seu código, mas também com a sua qualidade de vida.
        </p>
        <p>
          Acesse o site, conheça nossas vagas e candidate-se. <b>Venha fazer parte deste time!</b>
        </p>
        <button class='zbrabtn'> <a href="https://zbra.dev"> ACESSE O SITE ⟶ </a> </button>
      </div>
    </div>

    <footer class='page-section'>
      <img src="https://zbra.dev/wp-content/themes/zbra/assets/images/ZBRA_Logo_AoC.svg" alt="logo zbra" />
      <p> DECIFRANDO O PRESENTE PARA CODIFICAR O FUTURO © ZBRA </p>
      <div class='socialmedia'>
        <a href='https://br.linkedin.com/company/zbra-dev'>
          <img src="https://zbra.dev/wp-content/themes/zbra/assets/images/icons/Icone-Linkedin.svg" alt="Linkedin"/>
        </a>
        <a href='https://www.instagram.com/zbra.dev/'>
          <img src="https://zbra.dev/wp-content/themes/zbra/assets/images/icons/Icone-Instagram.svg" alt="Instagram"/>
        </a>
        <a href='https://twitter.com/zbra_dev'>
          <img src="https://zbra.dev/wp-content/themes/zbra/assets/images/icons/Icone-Twitter.svg" alt="Twitter"/>
        </a>
        <a href='https://pt-br.facebook.com/zbra.solucoes/'>
          <img src="https://zbra.dev/wp-content/themes/zbra/assets/images/icons/Icone-Facebook.svg" alt="Facebook"/>
        </a>

      </div>
  </div>
</body>
</html>
