import WebFont from 'webfontloader';
import { useEffect } from 'react';
import './App.css';
import logoZbra from './assets/ZBRA_Logo.svg';
import womanzbra from './assets/womanzbra.png';
import advent from './assets/advent.webp';
import lock from './assets/icons/lock.svg';
import iconfacebook from './assets/icons/Icone-Facebook.svg';
import iconinstagram from './assets/icons/Icone-Instagram.svg';
import iconlinkedin from './assets/icons/Icone-Linkedin.svg';
import icontiktok from './assets/icons/Icone-Tiktok.svg';
import icontwitter from './assets/icons/Icone-Twitter.svg';
import iconyoutube from './assets/icons/Icone-Youtube.svg';


function App() {
  const copytext = () => {
    var copyText = document.getElementById("copyvalue");

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);
  }

  const openMenu = () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }


  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Droid Sans']
      }
    });
  }, []);

  return (
    <div>
      <header>
        <nav>
          <img src={logoZbra} className="image-logo" alt="logo" />
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#whatis"> O que é? </a>
            </li>
            <li className="nav-item">
              <a href="#howitworks"> Como funciona? </a>
            </li>
            <li>
              <a href="#whyzbrasupports"> Porque a ZBRA apoia? </a>
            </li>
            <li>
              <a href="#joinwithzbra"> Participe com a ZBRA </a>
            </li>
            <li className="nav-item">
              <a href="#getready"> Prepare-se </a>
            </li>
            <li>
              <p> | </p>
            </li>
            <li className="nav-item">
              <a href="#meetzbra"> Conheça a ZBRA</a>
            </li>

            <li className="nav-item">
              <a href="#meetzbra" className="green-button"> FAÇA PARTE </a>
            </li>

          </ul>
          {/* <div className="hamburger" onClick={openMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div> */}
        </nav>

        <div className='center-align zbraplusadvent'>
          <img src={logoZbra} alt="logo" />
          <p> + </p>
          <p className='adventofcode'>Advent of Code</p>
        </div>
      </header>

      <div id="whatis" className='center-align blue-background'>
        <h2 className='lbladvent greenhighlight'> O QUE É  <strong>O ADVENT OF CODE?</strong></h2>
        <img src={advent} className="whatisimage" alt="whatisimage" />
        <div className='textwhatis '>
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

      <div id="howitworks">
        <h2 className='howitworkstitle'>COMO <strong>FUNCIONA?</strong></h2>
        <div className='howitworkstext'>
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

      <div id="whyzbrasupports" className='column'>
        <div className='adventcontent'>
          <div className='whyzbrasupportstitle'>
            <h2> PORQUE A </h2>
            <h2 className='whyzbrasupportslbl'>
              <strong>ZBRA APOIA?</strong>
            </h2>
          </div>
          <div className='whyzbrasupportstxt'>
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
        <div className='adventcontent'>
          <img src={womanzbra} alt="" />
        </div>
      </div>

      <div id="joinwithzbra" className='column joinwithzbrabackground'>
        <div class="adventcontent">
          <div className='whyzbrasupportstitle'>
            <h2> PARTICIPE </h2>
            <h2 className='joinwithzbralbl'>COM A ZBRA</h2>
          </div>
        </div>
        <div class="adventcontent">
          <p>
            Venha participar do leaderboard junto com o pessoal da ZBRA e veja sua posição.
          </p>
          <p>
            Para entrar basta entrar no site do Advent of Code, clicar em Leaderboars, depois em Private Leaderboard e usar o código abaixo:
          </p>

          <input type="text" id="copyvalue" value={"194976-6dd31c12"} />
          <input type="submit" value="Copiar 🖇️" onClick={copytext}/>

          <p>
            Siga também a ZBRA nas redes sociais e acompanhe as postagens sobre o Advent of Code e muito mais.
          </p>

          <div className='socialmedia'>
            <a href='linkedin.com'>
              <img src={iconlinkedin} alt="Linkedin"/>
            </a>
            <a href='instagram.com'>
              <img src={iconinstagram} alt="Instagram"/>
            </a>
            <a href='twitter.com'>
              <img src={icontwitter} alt="Twitter"/>
            </a>
            <a href='facebook.com'>
              <img src={iconfacebook} alt="Facebook"/>
            </a>
            <a href='youtube.com'>
              <img src={iconyoutube} alt="Youtube"/>
            </a>
            <a href='tiktok.com'>
              <img src={icontiktok} alt="TikTok"/>
            </a>
          </div>
        </div>

      </div>

      <div id="getready" className=''>
        <h2> PREPARE-SE </h2>
        <h2> <span>COM ANTECEDÊNCIA</span> </h2>
        <h3 className='center-align'>
          Uma coisa importante para começar a participação no Advent of Code é a preparação.
        </h3>

        <div className='center-align'>
          <div className='card'>
            <img src={lock} className="lock" alt="lock" />
            <h3>Decida a linguagem e estratégia</h3>
            <p>
              Pense com antecedência que linguagem você quer usar para resolver os desafios. Vai aprender uma linguagem nova? Vai se aprimorar em uma linguagem que já vem trabalhando? Vai querer tentar uma técnica ou framework novo? Pensar essas coisas com antecedência te dão uma tranquilidade para fazer um desafio por dia
            </p>
          </div>

          <div className='card'>
            <img src={lock} className="lock" alt="lock" />
            <h3>Prepare o ambiente</h3>
            <p>
              Escolha suas ferramentas. Pensar se vai usar uma IDE diferente ou extensões novas também é importante. Especialmente se você for trabalhar com uma linguagem que não é sua usual, ter o ambiente preparado com antecedência salva muito tempo. Ah, e talvez você já queira preparar bibliotecas para leitura e escrita de arquivos que podem ser bastante úteis 😉
            </p>
          </div>

          <div className='card'>
            <img src={lock} className="lock" alt="lock" />
            <h3>Prepare seu arsenal</h3>
            <p>
              Especialmente se tiver fazendo com uma linguagem que não tem tanta familiaridade, prepare seu arsenal de recursos. Seja Stackoverflow, Google ou outra fonte, esteja preparado para conseguir as informações rapidamente e se divertir no processo.
            </p>
          </div>
        </div>


      </div>

      <div id="meetzbra" className='column'>
        <div className='adventcontent'>
          <div className='whyzbrasupportstitle'>
            <h2> CONHEÇA A ZBRA </h2>
            <h2 className='joinwithzbralbl'>E CANDIDATE-SE </h2>
          </div>
        </div>
        <div className='adventcontent'>
          <p>
            A ZBRA é uma empresa de desenvolvimento feita de dev para dev. Aqui nos preocupamos não só com a qualidade do seu código, mas também com a sua qualidade de vida.
          </p>
          <p>
            Acesse o site, conheça nossas vagas e candidate-se. <b>Venha fazer parte deste time!</b>
          </p>
          <button className='zbrabtn'> <a href="https://zbra.dev"> ACESSE O SITE ⟶ </a> </button>
        </div>
      </div>


      <footer>
        <img src={logoZbra} className="logo-footer" alt="logo" />
        <p> DECIFRANDO O PRESENTE PARA CODIFICAR O FUTURO © ZBRA </p>
        <div className='socialmedia'>
          <a href='linkedin.com'>
            <img src={iconlinkedin} alt="Linkedin"/>
          </a>
          <a href='instagram.com'>
            <img src={iconinstagram} alt="Instagram"/>
          </a>
          <a href='twitter.com'>
            <img src={icontwitter} alt="Twitter"/>
          </a>
          <a href='facebook.com'>
            <img src={iconfacebook} alt="Facebook"/>
          </a>
          <a href='youtube.com'>
            <img src={iconyoutube} alt="Youtube"/>
          </a>
          <a href='tiktok.com'>
            <img src={icontiktok} alt="TikTok"/>
          </a>
        </div>
      </footer>

    </div>
  );
}

export default App;
