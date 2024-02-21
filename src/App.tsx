import { Button } from './components/button/Button';
import { BUTTON } from './components/button/button.constant';

function App() {
  return (
    <div id='app'>
      <div className='calculator'>
        <h1 id='total'>0</h1>
        <div className='digits flex'>
          {Object.values(BUTTON.DIGIT.CHILDREN).map(({ ID, VALUE }) => (
            <Button key={ID} type={BUTTON.DIGIT.TYPE}>
              {VALUE}
            </Button>
          ))}
        </div>
        <div className='modifiers subgrid'>
          {Object.values(BUTTON.MODIFIER.CHILDREN).map(({ ID, VALUE }) => (
            <Button key={ID} type={BUTTON.MODIFIER.TYPE}>
              {VALUE}
            </Button>
          ))}
        </div>
        <div className='operations subgrid'>
          {Object.values(BUTTON.OPERATION.CHILDREN).map(({ ID, VALUE }) => (
            <Button key={ID} type={BUTTON.OPERATION.TYPE}>
              {VALUE}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
