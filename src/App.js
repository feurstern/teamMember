import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Employee from './components/Employee';
// const WebHeader = ()=>{
  
//   return(
//     <div>
//       <h1>Welcome to my website</h1>
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Employee />
      <Footer />
    </div>
  );
}

export default App;
