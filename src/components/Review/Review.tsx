import './Review.css'
import { Avatar } from '@mui/material';

type Props = {
    name: string;
    stars: string;
    text: string;
    face: any;
}

function Review({name, stars, text, face}: Props) {
  return (
    <div className="review-card">
        <div className="review-card-top">            
            <div className="review-card-avatar"><Avatar sx={{ width: 36, height: 36 }} alt={name} src={face}>{name[0]}</Avatar></div>
            <div className="review-card-name-stars">
                <h6 className="review-card-name">{name}</h6>
                <p className="review-card-stars">{stars}</p>
            </div>
        </div>
        <p className="review-card-text">{text}</p>
    </div>
  )
}

export default Review