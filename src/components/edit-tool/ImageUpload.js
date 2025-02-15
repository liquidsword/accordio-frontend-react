import React, {useState, useRef} from 'react'
import ShowImage from './ShowImage'
import defaultCoverPhoto from './images/defaultCoverPhoto.jpeg'
import uploadImageIcon from './images/uploadImageIcon.png'

const ImageUpload = () => {
    const [image, setImage] = useState(uploadImageIcon)
    const maxImageFileSize = 1000000

    const imageSelectedHandler = event => {
        const uploadedImage = event.target.files[0]
        if ( uploadedImage.size > maxImageFileSize ){
            console.log("too big")
        }else{
            console.log("image sent to state")
            let imageURL = URL.createObjectURL(uploadedImage)
            //console.dir(URL.creatObjectURL(uploadedImage))
            setImage(imageURL) // URL.revokeObjectURL() needs to be called when URL is no longer needed to prevent memory leak
        }
    }
    const removeImage = () => {
        setImage(uploadImageIcon)
        console.log("remove image from backend")
    }
    const imageUploadHandler = event => {
        console.dir(image)
        //send image to back end
    }
    const inputRef = useRef();
    const fileInput = () => {
        inputRef.current.click()
    }
    const imageUploadStyle = {
        // X: 418 px;
        // Y: 216 px;
        'width': '182px',
        'height': '286px',
        'border': 'none',
        'flexDirection': 'column'
    }
    const buttonStyle = {
        'border': 'none',
        'background': 'none',
        'fontSize': '16px'
    }

    return (
    <div style={imageUploadStyle} className="ImageUpload">
        <ShowImage style={{'width': '182px'}} image={image}/>
        <input 
            style={{display: 'none'}} 
            type="file" 
            onChange={imageSelectedHandler}
            ref={inputRef}
        />
        {image === uploadImageIcon ?
            <button style={buttonStyle} onClick={() => fileInput()}>Add Cover Image</button>
            :
            <>
                <button style={buttonStyle} onClick={() => removeImage()}>Remove Image</button>
                <button style={buttonStyle} onClick={imageUploadHandler}>Replace Image</button>
            </>
        }
    </div>
    )
}

export default ImageUpload