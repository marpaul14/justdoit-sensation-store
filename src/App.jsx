import { Hero } from './components';
import { heroapi } from './data/data';
function App() {
  return (
    <>
      <main>
        <Hero heroapi={heroapi} />
      </main>
    </>
  );
}

export default App;
