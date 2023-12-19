import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Header from './components/Header.jsx'
import Section from './components/Section.jsx';
import ListItem from './components/ListItem.jsx';

const gameListData = [
  {
    href: "https://www.twitch.tv/directory/category/overwatch-2",
    src: "https://m.media-amazon.com/images/I/61FQesvdvzL.jpg",
    alt:"Overwatch Game Image"
  },

  {
    href: "https://www.twitch.tv/directory/game/VALORANT",
    src: "https://assets-global.website-files.com/5f7cbc5e0e0248fafe222e89/639856f61320ebcc6b252ff1_63984ae59e600d377a0aa05f_valorant.jpeg",
    alt:"Valorant Game Image"
  },  
  
  {
    href: "https://www.youtube.com/watch?v=qiYiddjc6cU",
    src: "https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/8f159ea16ad0f36be77714fc8ab1dcae.jpg",
    alt:"Rise of Tomb Raider Game Image"
  },  

  {
    href: "https://www.youtube.com/watch?v=cklw-Yu3moE",
    src: "https://store-images.s-microsoft.com/image/apps.4128.71930896676716842.b6740fa4-0359-4ca8-9e17-5d4e45c2d497.ffa292b1-579d-4a08-99ef-308ab7791f79",
    alt:"Ori and the Blind Forest Image"
  },  
]

const careerProjectData = [
  {
    href: "https://www.linkedin.com/in/mayza-alvarenga/",
    src: "https://img.icons8.com/nolan/64/linkedin.png",
    alt:"Mayza Alvarenga LinkedIn"
  },

  {
    href: "https://github.com/MayzaAlv",
    src: "https://img.icons8.com/nolan/64/github.png",
    alt:"Mayza Alvarenga Github"
  },
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Header/>

    <main>
      <Section title="About Me" 
              subtitle="Hi there! I'm Mayza Alvarenga, a programmer who delights in coding,
              gaming, and sharing moments with my feline friends. 
              Whether immersed in lines of code or exploring virtual realms,
              the joy is always heightened by the company of my cat companions."/>

      <Section title="Career And Projects" 
      subtitle="Developer with expertise in Dynamics, 
        proficient in C# and JavaScript.
        Currently employed at AtoS. Here is a little 
        about my work and my projects:" 
        className="social-list">
        { 
          careerProjectData.map((item) => {
            return (
              <ListItem 
                href={item.href}
                src={item.src}
                alt={item.alt}
              />
            )
          })
        }

      </Section>

      <Section title="Games" subtitle="Here are some of the games I like:" className="games-list">
        
        {
          gameListData.map((item) => {
            return (
              <ListItem 
                href={item.href}
                src={item.src}
                alt={item.alt}
              />
            )
          })
        }

      </Section>
    </main>
  </>
);
