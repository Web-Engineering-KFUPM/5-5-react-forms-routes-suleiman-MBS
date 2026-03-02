import { useState } from "react";

export default function Registration() {
  const [email, setEmail] = useState("");
  // Added state for password and gender
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form validations
    const nextErrors = {};

    // Email validation
    if (!email.trim()) {
      nextErrors.email = "Email is required";
    } else if (!(email.includes("@") && email.endsWith(".com"))) {
      nextErrors.email = "Enter a valid email address";
    }

    // Password validation
    if (!password.trim()) {
      nextErrors.password = "Password is required";
    }

    // Gender validation
    if (!gender) {
      nextErrors.gender = "Please select your gender";
    }

    setErrors(nextErrors);
    
    // Stop form submit if errors exist
    if (Object.keys(nextErrors).length > 0) return; 

    // Success alert only runs if validation passes
    alert(`User Registered: ${email}`);
  };

  return (
    <section>
      <h1>Student Registration</h1>
      <p className="muted">
        Create your portal access. Your email will be used for course updates.
      </p>

      <form onSubmit={handleSubmit} className="card form neon">
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            placeholder="you@example.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="error">{errors.email}</p>
          )}
        </div>
        
        <div className="form-row">
           {/* Password Field */}
           <label htmlFor="password">Password</label>
           <input
             id="password"
             type="password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
           />
           {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <fieldset className="form-row">
          <legend>Gender</legend>
          {/* Radio Buttons for gender */}
          <label className="radio">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
            /> Male
          </label>
          <label className="radio">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
            /> Female
          </label>
          {errors.gender && <p className="error">{errors.gender}</p>}
        </fieldset>

        {/* Disable the submit button until all requirements met */}
        <button 
          type="submit" 
          className="btn"
          disabled={!email || !password || !gender}
        >
          Register
        </button>
      </form>

      <div className="card info">
        <h3>Why Register?</h3>
        <ul className="list">
          <li>📘 Access course materials & assignments</li>
          <li>💬 Join the discussion forum</li>
          <li>🎓 Track your progress & get certified</li>
        </ul>
      </div>
    </section>
  );
}