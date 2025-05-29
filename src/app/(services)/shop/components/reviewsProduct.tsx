"use client"

import CommentBlock from "@/components/commentBlock"
import { ComSectProps } from "@/types/typeComSect"
import { PopoverSetBut } from "./popoverSetBut"
import { CreateIcon } from "@/components/creationIcon"
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react"
import { CommentForm } from "./commentForm"

//TODO: make func to render comments from the last into the first 
//TODO: make func to render random choice of objs
export default function ReviewsProduct({array}: {
    array: ComSectProps[]
}) {
    const [comments, setComments] = useState<ComSectProps[]>(array);
    const [showForm, setShowForm] = useState(false);

    const handleCommentSubmit = (commnetData: {
        username: string;
        textCom: string;
        grade: number;
    }) => {
        const newComment: ComSectProps = {
            id: comments.length + 1,
            grade: commnetData.grade,
            text: {
                username: commnetData.username,
                textCom: commnetData.textCom
            }
        }

        setComments([newComment, ...comments]);
        setShowForm(false);
    }
    
    const RenderArray = ({array}: {
        array: ComSectProps[]
    }) => {
        //return()
    }

    const RenderArrayLast = () => {
        
    }

    return(
        <article className="flex flex-col items-center justify-items w-full gap-8">
            <div className="flex justify-between w-full items-center">
                <div className="flex items-end gap-2">
                    <h2 className="font-satoshi font-bold text-2xl leading-100 text-black">
                        All Reviews
                    </h2> 
                    <h4 className="font-satoshi font-normal text-base leading-trim-cap text-black/60">
                        ({comments.length})
                    </h4>
                </div>
                <div className="flex items-center gap-[10px]">
                    <PopoverSetBut />
                    <div
                        className="flex justify-evenly items-center rounded-[62px] bg-light-gray px-5 py-3 gap-[21px] cursor-pointer"
                        onClick={() => {}}
                    >
                        <h3 className="font-satoshi font-medium text-base leading-100 tracking-0 text-black">
                            Latest
                        </h3>
                        <CreateIcon icon={IoIosArrowDown} className="w-4 h-4 text-black" />
                    </div>
                    <button 
                        onClick={() => setShowForm(!showForm)}
                        className="flex justify-center rounded-[62px] items-center px-7 py-3 bg-black"
                    >
                        <h3 className="font-satoshi font-medium text-base leading-100 tracking-0 text-white">
                            Write a Review
                        </h3>
                    </button>
                </div>
            </div>
            {showForm && (
                <CommentForm onSubmit={handleCommentSubmit} />
            )}
            <div className="grid grid-cols-2 items-center gap-5 w-full">
                {array.map((obj, index) => (
                    <CommentBlock
                        key={index}
                        {...obj}
                    />
                ))}
            </div>
        </article>
    )
}