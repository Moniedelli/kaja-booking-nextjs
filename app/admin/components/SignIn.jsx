import { useState } from "react";
import { signIn } from "next-auth/react";

const SignInModal = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();

    const result = await signIn("admin-credentials", {
      redirect: false,
      email,
      password,
    });

    if (!result.error) {
      // Successful login
      onClose(); // Tutup modal setelah login berhasil
    } else {
      // Failed login
      console.error("Login failed:", result.error);
    }
  };

  return (
    <div>
      <h1>Admin Sign In</h1>
      <form onSubmit={handleSignIn}>
        <label>Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignInModal;
