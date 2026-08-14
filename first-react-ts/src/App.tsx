import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { MainSite } from './components/MainSite';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header></Header>
      <MainSite></MainSite>
      <Footer></Footer>
    </div>
  )
}

export default App
