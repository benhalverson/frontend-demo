import Header from '../components/Header';
import './stories.scss';
import Card from '../components/Card';

// import { CardData } from '../data/data';

// type Props = {
//   stories: CardData[];
// };
export default function StoriesPage() {
  return (
    <div>
      <Header />
      <section>
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
