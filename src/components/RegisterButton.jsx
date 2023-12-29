import { useAuth0 } from "@auth0/auth0-react";

const RegisterButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="w-full px-4 py-2 rounded bg-blue-600"
      onClick={() => loginWithRedirect({ screen_hint: "signup" })}
    >
      Register
    </button>
  );
};

export default RegisterButton;
