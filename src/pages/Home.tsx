import React from 'react';
import Hero from '../components/Hero';
import Header from '../components/Header';

import './home.scss';
const HomePage = () => (
  <div>
    <Header />
    <Hero />
    <section>
      <h1>Smart tools for founders.</h1>
      <p>
        LearnStart is the simplest way for startup founders to discover
        inspiring stores from startup founders from all over the world, all in
        one place.
      </p>
    </section>
    {/* <section className='container'>
      <div className='flex-left'>Left side</div>
      <div className='flex-right'>
        <img src='https://plchldr.co/i/400x400' alt='placeholder' />
      </div>
    </section>
    <section className='container'>
      <div className='flex-left'>Left side</div>
      <div className='flex-right'>
        <img src='https://plchldr.co/i/400x400' alt='placeholder' />
      </div>
    </section> */}

    <section className='two-column'>
      <div>
        <span>
          <h2>Only the hottest startups.</h2>
          <p>
            We hand-select only the hottest startups and our expert copywriters
            interview and produce every story.
          </p>
        </span>
      </div>
      <div>
        <img src='https://plchldr.co/i/400x400' alt='placeholder' />
      </div>
    </section>
    <section className='two-column reverse'>
      <div>
        <span>
          <h2>Simplest way to read.</h2>
          <p>
            Learn from your phone or from your computer, and continue where you
            leff off anytime.
          </p>
        </span>
      </div>
      <div>
        <img src='https://plchldr.co/i/400x400' alt='placeholder' />
      </div>
    </section>
    <section className='two-column'>
      <div>
        <span>
          <h2>Free. Forever.</h2>
          <p>
            We're a non-profit project supported by Silicon Valley's top VC's
            and startup incubators. You won't have to pay a cent.
          </p>
        </span>
      </div>
      <div>
        <img src='https://plchldr.co/i/400x400' alt='placeholder' />
      </div>
    </section>
    <footer>
      <h2>Let's get started</h2>
      <button>Read Now</button>
    </footer>
  </div>
);

export default HomePage;
