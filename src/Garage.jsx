import Car from "./Car";


function Garage() {
    const element = <Car color="green" model="BMW"></Car>
    return (
        <div>
        <h1>Who lives in my Garage</h1>

      <Car color="red" model="Ferrari"/>
            {element}
        </div>
    );
}
export default Garage;