import React, { useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { useHistory } from 'react-router-dom';

function Root(): React.ReactElement {
  const history = useHistory();

  useEffect(() => {
    (async () => {
      try {
        await Auth.currentSession();
        history.replace('todo-list');
      } catch (e) {
        history.replace('sign-in');
      }
    })();
  }, [history]);
  return <div />;
}

export default Root;
