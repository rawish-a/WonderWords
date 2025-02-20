import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    //loginWithRedirect: A function provided by Auth0 that triggers the login flow by redirecting the user to an authentication page.
    //isAuthenticated: A boolean indicating whether the user is authenticated or not; provided by the useAuth0

    return (
        !isAuthenticated && ( //!isAuthenticated && ensures that the button is only displayed if isAuthenticated is false (i.e., the user is not signed in)
            <button onClick={() => loginWithRedirect()}>
                Sign In
            </button>

        )

    )
}

export default LoginButton