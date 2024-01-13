import Topo from './componentes/Topo/topo';
import SecaoBanner from './componentes/SecaoBanner/banner';
import SecaoExperienciaTrabalho from './componentes/SecaoExperienciaTrabalho/index';
import Rodape from './componentes/Rodape/index';
import './App.css';


export default function App() {
  return (
  
		  <main>
		    <Topo />
		    <SecaoBanner />
		    <SecaoExperienciaTrabalho />
		    <Rodape />
		  </main>
		);
}