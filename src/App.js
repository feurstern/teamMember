import logo from './logo.svg';
import './App.css';
import { Content, Footer, Employee, Header } from './components';
  
//   return(
//     <div>
//       <h1>Welcome to my website</h1>
//     </div>
//   );
// }

const App =()=>(
 <div>
  <Header />
  <Content />
  <Employee />
  <Footer />
 </div>
);

export default App;
