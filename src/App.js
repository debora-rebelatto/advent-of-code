import WebFont from 'webfontloader';
import { useEffect } from 'react';
import './App.css';
import logoZbra from './assets/ZBRA_Logo.svg';
import whyzbrasupports from './assets/whyZBRAsupports.png';
import ZChristmas from './assets/Zchristmas.webp';
import ZFooterBackground from './assets/ZFooterBackgound.png';

function App() {
  const copytext = () => {
    var copyText = document.getElementById("copyvalue");

    copyText.select();
    copyText.setSelectionRange(0, 99999);
  
    navigator.clipboard.writeText(copyText.value);
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
      <header className="App-header">
        <div className="header-menu">
          <div className='img-test'>
            <img src={logoZbra} className="image-logo" alt="logo" />
          </div>
          <a href="#whatis" className='zbra-green'> O que é? </a>
          <a href="#howitworks"> Como funciona? </a>
          <a href="#joinwithzbra"> Prepare-se </a>
          <a href="#whatis"> AoC na ZBRA </a>
          <a> | </a>
          <a href="#whatis"> Conheça a ZBRA</a>
          <button className="green-button"> FAÇA PARTE </button>
        </div>

        <div className='center-align zbraplusadvent'>
          <img src={logoZbra} className="App-logo" alt="logo" />
          <p className='plusstyling'> + </p>
          <p className='adventofcodeyellow'>Advent of Code</p>
        </div>

      </header>


      <div id="whatis" className='blue-background center-align'>
        <h2 className='lbladvent greenhighlight center-align'> O QUE É O ADVENT OF CODE? </h2>
        <img src={ZChristmas} className="whatisimage" alt="whatisimage" />
        <div className='textwhatis '>
          <p>
            O advent of code é um calendário de pequenos <a className='purplehighlight'>quebra-cabeças de programação</a> que acontece todo ano antecedendo o Natal.
          </p>
          <p>
            São uma série de desafios para testar uma variedade de conjuntos e níveis de habilidades e que podem ser resolvidos em <a className='purplehighlight'>qualquer linguagem de programação</a> que você quiser.
          </p>
          <p>
            O nome do evento é uma brincadeira com o Calendário do Advento, então um novo puzzle é liberado <a className='purplehighlight'>todos os dias entre 1 e 25 de dezembro.</a>
          </p>
          <p>
            É sempre uma boa oportunidade pra aprender alguma linguagem nova, relembrar alguns conceitos ou simplesmente <a className='purplehighlight'>testar suas habilidades.</a>
          </p>
        </div>
      </div>

      <div id="howitworks">
        <h2 className='howitworkstitle'> COMO FUNCIONA? </h2>
        <div className='howitworkstext'>
          <p>
            Acessando o site adventofcode.com você pode <a className='purplehighlight'>se cadastrar para participar </a>
            e ter acesso ao puzzles do ano.
          </p>

          <p>
            A partir do dia 1 de dezembro, por volta das 2 da manhã, no horário de Brasília,
            todos os dias <a className='purplehighlight'>um novo quebra-cabeças é desvendado </a>,
            em geral contando uma historinha de como o Papai Noel precisa de ajuda para o Natal.
          </p>

          <p>
            Cada desafio do dia consiste em <a className='purplehighlight'>2 partes</a>, sendo
            que a segunda só é apresentada depois que você consegue terminar a primeira com a resposta correta.
          </p>
          <p>
            O site vai trazer uma descrição do desafio e então te apresentar uma opção para baixar
            os inputs necessários para a sua solução do problema (cada usuário tem uma sequência de
            inputs único que vai gerar um resultado único). Ao acertar a primeira, você ganha uma
            estrela e então a segunda parte é apresentada. Sua posição no ranking depende de
            <a className='purplehighlight'> quantos desafios e de quanto tempo </a>
            levou para terminar, desde o anúncio.
          </p>
          <p>
            Mas se não terminar algum desafio, não desanime. Você pode pular para outro dia e voltar
            para esse desafio em outro momento quando tiver outra ideia.
          </p>
        </div>
      </div>

      <div id="whyzbrasupports" className=''>
        <div className='center-align'>
          <div className='texttestalign'>
            <h2> PORQUE A </h2>
            <h2 className='whyzbrasupportslbl'> ZBRA APOIA? </h2>
            <p>
              Um dos valores que nos move é <a className='purplehighlight'>“Aprenda e melhore continuamente”.</a>
            </p>

            <p>
              Para a ZBRA, o Advent of Code é uma excelente oportunidade para
              cada pessoa poder <a className='purplehighlight'>aprender e se desafiar </a>
              cada vez mais. E como gostamos de um ambiente bem descontraído e animado,
              vemos como uma excelente oportunidade para fazer
              isso ainda de um jeito divertido. 😝
            </p>
            <p>
              A ZBRA <a className='purplehighlight'>investe muito no treinamento das pessoas</a> e em seu desenvolvimento,
              e acreditamos que essa é uma oportunidade para estimularmos a melhora das habilidades
              das pessoas junto das outras iniciativas que temos internamente.
            </p>
          </div>
          <img src={whyzbrasupports} className="whyzbrasupports" alt="whyzbrasupports" />

        </div>
      </div>

      <div id="joinwithzbra" className=''>
        <div>
          <h2> PARTICIPE  </h2>
          <h2 className='joinwithzbralbl'> COM A ZBRA </h2>
        </div>
        <div>
          <p>
            Venha participar do leaderboard junto com o pessoal da ZBRA e veja sua posição.
          </p>
          <p>
            Para entrar basta entrar no site do Advent of Code, clicar em Leaderboars, depois em Private Leaderboard e usar o código abaixo:
          </p>
        </div>

        <input type="text" id="copyvalue" value={"194976-6dd31c12"} />
        <input type="submit" value="Copiar 🖇️" onClick={copytext}/>

        <p>
          Siga também a ZBRA nas redes sociais e acompanhe as postagens sobre o Advent of Code e muito mais.
        </p>
      </div>

      <div id="getready" className=''>
        <h1> PREPARE-SE </h1>
        <h1 className='blue-backgound'> COM ANTECEDÊNCIA </h1>
        <p>
          Uma coisa importante para começar a participação no Advent of Code é a preparação.
        </p>

        <div>
          <h3>Decida a linguagem e estratégia</h3>
          <p>
            Pense com antecedência que linguagem você quer usar para resolver os desafios. Vai aprender uma linguagem nova? Vai se aprimorar em uma linguagem que já vem trabalhando? Vai querer tentar uma técnica ou framework novo? Pensar essas coisas com antecedência te dão uma tranquilidade para fazer um desafio por dia
          </p>
        </div>

        <div>
          <h3>Prepare o ambiente</h3>
          <p>
            Escolha suas ferramentas. Pensar se vai usar uma IDE diferente ou extensões novas também é importante. Especialmente se você for trabalhar com uma linguagem que não é sua usual, ter o ambiente preparado com antecedência salva muito tempo. Ah, e talvez você já queira preparar bibliotecas para leitura e escrita de arquivos que podem ser bastante úteis 😉
          </p>
        </div>

        <div>
          <h3>Prepare seu arsenal</h3>
          <p>
            Especialmente se tiver fazendo com uma linguagem que não tem tanta familiaridade, prepare seu arsenal de recursos. Seja Stackoverflow, Google ou outra fonte, esteja preparado para conseguir as informações rapidamente e se divertir no processo.
          </p>
        </div>

      </div>

      <div id="meetzbra" className=''>
        {/* <img src={ZFooterBackground} className="imgmeetzbra" alt="meetzbra" /> */}
        <h1> CONHEÇA A ZBRA E CANDIDATE-SE </h1>

      </div>


      <footer>
        <img src={logoZbra} className="logo-footer" alt="logo" />
        <p> DECIFRANDO O PRESENTE PARA CODIFICAR O FUTURO </p>
        <p> © ZBRA </p>
      </footer>

    </div>
  );
}

export default App;
