import React from "react";

// About Page


const ContactUs = () => {
    // const navigate = useNavigate();   //it is a hook, think of it as a routers that we can use to route it to different routes

    React.useEffect(() => {
        window.location.href = "/assets/static/ContactUs.html";
    }, []);

    return null;
};

export default ContactUs;

