import Calculator from "./components/Calculator";
import MainReducer from "./context/MainContext";

function App() {
  return (
    <div className="p-10 bg-rose-50 dark:bg-black w-screen min-h-screen flex justify-center items-center">
      <MainReducer>
        <Calculator />
      </MainReducer>
    </div>
  );
}

export default App;
