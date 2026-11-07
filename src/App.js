import { Greeting } from "./component/Greeting";
import { Message } from "./component/Message";
import { Button } from "./component/Button";

let userInput = prompt("Пожалуйста, введите ваше имя:");
let message = "Ласкаво просимо до нашого React-додатку!";



function App() {
  const onClick = () => {
    console.log("Кнопку натиснуто!");
  };

  return (
    <>
      <Greeting name={userInput} />
      <Message text={message} />
      <Button onClick={onClick} />
    </>
  );
}

export default App;
