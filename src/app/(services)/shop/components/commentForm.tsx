import { useState } from "react";

interface CommentFormProps {
    onSubmit: (comment: {
        username: string;
        textCom: string;
        grade: number;
    }) => void
}

export const CommentForm = ({ onSubmit }: CommentFormProps) => {
    const [comment, setComment] = useState({
        username: "",
        textCom: "",
        grade: 5,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(comment);
        setComment({
            username: "",
            textCom: "", 
            grade: 5
        });
    }

    return(
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-2xl p-6 bg-white rounded-[20px] border border-gray-500">
            <input
                type="text"
                value={comment.username}
                onChange={(e) => setComment({ ...comment, username: e.target.value })}
                placeholder="Your name"
                className="p-2 border rounded-md"
                required
            />
            <textarea
                value={comment.textCom}
                onChange={(e) => setComment({ ...comment, textCom: e.target.value })}
                placeholder="Your review"
                className="p-2 border rounded-md h-32"
                required
            />
            <div className="flex items-center gap-2">
                <label>Rating:</label>
                <select
                    value={comment.grade}
                    onChange={(e) => setComment({ ...comment, grade: Number(e.target.value) })}
                    className="p-2 border rounded-md"
                >
                    {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>{num}</option>
                    ))}
                </select>
            </div>
            <button 
                type="submit"
                className="px-7 py-3 bg-black text-white rounded-[62px] font-satoshi font-medium text-base"
            >
                Submit Review
            </button>
    </form>
    )
}