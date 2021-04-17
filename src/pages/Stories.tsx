import Header from '../components/Header';
import Card from '../components/Card';

import './stories.scss';

export default function StoriesPage() {
  return (
    <div>
      <Header />
      <section className='stories-hero'>
        <h1>Stories</h1>
      </section>
      <h1>Latest</h1>
      <section>
        <div className='wrapper'>
          <div className='card'>
            <Card />
          </div>
          <div className='card'>
            <Card />
          </div>
          <div className='card'>
            <Card />
          </div>
        </div>
      </section>
      <h1>Editor's Picks</h1>
      <section>
        <div className='wrapper'>
          <div className='card'>
            <Card />
          </div>
          <div className='card'>
            <Card />
          </div>
          <div className='card'>
            <Card />
          </div>
        </div>
      </section>
    </div>
  );
}
