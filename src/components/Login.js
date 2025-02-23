import { useState } from "react";
import "./styles.css";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in:", formData);
  };

  return (
    <div className="container">
      <h2>🔑 Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" required 
          value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        
        <input type="password" placeholder="Password" required 
          value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
