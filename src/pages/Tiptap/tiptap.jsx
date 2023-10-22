import { Editor } from '@tinymce/tinymce-react';
import { useState } from 'react';


export default function TipTag() {
  // 富文本
  const handleEditorChange = (content, editor) => {
    console.log('Content was updated:', content);
    // setContent(content);
    setContent(content);
  };

  const [content, setContent] = useState('<input />');
  return (<Editor
    value={content}
    init={{
      height: 500,
      language: 'zh_CN',
      plugins: [
        'advlist autolink lists link image charmap print preview anchor',
        'searchreplace visualblocks code fullscreen',
        'insertdatetime media table paste code help wordcount',
      ],
      toolbar:
        'undo redo | formatselect |fontselect fontsizeselect | bold italic backcolor forecolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help',
    }}
    onEditorChange={handleEditorChange}
  />);
};
