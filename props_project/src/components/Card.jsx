

const Card = (props) => {
    console.log(props)
  return (
    <div className='card'>
        <div className="top">
          <div id='t1'><p>{props.status}</p></div>
          <div id='t2'><p>{props.rate}</p></div>
        </div>

        <div className="middle">
          <img src={props.image} alt="" />
          <h3>{props.name}</h3>
          <p style={{marginTop:"6px",color:"gray"}}>{props.profession}</p>
          <p style={{color:"blue" , marginTop :"6px"}}>{props.company}</p>
          <div id='m1'>
            {
                props.skills.map(function(data,idx){
                    return <p key={idx}>{data}</p>
                })
            }
            <div>
              <p>+4</p>
            </div>
          </div>
          <p id='desc'>{props.bio}</p>
          <div id='m2'></div>
        </div>

        <div className="bottom">
            <p>VIEW PROFILE</p>
        </div>

      </div>
  )
}

export default Card
