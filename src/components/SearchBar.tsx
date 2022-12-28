import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import { ChangeEvent } from "react";
import { FormElement } from "@nextui-org/react";

const SearchBar = () => {
  const [value,setValue] = useState('');
  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<FormElement>) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/cauta/'+value);
  }

  const styles = {
    display : "flex",
    alignItems:"center"
  }
  return (
    <form onSubmit={handleSubmit} style={styles}>
     <Input value={value} onChange={handleChange} placeholder='Cauta...' contentRight={<SearchIcon sx={{ color: '#003C54' }} />} />
     </form>
  )
};

export default SearchBar;