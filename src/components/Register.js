import { useState } from "react";
import "./styles.css";

function Register() {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registering:", formData);
  };

  return (
    <div className="container">
      <h2>🆕 Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" required 
          value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
        
        <input type="email" placeholder="Email" required 
          value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        
        <input type="password" placeholder="Password" required 
          value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
