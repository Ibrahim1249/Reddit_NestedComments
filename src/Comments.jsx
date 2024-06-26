import { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";


function Comments({data}) {
  
  const [replies ,setReplies] = useState(data)

 

  function handleClick(e,data){
      // setReplies([...replies , {[data.isOpen] : !data.isOpen}])
      // console.log([ data.isOpen : !data.isOpen ])
  }

  return (
    
    <>
    
      {replies.map((data,index)=>{

        return <div className="comment" key={index}>

        <img src={data.profile_image} alt="" />
        <div className="detail">
            <p>{data.author}</p>
            <p>{data.content}</p>

            <div className="replies">
                {data?.replies &&  <Comments data={data.replies}/>}
                {data?.replies.length > 0 && <div className="icons">
            <CiCirclePlus  onClick={(e)=>{handleClick(e,data)}} style={{fontSize:"24px" , cursor:"pointer"}}/>
          </div> }
            </div>
        </div>
     </div>
      })}
    </>
  )
}

export default Comments