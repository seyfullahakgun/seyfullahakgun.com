import TypeIt from "typeit-react";

import ChevronDownIcon from "./assets/icons/chevron-down.svg";
import InstaIcon from "./assets/icons/socials/instagram.svg";
import TwitterIcon from "./assets/icons/socials/twitter.svg";
import LinkedinIcon from "./assets/icons/socials/linkedin.svg";
import GithubIcon from "./assets/icons/socials/github.svg";
import MediumIcon from "./assets/icons/socials/medium.svg";
import Programmer1Icon from "./assets/icons/programmer1.svg";

const SocialMediaLinks = [
  {
    icon: InstaIcon,
    link: "https://www.instagram.com/swofgod/",
  },
  {
    icon: TwitterIcon,
    link: "https://x.com/swofgod",
  },
  {
    icon: LinkedinIcon,
    link: "https://www.linkedin.com/in/seyfullah-akgun/",
  },
  {
    icon: GithubIcon,
    link: "https://www.github.com/seyfullahakgun",
  },
  {
    icon: MediumIcon,
    link: "https://seyfullahakgun.medium.com/",
  },
];

function App() {
  return (
    <div className="relative flex flex-col gap-52 w-full bg-dark overflow-x-hidden min-h-screen min-w-screen">
      <div className="absolute top-0 left-0 transform -translate-y-1/2 -translate-x-[calc(500px-50vw)] md:-translate-x-0 w-full min-w-[1000px] h-screen bg-light rounded-b-[50%]"></div>
      <div className="flex flex-col items-center justify-between w-screen min-h-screen h-screen max-w-screen-2xl mx-auto px-4">
        <div className="flex items-center justify-between w-full my-8">
          <span className="font-lilita text-[40px] font-light text-white">
            Seyfullah Akgün
          </span>
          <div className="hidden md:flex items-center gap-24 text-white font-lilita text-[24px]">
            <span>Home</span>
            <span>About Me</span>
            <span>Contact Me</span>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row md:flex-wrap items-center justify-around w-full max-w-screen-xl gap-4 md:gap-24">
          <div className="flex flex-col">
            <TypeIt
              getBeforeInit={(instance) => {
                instance
                  .type(
                    '<span class="font-anton text-white text-[40px]">Hey 👋 ,</span>'
                  )
                  .pause(2000)
                  .break() // Satır sonu
                  .type(
                    '<span class="font-anton text-white text-[40px]">I am <span class="text-primary-blue"> Seyfullah Akgün</span>,</span>'
                  )
                  .pause(500)
                  .break()
                  .type(
                    '<span class="font-anton text-white text-[40px]">a <span class="text-primary-green"> Software Developer</span></span>'
                  )
                  .go(); // Animasyonu başlat

                return instance;
              }}
              className="leading-6"
              options={{
                speed: 70, // Yazma hızı
                waitUntilVisible: true, // Görünür olduğunda başlat
                deleteSpeed: 200, // Silme hızı
                cursor: false, // Cursoru kapat
              }}
            />
            <div className="flex items-center gap-4 mt-6">
              {SocialMediaLinks.map((social, index) => (
                <a
                  key={index}
                  className="flex items-center justify-center bg-white w-12 h-12 rounded-[15px] border-none outline-none cursor-pointer hover:scale-110 transition-all"
                  target="_blank"
                  href={social.link}
                >
                  <img src={social.icon} className="w-8 h-8" />
                </a>
              ))}
            </div>
          </div>
          <span className="flex w-full md:w-1/2 items-center justify-center">
            <img
              className="w-full"
              src="./src/assets/images/BubbleMe.png"
              alt="Seyfullah Akgün"
            />
          </span>
        </div>

        <img
          className="w-20 h-20 animate-bounce my-16"
          src={ChevronDownIcon}
          alt="Seyfullah Akgün"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-52 w-full max-w-screen-xl mx-auto px-4 py-4 md:py-12">
        <div>
          <img className="w-full" src={Programmer1Icon} alt="Seyfullah Akgün" />
        </div>
        <div className="flex flex-col gap-4 h-max border-l-4 border-l-primary-blue ps-6">
          <h3 className="font-anton text-3xl text-white">A Bit About Me :</h3>
          <p className="font-anta text-white text-[20px]">
            Merhaba, ben Seyfullah! Yazılım sektöründe modern araçlar kullanarak
            uygulamalar geliştiriyor, çözümler sunuyorum. Full stack geliştirme
            alanında deneyim sahibiyim ve farklı teknolojilerle kendimi sürekli
            geliştiriyorum. Yeni şeyler öğrenmeye ve zorluklarla başa çıkmaya
            tutkuyla yaklaşıyorum. Meraklı yapım sayesinde her projeyi bir
            öğrenme fırsatı olarak görüyorum. Tecrübelerimden edindiğim disiplin
            ve motivasyonla daha iyisini başarmak için çalışıyor, yenilikçi
            fikirlerle değer yaratmayı hedefliyorum.
          </p>
          <button className="w-max bg-primary-blue text-white font-anton text-[20px] py-2 px-8 rounded-[15px] hover:shadow-lg hover:shadow-blue-900  transition-all duration-500">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
