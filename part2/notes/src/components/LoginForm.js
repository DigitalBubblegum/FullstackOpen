import PropTypes from 'prop-types'
const LoginForm = ({
  handleLogin,
  username,
  password,
  handleUsernameChange,
  handlePasswordChange,
}) => {
  return (
    <form onSubmit={handleLogin}>
      <div>
        username
        <input
          type="text"
          value={username}
          name="Username"
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        password
        <input
          type="password"
          value={password}
          name="password"
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit">login</button>
    </form>
  );
};
LoginForm.propTypes = {
  handleLogin:PropTypes.func.isRequired,
  username:PropTypes.func.isRequired,
  password:PropTypes.func.isRequired,
  handleUsernameChange:PropTypes.string.isRequired,
  handlePasswordChange:PropTypes.string.isRequired,
};
export default LoginForm