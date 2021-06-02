import { Redirect, Route } from 'react-router-dom';

const PrivateRouter = ({component: Component, login, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        login ?
        <Component {...props} />
        :
        <Redirect to={{
          pathname: "/login",
          state: {from: props.location}
        }} />
      )}
    />
  )
}

export default PrivateRouter;
