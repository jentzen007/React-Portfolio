import React from 'react';
import './Body.css';
import GitHub from './Certificates/GitHub.png';
import CloudComputing from './Certificates/CloudComputing.png';
import HTML from './Certificates/HTML,CSS,JS.png';
import Management from './Certificates/Management.png';
import business from './Certificates/Business.png';
import whatsapp from './Logos/WhatsApp.png';
import linkedin from './Logos/linkedin.png';
import mail from './Logos/mail.png';

function Body({ section }) {
  return (
    <div id="body">
      {section === 'About' && <About />}
      {section === 'Projects' && <Projects />}
      {section === 'Certificates' && <Certificates />}
      {section === 'Contact' && <Contact />}
    </div>
  );
}

function About() {
  return <center><div class="content"><h2>About Me</h2><p>Hello! I'm Jentzen, a passionate computer science and engineering student from India. I’ve always been fascinated by technology and the endless possibilities it offers. My love for coding began at an early age, and over the years, I’ve honed my skills by creating various projects such as stopwatches, games, and other web-based applications. Every line of code I write reflects my enthusiasm for problem-solving and creativity in the digital world.

  Growing up in a family where my dad runs his own business, I've learned the importance of dedication and perseverance. These values drive me in my journey to constantly improve as a developer and creator. Whether I’m building apps or exploring new web technologies, I always strive to push the boundaries of what I can achieve.
  
  Outside of coding, I’m an avid cyclist and love the thrill of driving cars. I find calmness in both, and I enjoy surrounding myself with people who are equally relaxed and composed. I believe in balancing ambition with a laid-back approach to life, which helps me stay grounded.
  
  Looking ahead, my goal is to land a position in a well-paying company where I can apply my skills, grow professionally, and continue creating innovative solutions. While I’m still in the early stages of my career, I’ve gained valuable experience through my studies and projects, and I’m excited to see where my journey in tech will take me next.</p></div>
</center>;
}

function Projects() {
  return <center><div class="content"><h2>Projects</h2><ul>
    <li>Creating a simple game has been one of my goals. While i was learning JavaScript form BroCode, I came across this idea and made this game, the <a class="projects" href="https://github.com/jentzen007/Rock-Paper-Scissors.git">Rock Paper Scissors</a>.</li>
    <li>The first GUI I learned was in Java. Excited upon learning jFrame and Swing in Java, I set on to create a <a class="projects" href="https://github.com/jentzen007/Stop-Watch.git">Java StopWatch</a> </li>
    <li>Challenged by by friends to create a caluclator using HTML,CSS, and JavaScript, I created the <a class="projects" href="https://github.com/jentzen007/Calculator.git">Calculator</a></li>
    <li>Having learnt the basics of front-end develping, I set of to develop a software that predicts whether a Credit/Debit card is valid. The <a class="projects" href="https://github.com/jentzen007/Card-Fraud-Detection.git">Fraud Card Detection System</a> uses the well known Luhn's Algorith.</li>
    </ul></div></center> ;
}

function Certificates() {
    return <center><div class="content"><h2>Certificate</h2>
    <h3>My Certificate of completing a course on Github</h3><img src={GitHub} alt="GitHub" />
    <h3>My Certificate of completing a course on Cloud Computing</h3><img src={CloudComputing} alt="Cloud Computing" />
    <h3>My Certificate of completing a course on HTML, CSS, and JavaScript</h3><img src={HTML} alt="Front-End using HTML,CSS, and JavaScript" />
    <h3>My Certificate of completing a course on Master Data Management</h3><img src={Management} alt="Master Data Management" />
    <h3>My Certificate of completing a course on Business Etiquete</h3><img src={business} alt="Business Ettiquete" />
    </div></center>;
  }

function Contact() {
  return <center><div id="contactInfo" ><h2 class="content">Contact</h2><ul>
  <li><img id="mail" src={mail}></img> jentzen2004@gmail.com</li>
  <li><img id="linkedin" src={linkedin}></img><a class='contact' href="in/jentzen-pablo-682893304"> Visit my Linkedin Profile!</a></li>
  <li><img id="whatsapp" src={whatsapp}></img>+91 9585377555</li>
  </ul></div></center>;
}

export default Body;
