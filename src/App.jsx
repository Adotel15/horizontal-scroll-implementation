
import { PAGES } from "./Array.js"
import Scroll from "./components/Scroll"
import HorizontalScroll from 'react-scroll-horizontal'
import Tarjeta from "./components/Tarjeta.jsx"

function App() {

  
    return (
      <>

       { /*<div>
          <Scroll
            array = {PAGES}
            longitud = {PAGES.length - 1}
          />
        </div> */ }
        
        <div className = "scroll">
          <div className = "slider">
            <HorizontalScroll
              reverseScroll = { true }
              config        = {{ stiffness: 80, damping: 10}}
            >
              {
                PAGES.map ( page => (

                    <Tarjeta 
                      key = { page.id }
                      page = {page}
                    />
                ))
              }
            </HorizontalScroll>
          </div>
        </div>
      </>
    )
}

export default App
