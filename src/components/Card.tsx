import './card.scss';

export default function Card() {
  return (
    <div>
      <img src='https://plchldr.co/i/200x200' alt='test' />
      <p className='title'>Hello</p>
      <img className='avatar' src='https://plchldr.co/i/20x20' alt='avatar' />
      <span className='name'>Name goes here</span>
    </div>
  );
}
