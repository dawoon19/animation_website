import { useRef, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function Canvas2D(props) {
    const canvasRef = useRef(null);
    const [searchParams] = useSearchParams();
    const [pen, setPen] = useState(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const canvasRect = canvas.getBoundingClientRect();
        function getPos(x, y, colorType) {
            return y * 4 * props.width + 4 * x + colorType;
        }
        let prevMousePos = {x: undefined, y: undefined}
        let mousePos = { x: undefined, y: undefined };
        let isDrawing = false;

        canvas.addEventListener('mousemove', (e) => {
            prevMousePos.x = mousePos.x;
            prevMousePos.y = mousePos.y;
            mousePos = { x: Math.floor(e.clientX - canvasRect.left), y: Math.floor(e.clientY - canvasRect.top) };
            if (isDrawing) {
                draw();
                context.putImageData(imageData, 0, 0);
            }
        });

        const imageData = context.createImageData(props.width, props.height);

        context.fillStyle = 'white';
        context.fillRect(0, 0, props.width, props.height);

        const draw = () => {
            let mx = mousePos.x;
            let my = mousePos.y;

            let leftBound = Math.min(0, mx-10);
            let rightBound = Math.max(props.width, mx+10);
            let topBound = Math.min(0, mx - 10);
            let bottomBound = Math.max(props.height, my + 10);
            for (let x = leftBound; x < rightBound; x+=1) {
                for (let y = topBound; y < bottomBound; y += 1) {
                    if (Math.abs(x - mx) ** 2 + Math.abs(y - my) ** 2 < 100) {
                        imageData.data[getPos(x, y, 0)] = 190;
                        imageData.data[getPos(x, y, 1)] = 0;
                        imageData.data[getPos(x, y, 2)] = 210;
                        imageData.data[getPos(x, y, 3)] = 255;
                    }

                    // if (98 < Math.abs(x - mx) ** 2 + Math.abs(y - my) ** 2 < 102) {
                    //     let sumR = 0;
                    //     let sumG = 0;
                    //     let sumB = 0;
                    //     let sumA = 0;

                    //     for (let sx = Math.min(0, x - ))

                    //     imageData.data[getPos(x, y, 0)] = imageData.data[getPos(x , y, 0)];
                    //     imageData.data[getPos(x, y, 1)] = 0;
                    //     imageData.data[getPos(x, y, 2)] = 210;
                    //     imageData.data[getPos(x, y, 3)] = 255;
                    // }

                }
            }
        }

        const clickHandler = () => {
            console.log('trigger');
            isDrawing = true;
            // draw();
        };

        const stopDrawing = () => {
            isDrawing = false;
        }

        canvas.addEventListener('mousedown', clickHandler);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mouseleave', stopDrawing);

        // Remove all listeners
        return () => {
            canvas.removeEventListener('mousedown', clickHandler);
        };
    }, []);

    return <>
        <canvas ref={canvasRef} width={props.width} height={props.height} />
    </>
}

export default Canvas2D;