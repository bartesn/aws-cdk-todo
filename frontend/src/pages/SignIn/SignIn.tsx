import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import { Auth } from 'aws-amplify';

function SignIn(): React.ReactElement {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    try {
      await Auth.signIn(username, password);
      const session = await Auth.currentSession();
      const cookies = new Cookies();
      cookies.set('todo-token', session.getAccessToken().getJwtToken());

      window.location.replace('todo-list');
    } catch (e) {
      setError(e?.message || 'Error');
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="username">
        Username
        <input
          type="text"
          id="username"
          name="username"
          onChange={({ target: { value } }) => setUsername(value)}
          required
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          type="password"
          id="password"
          name="password"
          onChange={({ target: { value } }) => setPassword(value)}
          required
        />
      </label>
      <button type="submit">Log in</button>
      <div>{error}</div>
    </form>
  );
}

export default SignIn;
