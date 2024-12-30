import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { IoMdCloudDownload } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "framer-motion";

function Card({data , reference}) {
  return (
    <>
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} dragElastic={0.2} className="relative text-white w-60 h-72 rounded-[30px] bg-zinc-900 bg-opacity-80 py-5 px-8 overflow-hidden">
        <FaRegFileAlt />
        <p className="mt-5 text-1xl leading-tight ">{data.desc}</p>
        <div className="footer absolute bottom-0  w-full left-0">
            <div className="flex items-center justify-between   py-3 px-7">
                <h5>{data.filesize}</h5>
                {data.close ? < IoMdCloseCircle /> : <IoMdCloudDownload />}
                 
            </div>
            {
                data.tag.isOpen && (
                    <div className={`tag w-full py-4 h-10 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                        <h3 className='text-ms font-semibold'>{data.tag.tagTitle}</h3>
                    </div>
                ) 
            }
            
        </div>

    </motion.div>
    </>
  )
}

export default Card
   