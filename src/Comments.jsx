import { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

function Comments({data}) {
  
  const [replies ,setReplies] = useState(data)
  
  function recursiveIterator(data) {
    return data.map((comment) => ({
      ...comment,
      isOpen: true,
      replies: comment.replies && comment.replies.length > 0 ? recursiveIterator(comment.replies): []
    }));
  }

   useEffect(()=>{
    const temp = recursiveIterator(data);
     setReplies(temp)
   },[])


   const handleClick = (comment) => {
    toggleIsOpen(comment.id);
  };
  
  function toggleIsOpen(commentId){
     setReplies(prevReplies => {
        return toggleHelper(prevReplies , commentId)
     })
  }
  function toggleHelper(preRepliesArray,commentId){
      return preRepliesArray.map(c=>{
         if(c.id === commentId){
           return {...c , isOpen : !c.isOpen};
         }
         if(c.replies){
          return { ...c , replies : toggleHelper(c.replies)}
         }
         return c;
      })
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
            {data.replies && data.replies.length > 0 && (
              <>
                {data.isOpen && <Comments data={data.replies} />}
                <div className="icons">
                  { data.isOpen === true ?  <CiCirclePlus onClick={() => handleClick(data)} style={{ fontSize: "24px", cursor: "pointer" }}/>:
                  <CiCircleMinus onClick={() => handleClick(data)} style={{ fontSize: "24px", cursor: "pointer" }}/>
                  }
                </div>
              </>
            )}
            </div>
        </div>
     </div>
      })}
    </>
  )
}

export default Comments