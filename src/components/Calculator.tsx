import styled from '../css/index.module.css';

export default function Calculator() {
  return (
    <div id={styled.app}>
      <div className={styled.calculator}>
        {/* total */}
        <h1 id={styled.total}>0</h1>
        {/* digits */}
        <div className={styled.digits}>
          {Array.from({ length: 10 }, (_, i) => 9 - i).map((digit) => (
            <button key={digit} className={styled.digit}>
              {digit}
            </button>
          ))}
        </div>
        {/* modifier */}
        <div className={`${styled.modifiers} ${styled.subgrid}`}>
          <button className={styled.modifier}>AC</button>
        </div>
        {/* operation */}
        <div className={`${styled.operations} ${styled.subgrid}`}>
          {['/', 'X', '-', '+', '='].map((operation, index) => (
            <button key={index} className={styled.operation}>
              {operation}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
