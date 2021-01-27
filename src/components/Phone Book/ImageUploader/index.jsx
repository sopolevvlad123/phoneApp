import React from 'react';
import ImageUploader from 'react-images-upload';

const MyEditor = () => {
  const onDrop = (pic) => {
    console.log(pic);
  };

  return (
    <ImageUploader
      withIcon
      buttonText="Choose image for avatar"
      onChange={onDrop}
      imgExtension={['.jpg', '.gif', '.png', '.gif']}
      maxFileSize={5242880}
    />
  );
};
export default MyEditor;
