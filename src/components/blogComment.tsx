import { IComment } from "../database/blogSchema"; 
import styles from "./blogComment.module.css";

type CommentProps = {
    comment: IComment; // IComment is the type from your Blog schema
};

{/* Modularizing code into seperate functions is useful.
		Makes your code look nicer and allows for better readability.
	*/}
function parseCommentTime(time: Date | string){
        const date = new Date(time); 
        
        const options: Intl.DateTimeFormatOptions = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric', 
        hour12: true 
    };
    return date.toLocaleString('en-US', options);
}

export default function Comment({ comment }: CommentProps) {
    return (
         <div className={styles.commentContainer}>
            <h4 className={styles.commentUser}>{comment.user}</h4>
            
            <p className={styles.commentText}>{comment.comment}</p>
            <span className={styles.commentTime}>{parseCommentTime(comment.time)}</span>
        </div>
    );
}