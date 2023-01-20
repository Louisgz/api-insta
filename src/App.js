import "./App.css";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

function App() {
  const responseFacebook = (response) => {
    console.log(response);
  };

  return (
    <div className="App">
      <FacebookLogin
        appId="1218678432397803"
        autoLoad
        callback={responseFacebook}
        render={(renderProps) => (
          <button onClick={renderProps.onClick}>
            This is my custom FB button
          </button>
        )}
      />
    </div>
  );
}

export default App;

