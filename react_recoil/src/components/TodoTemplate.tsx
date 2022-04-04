import React from 'react';

import './TodoTemplate.scss';

interface ITodoTemplateProps {
  children: React.ReactNode;
}

const TodoTemplate = ({ children }: ITodoTemplateProps): JSX.Element => {
  return <div className="wrapper">{children}</div>;
};

export default TodoTemplate;
