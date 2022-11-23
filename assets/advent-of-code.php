<?php
//Template Name: AdventOfCode
?>
<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript" src="https://zbra.dev/wp-content/themes/zbra/assets/js/scripts_AoC.js"></script>
    <link rel="stylesheet" href="https://zbra.dev/wp-content/themes/zbra/assets/css/styles_AoC.css">
    <link rel="stylesheet" href="https://use.typekit.net/wyk8hzs.css">
    <title>ZBRA - Advent of Code</title>
</head>
<body>
  <div>
    <header>
      <nav>
        <div id="logo">
          <img src="https://zbra.dev/wp-content/themes/zbra/assets/images/ZBRA_Logo_AoC.svg" alt="logo zbra" />
        </div>
        <div id="web-menu">
          <ul>
            <li><a href="#what-is-advent">O que é?</a></li>
            <li><a href="#how-it-works">Como funciona?</a></li>
            <li><a href="#why-zbra-supports">Porque a ZBRA apoia?</a></li>
            <li><a href="#join-with-zbra">Participe com a ZBRA</a></li>
            <li><a href="#get-ready">Prepare-se</a></li>
            <li><a href="#">|</a></li>
            <li><a href="#meet-zbra">Conheça a ZBRA</a></li>
            <li><a href="#meetzbra" class="green-button"><strong>FAÇA PARTE</strong></a></li>
          </ul>
        </div>

        <div id="hamburger" onclick="handleClick()">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>

        <div class="mobile-menu">
          <div class="header-menu">
            <img src="https://zbra.dev/wp-content/themes/zbra/assets/images/ZBRA_Logo_AoC.svg" alt="logo zbra" />
            <div class="close-icon" onclick="handleClick()"></div>
          </div>
          <ul>
            <li><a onclick="handleClick()" href="#what-is-advent">O que é?</a></li>
            <li><a onclick="handleClick()" href="#how-it-works">Como funciona?</a></li>
            <li><a onclick="handleClick()" href="#why-zbra-supports">Porque a ZBRA apoia?</a></li>
            <li><a onclick="handleClick()" href="#join-with-zbra">Participe com a ZBRA</a></li>
            <li><a onclick="handleClick()" href="#get-ready">Prepare-se</a></li>
            <li><a onclick="handleClick()" href="#meet-zbra">Conheça a ZBRA</a></li>
            <li><a onclick="handleClick()" href="#meetzbra" class="green-button"><strong>FAÇA PARTE</strong></a></li>
          </ul>
          <div class='social-media'>
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
      </nav>

      <div id="aoc_header">
        <img src="https://zbra.dev/wp-content/themes/zbra/assets/images/ZBRA_Logo_AoC.svg" alt="logo zbra" />
        <p>+</p>
        <h1>Advent of Code</h1>
      </div>

    </header>
    <div class="header what-is-header">
      <h2 class="header-green-highlight"> O QUE É <strong>O ADVENT OF CODE?</strong></h2>
    </div>

    <div id="what-is-advent" class="box">
      <div class="img2">
        <img src="https://zbra.dev/wp-content/themes/zbra/assets/images/advent.webp" alt="logo zbra com chapéu do papai noel" class="hatsvg"/>
      </div>
      <div>
        <p>
          O advent of code é um calendário de pequenos <span>quebra-cabeças de programação</span> que
          acontece todo ano antecedendo o Natal.
        </p>
        <p>
          São uma série de desafios para testar uma variedade de conjuntos e níveis de habilidades e
          que podem ser resolvidos em <span>qualquer linguagem de programação</span> que você quiser.
        </p>
        <p>
          O nome do evento é uma brincadeira com o Calendário do Advento, então um novo puzzle
          é liberado <span>todos os dias entre 1 e 25 de dezembro.</span>
        </p>
        <p>
          É sempre uma boa oportunidade pra aprender alguma linguagem nova, relembrar alguns
          conceitos ou simplesmente <span>testar suas habilidades.</span>
        </p>
      </div>
    </div>

    <div id="how-it-works">
      <div>
        <h2 class="highlight-blue">COMO <strong>FUNCIONA?</strong></h2>
      </div>
      <div>
        <p>
          Acessando o site <strong>adventofcode.com</strong> você
          pode <span>se cadastrar para participar</span> e ter acesso ao puzzles do ano.
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
          Mas se não terminar algum desafio, não desanime. Você pode pular para outro dia e voltar
          para esse desafio em outro momento quando tiver outra ideia.
        </p>
      </div>
    </div>

    <div id="why-zbra-supports" class="box">
      <div>
        <div class="header">
          <h2> PORQUE A </h2>
          <h2 class="header-blue-highlight"> <strong>ZBRA APOIA?</strong> </h2>
        </div>
        <div class="content">
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
      <div class="img2">
        <img src='https://zbra.dev/wp-content/themes/zbra/assets/images/womanzbra.png' alt="" />
      </div>
    </div>

    <div id="join-with-zbra" class="box background-join-with-zbra">
      <div class="header">
        <h2> PARTICIPE </h2>
        <h2 class="header-green-highlight"><strong>COM A ZBRA</strong></h2>
      </div>
      <div class="content">
        <p>
          Venha participar do leaderboard junto com o pessoal da ZBRA e veja sua posição.
        </p>
        <p>
          Para entrar basta entrar no site do Advent of Code, clicar em Leaderboars, depois
          em Private Leaderboard e usar o código abaixo:
        </p>

        <input type="text" id="code-leaderboard" value="194976-6dd31c12" />
        <input type="submit" value="Copiar 🖇️" onclick="copyText()" />

        <p>
          Siga também a ZBRA nas redes sociais e acompanhe as postagens sobre o Advent of Code e muito mais.
        </p>

        <div class='social-media'>
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

    <div id="get-ready">
      <div>
        <h2> PREPARE-SE </h2>
        <h2 class="highlight-blue">COM ANTECEDÊNCIA</h2>
        <h3>
          <strong>Uma coisa importante para começar a participação no Advent of Code é a preparação.</strong>
        </h3>
      </div>
      <div class="cards-container">
        <div class='card'>
          <img src="https://zbra.dev/wp-content/themes/zbra/assets/images/card1.svg" alt="arrow" />
          <h3>Decida a linguagem e estratégia</h3>
          <p>
            Pense com antecedência que linguagem você quer usar para resolver os desafios.
            Vai aprender uma linguagem nova? Vai se aprimorar em uma linguagem que já vem trabalhando?
            Vai querer tentar uma técnica ou framework novo? Pensar essas coisas com antecedência te
            dão uma tranquilidade para fazer um desafio por dia
          </p>
        </div>

        <div class='card'>
          <img src="https://zbra.dev/wp-content/themes/zbra/assets/images/card2.svg" alt="computer" />
          <h3>Prepare o ambiente</h3>
          <p>
            Escolha suas ferramentas. Pensar se vai usar uma IDE diferente ou extensões novas também é importante.
            Especialmente se você for trabalhar com uma linguagem que não é sua usual, ter o ambiente preparado com
            antecedência salva muito tempo. Ah, e talvez você já queira preparar bibliotecas para leitura e escrita
            de arquivos que podem ser bastante úteis 😉
          </p>
        </div>

        <div class='card'>
          <img src="https://zbra.dev/wp-content/themes/zbra/assets/images/card3.svg" alt="box of tools" />
          <h3>Prepare seu arsenal</h3>
          <p>
            Especialmente se tiver fazendo com uma linguagem que não tem tanta familiaridade, prepare seu
            arsenal de recursos. Seja Stackoverflow, Google ou outra fonte, esteja preparado para conseguir
            as informações rapidamente e se divertir no processo.
          </p>
        </div>
      </div>
    </div>

    <div id="meet-zbra" class="box background-meet-zbra">
      <div class="header">
        <h2> CONHEÇA A ZBRA </h2>
        <h2 class="header-green-highlight"><strong>E CANDIDATE-SE</strong> </h2>
      </div>
      <div class="content">
        <p>
          A ZBRA é uma empresa de desenvolvimento feita de dev para dev.
          Aqui nos preocupamos não só com a qualidade do seu código, mas também com a sua qualidade de vida.
        </p>
        <p>
          Acesse o site, conheça nossas vagas e candidate-se. <b>Venha fazer parte deste time!</b>
        </p>
        <button class="green-button"> <a href="https://zbra.dev"> <strong>ACESSE O SITE ⟶ </strong></a> </button>
      </div>
    </div>

    <footer>
      <img src="https://zbra.dev/wp-content/themes/zbra/assets/images/ZBRA_Logo_AoC.svg" alt="logo zbra" />
      <div><p> DECIFRANDO O PRESENTE PARA CODIFICAR O FUTURO © ZBRA </p></div>
      <div class='social-media'>
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
    </footer>
</body>
</html>
