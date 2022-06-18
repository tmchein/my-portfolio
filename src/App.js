import "./App.css";
import FooterWindow from "./components/FooterWindow";
import LangSwitch from "./components/LangSwitch";
import Window from "./components/Window";
import WindowContent from "./components/WindowContent";
import WindowHeader from "./components/WindowHeader";
import { I18NProvider } from "./context/useI18n";

function App() {
  return (
    <I18NProvider>
      <div className="w-full h-screen grid items-center relative">
        <img
          src="/background.jpeg"
          alt="bg"
          className="w-full h-full object-cover absolute top-0 left-0 -z-20"
        />
        <section className="px-2 sm:px-10 flex items-center justify-center flex-col h-[95%] md:h-[550px]">
          <Window>
            <WindowHeader>
              <LangSwitch />
            </WindowHeader>
            <WindowContent />
          </Window>
        </section>
        <FooterWindow />
      </div>
    </I18NProvider>
  );
}

export default App;
