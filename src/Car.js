import "./Car.css";
function Car(props){
    return(
        <div className="Dunkel Rahmen">
            <h1 >I am a {props.color} Car</h1>
            <h1>I am a {props.model} </h1>
        </div>
    );
}
export default Car;