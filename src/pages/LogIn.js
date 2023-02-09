import "./LogIn.css";

function LogIn() {
  return (
    <form>
      <div>
        <h2>Log in to your Account</h2>
      </div>
        <div>
          <input type="text" placeholder="Email" className="input"></input>
        </div>
      <div>
        <input type="text" placeholder="Password" className="input"></input>
      </div>
      <button className="button">LogIn</button>
      <div className="spacing">
        <a href="#">Forgot password?</a>
      </div>
      <div>
        New here? <a href="#">Register now</a>
      </div>
    </form>
  );
}

export default LogIn;