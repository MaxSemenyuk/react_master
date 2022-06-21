function Char(props){
    const {name, desc, pic} = props;
    return(
    <div>
        <h2>{name}</h2>
        <p>{desc}</p>
        <img src={pic}/>
    </div>)
}
export default Char;