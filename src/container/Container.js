import classes from "./Container.module.css";

function Card(props) {
    return <div className={classes.container}>{props.children}</div>
}

export default Card;
