import Button from './Button.js';
import Card from './Card.js';

function App() {
  return (
    <div>
      <Button link="/home" width="100px">Home</Button> 
      <Button link="/about" width="100px">About</Button>
      <Button link="/contact" width="300px">Register</Button>

      <Card 
        image="https://images.unsplash.com/photo-1581278877093-d2f751dad191?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1354&q=80"
        title="Berchtesgaden, Germany"
        description="Lovely travel destination"
        buttonLabel="Visit"
        buttonLink="http://..."
      />
    </div>
  );
}

export default App;
