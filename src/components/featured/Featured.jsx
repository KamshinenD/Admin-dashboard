import "./featured.scss";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// npm install react-circular-progressbar
// import { CircularProgress } from "@mui/material";
const Featured = () => {
    return (
        <div className="featured">
            <div className="top">
                <h1 className="title">Total Revenue</h1>
                <MoreVertIcon fontSize="small" />
            </div>
            <div className="bottom">
                <div className="featuredbar">
                    <CircularProgressbar value={70} text={'70%'} strokeWidth={5} />
                </div>
                <p className="title"> Total Sales Made Today </p>
                <p className="amount"> ₦420,234 </p>
                <p className="desc"> Previous transactions processing. Last payments may not be included. </p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult positive">
                            <div className="resultAmount"><KeyboardArrowUpIcon fontSize="small" /></div>
                            <div className="resultAmount">₦12.4k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Week</div>
                        <div className="itemResult negative">
                            <div className="resultAmount"><KeyboardArrowDownIcon fontSize="small" /></div>
                            <div className="resultAmount">₦2.61k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Month</div>
                        <div className="itemResult positive" >
                            <div className="resultAmount"><KeyboardArrowUpIcon fontSize="small" /></div>
                            <div className="resultAmount">₦12.4k</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured