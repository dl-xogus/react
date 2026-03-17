import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

function HalfRating({ save }) {
    let [num, setNum] = useState(2.5);

    return (
        <Stack spacing={3}>
            <Rating
                name="half-rating"
                value={num}
                onChange={(e, v) => setNum(v)}
                precision={0.5}
                size='large'
                sx={{fontSize:60, color:'red'}}
            />
            <Rating
                name="half-rating-read"
                defaultValue={num}
                precision={0.5}
                readOnly
            />
        </Stack>
    )
}

export default HalfRating