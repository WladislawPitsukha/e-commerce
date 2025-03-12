import { ComSectProps } from "@/types/typeComSect";
import '../app/globals.css'
import { FaCircleCheck, FaStar } from "react-icons/fa6";

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
            <div className="flex items-end gap-2">
                <div className="flex gap-[7px]">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar
                            key={star}
                            className={`w-[22px] h-[22px] ${
                                star <= Math.floor(grade)
                                ? 'text-yellow-400'
                                : star === Math.round(grade)
                                ? null
                                : 'text-gray-300'
                            }`}
                            style={
                                star === Math.round(grade)
                                ? {
                                    background: `linear-gradient(90deg, #FACC15 ${
                                        (grade % 1) * 100
                                    }%, #D1D5DB ${(grade % 1) * 100}%)`,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }
                                : undefined
                            }
                        />
                    ))}
                </div>
                <h5 className="font-satoshi text-xs font-bold leading-[22px] tracking-[0%] text-yellow-800 m-0">
                    {grade}
                </h5>
            </div>
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