import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Sidebar from "./components/SideMenu/Sidebar";
import Slider from "./components/Silder";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="mt-4 ml-[-120px] w-full mr-20">
        <Header />
        <div className="flex items-center justify-start mt-4 w-full">
          <div className="max-w-10xl w-full">
            <Slider />
          </div>
        </div>
        <Main />
      </div>
    </div>
  );
}

export default App;
