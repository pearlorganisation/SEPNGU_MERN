import Image from 'next/image'
import React,{useEffect, useState} from 'react'
import {FaCamera} from 'react-icons/fa';
import ContextMenu from './ContextMenu';
import PhotoPicker from './PhotoPicker';
import PhotoLibrary from './PhotoLibrary';
import CapturePhoto from './CapturePhoto';
function Avtar({type, image, setImage}) {
    const [hover, setHover] = useState(false);
    const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);
    const [contextMenuCordinates, setContextMenuCordinates] = useState({
        x:0,
        y:0,
    });

    const [grabPhoto, setGrabPhoto] = useState(false);
    const [showPhotoLibrary, setShowPhotoLibrary] = useState(false);
    const [showCapturePhoto, setShowCapturePhoto] = useState(false);

    const showContextMenu = (e) =>{
        e.preventDefault();
        setContextMenuCordinates({x:e.pageX, y:e.pageY});
        setIsContextMenuVisible(true);
    };

    useEffect(()=>{
        if(grabPhoto){
            const data = document.getElementById("photo-picker");
        data.click();
        document.body.onfocus=(e)=>{
            setTimeout(()=>{
                setGrabPhoto(false);
            },1000);
        }
        }
    },[grabPhoto]);

    const contextMenuOptions = [
        {name:"Take Photo", callback:()=>{
            setShowCapturePhoto(true);
        }},
        {name:"Choose from Library", callback:()=>{
            setShowPhotoLibrary(true);
        }},
        {name:"Upload Photo", 
            callback:()=>{
            setGrabPhoto(true);
        }},
        {
            name:"Remove Photo",
            callback:()=>{
            setImage("/avatars/1.png");
        }},
    ];

    const photoPickerChange = async (e)=>{
        const file = e.target.files[0];
        const reader = new FileReader();
        const data = document.createElement("img");
        reader.onload = function(event){
            data.src = event.target.result;
            data.setAttribute("data-src", event.target.result);
        }
        reader.readAsDataURL(file);
        setTimeout(()=>{
            console.log(data.src);
            setImage(data.src);
        },100);
    }

  return (
    <>
    <div className='flex items-center justify-center'>
    {type==="sm" && image &&(
    <div className='relative h-10 w-10'>
        <Image height={40} width={40} src={image||'/avatars/a.png'} alt='spoken english guru avatar' className='rounded-full' />
    </div>
    )}
    {type==="lg" && image &&(
    <div className='relative h-14 w-14'>
        <img src={image||'/avatars/a.png'} alt='spoken english guru avatar' className='rounded-full' width={400} height={400}/>
    </div>
    )}
    {type==="xl" && (
    <div className='relative cursor-pointer z-0 h-40 w-40'
    onMouseEnter={()=>setHover(true)}
    onMouseLeave={()=>setHover(false)}
    >
    <div className={`z-10 bg-photopicker-overlay-background h-40 w-40 absolute top-0 left-0 flex items-center rounded-full justify-center flex-col text-center gap-2
        ${hover ?"visible":"hidden"}
        `}
        onClick = {(e)=>showContextMenu(e)}
        id='context-opener'
        >
        <FaCamera className='text-2xl' id='context-opener' onClick = {(e)=>showContextMenu(e)}/>
        <span onClick = {(e)=>showContextMenu(e)} id='context-opener' className='h-18 w-18'>Change <br></br>Profile<br></br> Photo</span>
    </div>
    <div className='flex items-center justify-center h-40 w-40'>
        {/* <Image src={image||''} alt='spoken english guru avatar' className='rounded-full' fill/> */}
    </div>
    </div>
    )}
    </div>
    {
        isContextMenuVisible &&(
        <ContextMenu
        options={contextMenuOptions}
        cordinates={contextMenuCordinates}
        contextMenu={isContextMenuVisible}
        setContextMenu={setIsContextMenuVisible}
        />
    )}
    {
        showCapturePhoto && <CapturePhoto
        setImage={setImage}
        hide={setShowCapturePhoto}
        />
    }
    {showPhotoLibrary && (
    <PhotoLibrary setImage={setImage} hidePhotoLibrary={setShowPhotoLibrary}/>)}
    {grabPhoto && <PhotoPicker onChange={photoPickerChange}/>}
    </>
  )
}

export default Avtar;