import React, { useState, useRef, } from 'react';
import JoditEditor from 'jodit-react';

const Pratice = () => {
  const editor = useRef(null);
	const [content, setContent] = useState('');
  const config ={
    placeholder:'Start Typing.........'
  }

	// useEffect(()=>{
  //   console.log(content)
  // })
  return (
    <div>
 <JoditEditor
			ref={editor}
			value={content}
      config={config}
			onChange={newContent => setContent(newContent)}
		/>
    {
      <p>{content}</p>
    }
    </div>
  )
}

export default Pratice



