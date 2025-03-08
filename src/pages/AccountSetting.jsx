import React from "react";






const AccountSetting = () => {
    // const navigate = useNavigate();   //it is a hook, think of it as a routers that we can use to route it to different routes

    React.useEffect(() => {
        window.location.href = "/assets/static/AccountSetting.html";
    }, []);

    return null;
};

export default AccountSetting;

