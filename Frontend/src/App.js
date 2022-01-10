import Login from "./containers/login";
import useCurrentUser from "./hooks/useCurrentUser";
import Search from "./containers/search";

function App() {
  const { isLoggedIn } = useCurrentUser();
  return (
    <div className="root">
      <h1>Spotify</h1>
      {isLoggedIn ? <Search /> : <Login />}
    </div>
  );
}

export default App;
