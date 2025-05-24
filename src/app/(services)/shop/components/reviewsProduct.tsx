import CommentBlock from "@/components/commentBlock"
import { ComSectProps } from "@/types/typeComSect"

const RenderArray = () => {
    
}

const RenderArrayLast = () => {
    
}
//TODO: COMMENTBLOCK update func and the type & add data of posting

//TODO:make func to divide the array for 2 colums & random choice of elements 

//TODO: make func to render comments from the last into the first 

//TODO: add modals || dropdowns & func DELETE | EDIT to COMMENTBLOCK 

export default function ReviewsProduct({array}: {
    array: ComSectProps[]
}) {
    return(
        <article className="flex items-center justify-items w-full">
            <div className="grid grid-cols-2 items-center gap-5 w-full">
                {array.map((obj, index) => (
                    <CommentBlock //TODO: change width's settings to optimaze width for two pages
                        key={index}
                        {...obj}
                    />
                ))}
            </div>
        </article>
    )
}