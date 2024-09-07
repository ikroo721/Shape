/* eslint-disable react/prop-types */
import SwiperCardText from './SwiperCardText';
import SwiperCardTopImage from './SwiperCardTopImage';

const SwiperCard = ({ item }) => {
  return (
    <div className='flex flex-col lg:gap-3 gap-4   sxl:gap-5'>
      <SwiperCardTopImage item={item}/>
      <SwiperCardText />
    </div>
  )
}

export default SwiperCard