import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './style.scss';

const PhoneNoteForm = ({ phoneAccount, dispatch, hideModal }) => {
  const { register, handleSubmit, errors } = useForm();
  const [imgURL, setImgUrl] = useState(null);

  useEffect(() => {
    setImgUrl(phoneAccount.avatar);
  }, []);

  const onSubmit = (data) => {
    dispatch({ type: 'SAVE_PHONE_ACCOUNT', payload: { ...data, id: phoneAccount?.id, avatar: imgURL } });
    hideModal();
  };

  const handleImageChange = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const targetFile = e.target.files[0];
    reader.onloadend = () => {
      setImgUrl(reader.result);
    };
    reader.readAsDataURL(targetFile);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Name"
          name="name"
          id="name"
          defaultValue={phoneAccount?.name}
          ref={register({ required: true, maxLength: 25 })}
        />
        {errors.name?.type === 'required' && 'Name is required'}
        {errors.name?.type === 'maxLength' && 'Maximum length is 25 symbols'}
      </div>
      <div>
        <label htmlFor="surname">Surname</label>
        <input
          type="text"
          placeholder="Surname"
          name="surname"
          id="surname"
          defaultValue={phoneAccount?.surname}
          ref={register({ required: true, maxLength: 25 })}
        />
        {errors.surname?.type === 'required' && 'Surname is required'}
        {errors.surname?.type === 'maxLength' && 'Maximum length is 25 symbols'}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          defaultValue={phoneAccount?.email}
          ref={register({ pattern: /^\S+@\S+$/i })}
        />
        {errors.email?.type === 'pattern' && 'Email is incorrect'}
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          defaultValue={phoneAccount?.phone}
          ref={register({ required: true, maxLength: 13, pattern: /^\+?3?8?(0\d{9})$/i })}
        />
        {errors.phone?.type === 'required' && 'Phone is required'}
        {errors.phone?.type === 'pattern' && 'Phone number is incorrect'}
      </div>

      <div>
        <label htmlFor="avatar">
          {phoneAccount.avatar ? 'Change ' : 'Add '}
          Avatar
        </label>
        <input
          type="file"
          name="avatar"
          accept=".gif,.jpg,.jpeg,.png,"
          onChange={(e) => handleImageChange(e)}
        />
        <div>
          {imgURL && <img src={imgURL} alt="" />}
        </div>
      </div>
      <input type="submit" />
    </form>
  );
};

export default PhoneNoteForm;
