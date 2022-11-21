import './App.css';

import iconfacebook from './assets/icons/Icone-Facebook.svg';
import iconinstagram from './assets/icons/Icone-Instagram.svg';
import iconlinkedin from './assets/icons/Icone-Linkedin.svg';
import icontiktok from './assets/icons/Icone-Tiktok.svg';
import icontwitter from './assets/icons/Icone-Twitter.svg';
import iconyoutube from './assets/icons/Icone-Youtube.svg';

const SocialMedia = () => {
  return (
    <div className='socialmedia'>
      <a href='https://br.linkedin.com/company/zbra-dev'>
        <img src={iconlinkedin} alt="Linkedin"/>
      </a>
      <a href='https://www.instagram.com/zbra.dev/'>
        <img src={iconinstagram} alt="Instagram"/>
      </a>
      <a href='https://twitter.com/zbra_dev'>
        <img src={icontwitter} alt="Twitter"/>
      </a>
      <a href='https://pt-br.facebook.com/zbra.solucoes/'>
        <img src={iconfacebook} alt="Facebook"/>
      </a>
      <a href='https://youtube.com'>
        <img src={iconyoutube} alt="Youtube"/>
      </a>
      <a href='https://tiktok.com'>
        <img src={icontiktok} alt="TikTok"/>
      </a>
    </div>
  )
}

export default SocialMedia;