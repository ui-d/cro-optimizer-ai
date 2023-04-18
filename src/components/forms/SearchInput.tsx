import { useState } from 'react';

type InputProps = {
  placeholder?: string;
  label?: string;
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchInput = (props: InputProps) => {
  const { placeholder, label, type, onChange } = props;
  const [value, setValue] = useState('');

  return (
    <div className='mx-auto max-w-3xl'>
      {label && (
        <label className='label'>
          <span className='label-text'>{label}</span>
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className='input input-bordered input-lg mx-auto block w-full max-w-3xl'
      />
    </div>
  );
};
