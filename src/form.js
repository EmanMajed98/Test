import React from 'react';
import Button from './component/button';
import Input from './component/input';

const Form = () => {
  return (
    <form>
      <Input type="text" label="Username" />
      <Input type="password" label="Password" />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;