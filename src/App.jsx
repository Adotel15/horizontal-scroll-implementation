
import { PAGES } from "./Array.js"
import Scroll from "./components/Scroll"

function App() {
  
    return (
      <div>
        <Scroll
          array = {PAGES}
          longitud = {PAGES.length - 1}
        />
      </div>
    )
}

export default App
