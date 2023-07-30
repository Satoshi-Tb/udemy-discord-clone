import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import "./App.scss";
import { Chat } from "./components/chat/Chat";
import Login from "./components/login/Login";
import Sidebar from "./components/sidebar/Sidebar";
import { RootState } from "./app/store";
import { auth } from "./firebase";
import { login, logout } from "./features/userSlice";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./utils/ErrorFallback";

function App() {
  const user = useAppSelector((state: RootState) => state.user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      if (loginUser) {
        dispatch(
          login({
            uid: loginUser.uid,
            photo: loginUser.photoURL,
            email: loginUser.email,
            displayName: loginUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <>
      <div className="app">
        {user ? (
          <>
            <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
              <Sidebar />
            </ErrorBoundary>
            <Chat />
          </>
        ) : (
          <>
            <Login />
          </>
        )}
      </div>
    </>
  );
}

export default App;
