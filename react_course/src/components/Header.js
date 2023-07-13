import propTypes from 'prop-types';
import '../css/Footer.css';

function Header(props){
    return (
        <>
            <h1>My Name is Iranna {props.name}</h1>
        </>
    )
}

//props are the arguments those we are passing from App.js or we can pass like this {name,val} and we can use 
//directly like {name} instead of props.name
const Footer = (props) => {
    return (
        <div className = "content"><h1 >This is Footer And {props.val}</h1></div>
    )
}

Header.propTypes = {
    name: propTypes.string
}

//If props is not passed in App.js for Header tag. it will take the default props for prop.name
Header.defaultProps = {
    name: "Sanjay Kokatanur"
}


export {Footer};
export default Header;

//npm install prop-types
//propstype to define the datatype of props. It will check the datatype of props whether it is correct or not