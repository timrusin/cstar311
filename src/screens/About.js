import React from 'react'
import about_photo from '../assets/photos/about_placeholder.jpeg'
import './About.css'

const About = () => {
  return (
    <div className="about-section fade-in-image">
      <img
        src={about_photo}
        className="about-photo"
        alt="Joe Hinojosa head shot"
      />
      <div className="about-narrative">
        <h1>Joe Hinojosa</h1>
        <p>
          Pariatur pariatur dolor ullamco mollit. Consectetur nisi pariatur
          ipsum cillum ad quis. Et ea labore in Lorem in proident cupidatat.
          Aliqua proident veniam occaecat eu enim. Et officia ex irure mollit
          occaecat duis enim nostrud est est. Reprehenderit ut eu pariatur
          cillum nulla duis duis.
        </p>

        <p>
          Occaecat ea ex duis cillum magna cupidatat occaecat excepteur nisi
          magna aliqua eiusmod velit dolore. Velit adipisicing duis enim
          pariatur ad do labore ea nulla nisi. Voluptate exercitation proident
          enim consectetur exercitation. Officia ea esse cillum aliquip ex
          aliqua deserunt culpa. Commodo eu eiusmod dolore esse laborum proident
          proident. Magna esse esse est Lorem dolore dolor. Qui velit mollit
          reprehenderit cupidatat esse eiusmod fugiat velit consectetur
          cupidatat.
        </p>
      </div>
    </div>
  );
}

export default About