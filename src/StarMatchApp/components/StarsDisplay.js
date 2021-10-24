import Star from './Star'
import { range } from '../utils'

const StarsDisplay = props => (
    <>
        {range(1, props.count).map(id => <Star key={id}></Star>)}
    </>
)

export default StarsDisplay
