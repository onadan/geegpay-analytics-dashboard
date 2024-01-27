import Header from "./components/header";
import Sidebar from "./components/sidebar";
import MainView from "./views/main";

export default function App() {
  return (
    <>
      <Sidebar />

      <div className="ml-20">
        <Header />

        <MainView />
      </div>

      {/* <SimpleBarChart /> */}
    </>
  );
}
