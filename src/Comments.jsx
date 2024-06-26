

import React from 'react'

function Comments({data}) {
  return (
    <>
    
      {data.map((data,index)=>{
        return <div className="comment" key={index}>
        <img src={data.profile_image} alt="" />
        <div className="detail">
            <p>{data.author}</p>
            <p>{data.content}</p>

            <div className="replies">
                {data?.replies && <Comments data={data.replies}/>}
            </div>
        </div>
     </div>
      })}
    </>
  )
}

export default Comments