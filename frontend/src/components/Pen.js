
const Pen = (props) => {
    const data = props.data | null;
    let color = '';
    let size = 0;
    if (!data) {
        color = props.color | 'black';
        size = props.size | 2;
    } else {
        color = data.color;
        size = data.size;
    }

    function circleConstraints(x,y,cx,cy) {
        return Math.abs(x - cx) ** 2 + Math.abs(y - cy) ** 2 < size ** 2;
    }

    function squareConstraints(x,y,cx, cy) {
        return Math.abs(x - cx) < size && Math.abs(y - cy) < size;
    }

    

    return {
        color:data.color,
        size:data.size,
    }
}

export default Pen;