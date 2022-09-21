import Add_to_Cart from '../AddtoCart/Add to Cart'
import FavoriteIcon from './FavoriteIcon';
import "./HoverCard.css"
function HoverCard(props) {
    const course = props.course
    console.log(course)
  return (
    <div className="course_card_hover">
    <h2>{course.title}</h2>
    <div className='seller_info'>
        {/* {Badges} */}
        {/* <Date date={course.last_update_date}/> */}
    </div>
    <p className='grey_p'>{course.content_info} . {course.instructional_level} . Subtitle</p>
    <p className='headline'>{course.headline}</p>
    {/* <ObjComp objList={course.objectives_summary} className='objectives'/> */}
    <div className='hoverbuttons'>
       <Add_to_Cart />
        <FavoriteIcon />
    </div>
</div>
  )
}

export default HoverCard