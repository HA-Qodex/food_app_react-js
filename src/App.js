import Index from "./routes";
import './App.css'
import { AnimatePresence } from "framer-motion";

function App() {
  return (
  <AnimatePresence exitBeforeEnter>
  <Index />
  </AnimatePresence>
  );
}

export default App;
