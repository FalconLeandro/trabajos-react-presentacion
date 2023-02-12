import './App.css';
import Card from './components/Card';

function App() {
  return (
    
    <div className="App">
      <div className="app-container">
      
        <h1>Leandro</h1>
        <div className="card-container">
          <Card
            image='calzado-air-max-flyknit-racer-m3NSDB'
            title='Nike Air Max'
            shoesGenre='Mujer'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa facilis voluptas odio officia maiores recusandae deserunt in quos aliquid sunt?'
            array={[38, 40,]}
          />
          <Card
            image='descarga (1)'
            title='Nike Max'
            shoesGenre='Hombre'
            description='Lpsa facilis voluptas odio officia maiores recusandae deserunt in quos aliquid sunt?'
            array={[38, 40, 41, 42, 44]}
          />
          <Card
            image='images'
            title='Nike Air Max'
            shoesGenre='Mujer'
            description='Lacilis voluptas odio officia maiores recusandae deserunt in quos aliquid sunt?'
            array={[38, 40, 42, 43]}
          />
          
        </div>
        <div className="card-container">
          <Card
            image='calzado-air-max-flyknit-racer-m3NSDB'
            title='Nike Air Max'
            shoesGenre='Mujer'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa facilis voluptas odio officia maiores recusandae deserunt in quos aliquid sunt?'
            array={[38, 40, 41, 42, 45]}
          />
          <Card
            image='descarga (1)'
            title='Nike Max'
            shoesGenre='Hombre'
            description='Lpsa facilis voluptas odio officia maiores recusandae deserunt in quos aliquid sunt?'
            array={[41, 42, 44]}
          />
          <Card
            image='images'
            title='Nike Air Max'
            shoesGenre='Mujer'
            description='Lacilis voluptas odio officia maiores recusandae deserunt in quos aliquid sunt?'
            array={[38, 40, 41, 42]}
          />
          
        </div>
      </div>
    </div>
  );
}

export default App;
