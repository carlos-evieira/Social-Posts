import { Header } from "./components/Header";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

function App() {
  return (
    <>
      <Header />
      
      <div className={styles.container}>
        <Sidebar />
          <div>
            <Post/>
            <Post/>
          </div>
          
      
      </div>
     </>
  );
}

export default App;
