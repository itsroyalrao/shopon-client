import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { user, logout } = useAuth0();

  console.log("user", user);

  return (
    <button
      className="w-full bg-red-600 px-4 py-2 rounded"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
