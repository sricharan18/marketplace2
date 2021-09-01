import { useState ,useEffect} from "react"
const UploadImage=(props)=> {
    const [selectedFile, setSelectedFile] = useState()
      const [preview, setPreview] = useState()

      useEffect(() => {
          if (!selectedFile) {
              setPreview(undefined)
              return
          }
  
          const objectUrl = URL.createObjectURL(selectedFile)
          setPreview(objectUrl)
  
          return () => URL.revokeObjectURL(objectUrl)
      }, [selectedFile])
  
      const onSelectFile = e => {
          if (!e.target.files || e.target.files.length === 0) {
              setSelectedFile(undefined)
               
              return
          }
           props.onChange(e)
          setSelectedFile(e.target.files[0])
      }
  
      return (
          <div className="col-md-3">
          <div className="profilePic">
                  {selectedFile ?  <img src={preview} className="profilePicImage"/> : <div className="uploadProfilePic">
                  <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#007BFF">
                  <path d="M24 24H0V0h24v24z" fill="none"/><path d="M21 3H3C2 3 1 4 1 5v14c0 1.1.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2zM5 17l3.5-4.5 2.5 3.01L14.5 11l4.5 6H5z"/>
              </svg> 
                    <h6>+ Choose Photo</h6>
                  <span>Please select the photo you want to upload</span>
                  <input type="file" className="form-control-file choose-pic" id="exampleFormControlFile1" onChange={onSelectFile}/>
              </div>}
                  
              
          </div>
      </div>
      )
    }
     
  export default  UploadImage;