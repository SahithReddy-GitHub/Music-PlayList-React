import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const TrackItem = props => {
  const {data, onDeleteClick} = props
  const {id, imageUrl, name, genre, duration} = data

  const onDelete = () => {
    onDeleteClick(id)
  }

  return (
    <li className="listCon">
      <img src={imageUrl} alt="track" className="img" />
      <div className="columnCon">
        <p className="para">{name}</p>
        <p className="para customPara">{genre}</p>
      </div>
      <p className="durationPara">{duration}</p>
      <button
        className="iconBtn"
        type="button"
        data-testid="delete"
        onClick={onDelete}
        aria-label="delete"
      >
        <AiOutlineDelete size={20} color="#ffffff" />
      </button>
    </li>
  )
}

export default TrackItem
