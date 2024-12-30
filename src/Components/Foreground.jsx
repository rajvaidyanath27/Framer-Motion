import React,{useRef} from 'react'
import Card from '../Components/Card'


function Foreground() {

    const ref = useRef(null);  //is a hook that is used in functional components to create a reference to an element in the DOM or to persist a value across renders without triggering re-renders.

    const data = [
        {
            desc: "Just Drag ME !",
            filesize: ".9mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Download Now" , tagColor: "green"},
        },
        {
            desc: "And you will see a Magic!!",
            filesize: ".9mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Download Now" , tagColor: "blue"},
        },
        {
            desc: "Yeah it's the power of React!",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: false, tagTitle: "Download Now" , tagColor: "green"},
        },
    ]
  return (  
    <>
     <div ref={ref} className="w-full h-full z-[3] top-0 left-0 fixed flex-wrap  flex gap-8 p-5  ">
        {data.map((item,index) => {
          return <Card key={index} data={item} reference={ref}/>  
        })}
     </div>
    
    
    </>
  )
}

export default Foreground
