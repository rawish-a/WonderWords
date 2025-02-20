import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && ( //isAuthenticated && part ensures that the button is only displayed if isAuthenticated is true
            <button onClick={() => logout()}>
                Sign Out
            </button>

        )

    )
}

export default LogoutButton