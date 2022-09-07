import { useState } from "react";

export const useInitializeAvatarOptions = () => {

    const [anchorElUser, setAnchorElUser] = useState(null);


    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = (e) => {
        if (e.target.id === 'logout') {
            localStorage.removeItem('access_token');
        }
        setAnchorElUser(null);
    };
    return {
        handleOpenUserMenu,
        handleCloseUserMenu,
        setAnchorElUser,
        anchorElUser,
    }
}

export default useInitializeAvatarOptions