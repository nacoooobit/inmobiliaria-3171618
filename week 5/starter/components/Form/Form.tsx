import React, { createContext, useContext } from 'react';

const FormContext = createContext<Record<string, any> | undefined>(undefined);

export const Form: React.FC<React.FormHTMLAttributes<HTMLFormElement>> & any = ({ children, ...rest }) => {
  return (
    <form {...rest}>
      <FormContext.Provider value={{}}>{children}</FormContext.Provider>
    </form>
  );
};

export const Field: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = '', ...rest }) => (
  <div className={`form-field ${className}`} {...rest}>
    {children}
  </div>
);

export const Label: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = ({ children, ...rest }) => (
  <label {...rest}>{children}</label>
);

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => <input {...props} />;

export const Error: React.FC = ({ children }) => <div className="form-error">{children}</div>;

export const Actions: React.FC = ({ children }) => <div className="form-actions">{children}</div>;

export const Submit: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...rest }) => (
  <button type="submit" {...rest}>
    {children}
  </button>
);

Object.assign(Form, { Field, Label, Input, Error, Actions, Submit });

export default Form;
