import { ComSectProps } from "@/types/typeComSect";
import '../app/globals.css'
import { FaCircleCheck } from "react-icons/fa6";
import { CreationGrade } from "./creationGrade";

export default function CommentBlock({
    id,
    grade,
    text: {
        username,
        textCom,
    },
}: ComSectProps) {
    const Icon = FaCircleCheck;
    return(
        <article 
            className="flex flex-col items-start h-60 w-[400px] rounded-[20px] border border-gray-500 gap-[15px] px-8 py-7"
            key={id}
        >
            <CreationGrade grade={grade} className="yellow-800" />
            <div className="flex flex-col items-start gap-3 w-auto">
                <div className="flex items-center gap-1 h-auto">
                    <h3 className="font-satoshi text-xl font-bold leading-[22px] tracking-[0%] text-black">
                        {username}
                    </h3>
                    <Icon className="w-5 h-5 text-green-800" />
                </div>
                <p className="font-satoshi text-base font-normal leading-[22px] tracking-[0%] text-black w-[336px]">
                    {textCom}
                </p>
            </div>
        </article>
    )
}