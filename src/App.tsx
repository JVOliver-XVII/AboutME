import "./App.css";
import BeamGridBackground from "./components/beamGrid";
import { Card } from "./components/card";
import { DiscordIcon } from "./assets/discord";
import { GitHubIcon } from "./assets/github-icon";
import { LinkedInIcon } from "./assets/linkedin";
import profileIcon from "./assets/profileIcon.png";

function App() {
  return (
    <BeamGridBackground
      beamColor="rgba(249, 115, 22, 0.8)"
      darkBeamColor="rgba(251, 146, 60, 0.8)"
      beamGlow={true}
      interactive={true}
      asBackground={false}
    >
      <div className="App">
        <Card
          name="João Victor"
          role="Dev Full Stack"
          avatarUrl={profileIcon}
          description=" Olá, meu nome é João e sou desenvolvedor Full Stack. Graduando em Tecnologia em Sistemas de Computação "
          skills={["ReactJs", "TypeScript", "NextJS", "CSS", "HTML", "Tailwind CSS", "Sass", "NodeJs", "Prisma", "SQL" ]}
          socialLinks={[
            {
              name: "GitHub",
              url: "https://github.com/JVOliver-XVII",
              icon: <GitHubIcon />,
            },
            {
              name: "LinkedIn",
              url: "www.linkedin.com/in/joão-victor-duarte-b42887301",
              icon: <LinkedInIcon />,
            },
            {
              name: "Discord",
              url: "https://discord.com/users/1068315893588820018",
              icon: <DiscordIcon />,
            },
          ]}
          
        />
       
      </div>
    </BeamGridBackground>

  );
}

export default App;
