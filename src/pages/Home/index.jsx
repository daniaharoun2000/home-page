import Section1 from'./components/Section1';
import Section2 from'./components/Section2';
import Section3 from'./components/Section3';
import"./TopSaveToday.scss"
import "./Section1.scss"
import "./Section2.scss"
import "./Section3.scss"
import './Section3LeftPart.scss'
import React from "react";
import ScrollButton from './components/ScrollButton';
import './BowsebyCategories.scss'
import './fiftypercentoffer.scss'
function Home() {
  return (
    <header id="main-home">
    
      <section>
        <Section1 />
      </section>
   <section>
        <Section2 />
      </section>
      <section><Section3 /></section>
      <ScrollButton
   
    />
    </header>
  );
}

export default Home;
