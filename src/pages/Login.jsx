import React from "react";








const Login = () => {
    // const navigate = useNavigate();   //it is a hook, think of it as a routers that we can use to route it to different routes

    React.useEffect(() => {
        window.location.href = "/assets/static/Login.html";
    }, []);

    return null;
};



export default Login;

