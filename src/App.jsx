import "./App.css";
import Card from "./components/cards/card";
import { getAllData } from "./constants/db";

const courses = getAllData();

function App() {
  return (
    <>
      <h1>Hello, React!</h1>
      <div className="cards__container">
        {courses.map((course) => (
          <>
            <Card key={course.id} course={course} />
          </>
        ))}
      </div>
    </>
  );
}

export default App;
