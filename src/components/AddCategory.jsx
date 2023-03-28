import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('')

  const onInputChanged = (event) => {
    setInputValue(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if(inputValue.trim().length <= 1) return;

    // onNewCategory(categories => [inputValue, ...categories]);
    onNewCategory( inputValue.trim() );
    setInputValue('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text"
        placeholder="Search Gif"
        value={inputValue}
        onChange={onInputChanged}
      />
    </form>
  )
}
