import React,{useState} from 'react'
import {Editor} from '@tinymce/tinymce-react'
const Pratice = () => {
    const [blog,setBlog]=useState('')
    const body=blog
  return (
    <div>
<Editor
textareaName='textarea'
onEditorChange={(newText)=>{setBlog(newText)}}
init={{

  menubar: false,
  placeholder: "Ask a question or post an update",
  
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
}}
/>
<div dangerouslySetInnerHTML={{__html: body}}></div>
    </div>
  )
}

export default Pratice