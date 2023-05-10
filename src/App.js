import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import notes from "./notes"
import Note from "./components/Note"
function App() {
  return (
    <div className="App">
      <Navbar />
      {notes.map(noteItem => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
