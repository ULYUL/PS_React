import "./App.css";
import Button from "./components/Button/Button";
import Paragraph from "./components/Paragraph/Paragraph";
import Title from "./components/Title/Title";

function App() {
  return (
    <>
    <Title title="Поиск"></Title>
      <Button text = "Искать"/>
      <Paragraph text = 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'></Paragraph>
    </>
  );
}

export default App;
