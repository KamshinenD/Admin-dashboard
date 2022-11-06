import './single.scss'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/chart/Chart"
import TableList from '../../components/table/Table'

const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editBtn">Edit</div>
            <h1 className="title">User Information</h1>
            <div className="item">
              <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle"> Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">08108644731</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">24b, carrot street, M.K B Gardens, Lagos</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Nigeria</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            {/* note that aspect 3/1 means the whenever width is 3, height should be 1(height should be one-third of withd) */}
            <Chart aspect={3 / 1} title='User Transactions (Last 6 Months)' />
          </div>
        </div>

        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <TableList />
        </div>
      </div>
    </div>
  )
}

export default Single