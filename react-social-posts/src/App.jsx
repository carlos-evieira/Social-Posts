import { Header } from "./components/Header";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
     <>
      <Header />
      <div className={styles.container}>
        <Sidebar />
        <div>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, labore
            iste magnam recusandae dicta neque atque sequi rerum pariatur eveniet
            maxime ex eligendi, dolore reiciendis? Accusantium excepturi veniam
            consectetur praesentium?
          </div>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, labore
            iste magnam recusandae dicta neque atque sequi rerum pariatur eveniet
            maxime ex eligendi, dolore reiciendis? Accusantium excepturi veniam
            consectetur praesentium?
          </div>
        </div>
      </div>
     </>
  );
}

export default App;
