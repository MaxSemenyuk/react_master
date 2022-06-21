function Characters(props){
    const {id, name, status, species, gender, image}= props;
    return(
        <div>
            <h1>id:{id} name:{name}</h1>
            <h3>status:{status} species:{species} gender:{gender}</h3>
            <img src={image}/>
            <p>----------------------------------------------------------------------------------------------------</p>
        </div>
    )
}
export default Characters