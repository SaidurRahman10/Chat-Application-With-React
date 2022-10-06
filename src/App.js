import { ChatEngine } from "react-chat-engine";

import LoginForm from "./Components/LoginForm";
import ChatFeed from "./Components/ChatFeed";
import "./App.css";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <div className="">
      <ChatEngine
        height="100vh"
        projectID="1eff7410-1514-47ec-9e70-dba5be255163"
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </div>
  );
};

export default App;
