import React from "react";
import { useNavigate } from "react-router";
// import styles from './Home.module.css'
// import the image
// import logo from '../../assets/images/cover.jpg'


const Home = () => {
    // const navigate = useNavigate();   //it is a hook, think of it as a routers that we can use to route it to different routes

    React.useEffect(() => {
        window.location.href = "/assets/static/home.html";
    }, []);

    return null;
};
// return (<div>
//     <h2>Click below to view the static HTML page</h2>
//     {/* <li><Link to="/">Home</Link></li> */}
//     {/* <a href="/assets/static/your-page.html" rel="noopener noreferrer"> */}
//     {/* Go to Static HTML Page */}
//     {/* </a> */}
// </div >
// );




//dynamic pages with css styling, uncomment in phase 3

// (

//     <div className={styles.container}>
//         <img className={`${styles.image} ${styles.item}`} src={logo} alt="some image here" />
//         <div className={`${styles.item} ${styles.entry}`}>
//             <p className={`${styles.para}`}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
//                 dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
//                 in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                 Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis
//                 sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor.
//                 Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum.
//                 Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl
//                 adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis,
//                 laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci. In hac habitasse platea dictumst.
//             </p>
//             <button onClick={() => navigate('/prodlist')}>Start Exploring</button>
//         </div>

//     </div >

// );


export default Home;