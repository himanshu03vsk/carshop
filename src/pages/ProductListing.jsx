import React from "react";








const ProductListing = () => {
    // const navigate = useNavigate();   //it is a hook, think of it as a routers that we can use to route it to different routes

    React.useEffect(() => {
        window.location.href = "/assets/static/ProductListing.html";
    }, []);

    return null;
};

export default ProductListing;

