import "./styles.css";
import Header from "./Header";
import Body from "./Body";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Header />
        <Body />
      </RecoilRoot>
    </div>
  );
}
