import SocialMedia from "./social-media";

const JoinWithZbraContent = () => {
  const copytext = () => {
    var copyText = document.getElementById("copyvalue");

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);
  }

  return (
    <div className="advent-content joinwithzbra-content">
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

      <SocialMedia />
    </div>
  )
}

export default JoinWithZbraContent