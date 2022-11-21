import card1 from '../assets/card1.svg';
import card2 from '../assets/card2.svg';
import card3 from '../assets/card3.svg';

const GetReadyContent = () => {
  return (
    <div className='card-content'>
      <div className='card'>
        <img src={card1} alt="arrow" />
        <h3>Decida a linguagem e estratégia</h3>
        <p>
          Pense com antecedência que linguagem você quer usar para resolver os desafios. Vai aprender uma linguagem nova? Vai se aprimorar em uma linguagem que já vem trabalhando? Vai querer tentar uma técnica ou framework novo? Pensar essas coisas com antecedência te dão uma tranquilidade para fazer um desafio por dia
        </p>
      </div>

      <div className='card'>
        <img src={card2} alt="computer" />
        <h3>Prepare o ambiente</h3>
        <p>
          Escolha suas ferramentas. Pensar se vai usar uma IDE diferente ou extensões novas também é importante. Especialmente se você for trabalhar com uma linguagem que não é sua usual, ter o ambiente preparado com antecedência salva muito tempo. Ah, e talvez você já queira preparar bibliotecas para leitura e escrita de arquivos que podem ser bastante úteis 😉
        </p>
      </div>

      <div className='card'>
        <img src={card3} alt="box of tools" />
        <h3>Prepare seu arsenal</h3>
        <p>
          Especialmente se tiver fazendo com uma linguagem que não tem tanta familiaridade, prepare seu arsenal de recursos. Seja Stackoverflow, Google ou outra fonte, esteja preparado para conseguir as informações rapidamente e se divertir no processo.
        </p>
      </div>
    </div>
  );
}

export default GetReadyContent;