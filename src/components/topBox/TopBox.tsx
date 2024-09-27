import './topBox.scss'
import { topDealUsers } from '../../data'

const TopBox = () => {
  return (
    <div className='topBox'>
      <h3>Top Frequent Riders</h3>
      <div className='list'>
        {topDealUsers.map(users => (
            <div className='listItem' key={users.id}>
                <div className='user'>
                    <img src={users.img} alt=''/>
                    <div className='userTexts'>
                        <span className='username'>{users.username}</span>
                        <span className='email'>{users.email}</span>
                    </div>
                </div>
                <span className='amount'>N{users.amount}</span>
            </div>
        ))

        }
      </div>
    </div>
  )
}

export default TopBox
