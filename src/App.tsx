import Counter from './features/counter/counter';
import Posts from './features/posts/posts';

function App(){

  return(
    <div>
      <h1>Redux Toolkit Example</h1>
      <Counter />
      <Posts />
    </div>
  );
}

export default App;