import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './style.scss';
import ImageUploader from 'react-images-upload';
import { addPhoneNote } from '../../../context/reducer';

// eslint-disable-next-line react/prop-types
const PhoneNoteForm = ({ phoneNote, dispatch }) => {
  const { register, handleSubmit, errors } = useForm();
  const [avatarImg, setAvatarImg] = useState(null);

  const onSubmit = (data) => {
    alert(JSON.stringify(avatarImg));
    dispatch(addPhoneNote({ ...data, avatar: avatarImg }));
  };

  const onDrop = (pic) => {
    console.log(pic);
    setAvatarImg(URL.createObjectURL(pic));
  };

  const Drop = () => (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        console.log(file);
      }}
    >
      <h1>ddd</h1>
    </div>
  );

  console.log(JSON.stringify(phoneNote));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder="Name" name="name" id="name" defaultValue={phoneNote?.name} ref={register({ required: true, maxLength: 25 })} />
        {errors.name?.type === 'required' && 'Name is required'}
        {errors.name?.type === 'maxLength' && 'Maximum length is 25 symbols'}
      </div>
      <div>
        <label htmlFor="surname">Surname</label>
        <input type="text" placeholder="Surname" name="surname" id="surname" defaultValue={phoneNote?.surname} ref={register({ required: true, maxLength: 25 })} />
        {errors.surname?.type === 'required' && 'Surname is required'}
        {errors.surname?.type === 'maxLength' && 'Maximum length is 25 symbols'}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Email" name="email" defaultValue={phoneNote?.email} ref={register({ pattern: /^\S+@\S+$/i })} />
        {errors.email?.type === 'pattern' && 'Email is incorrect'}
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input type="text" placeholder="Phone" name="phone" defaultValue={phoneNote?.phone} ref={register({ required: true, maxLength: 13, pattern: /^\+?3?8?(0\d{9})$/i })} />
        {errors.phone?.type === 'required' && 'Phone is required'}
        {errors.phone?.type === 'pattern' && 'Phone number is incorrect'}
      </div>
      <div>
        <ImageUploader
          withIcon
          buttonText="Choose image for avatar"
          onChange={onDrop}
          imgExtension={['.jpg', '.gif', '.png', '.gif']}
          maxFileSize={5242880}
        />
        <Drop />
      </div>
      <input type="submit" />
    </form>

  );
};

export default PhoneNoteForm;
