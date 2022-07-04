import React, {
  createContext,
  useCallback,
  useState,
  useContext
} from "react";

import ToastContainer from "../components/Toast";

const ToastContext = createContext([]);

const ToastProvider = ({ children }) => {
const [message,setMessage] = useState({});

const addToast = useCallback(
  ({type, icon, title,description}) => {

    const toast = {
      type,
      icon,
      title,
      description
    };
    setMessage(toast);
  },
  [],
);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <ToastContainer message={message}/>
    </ToastContext.Provider>
  )
}

function useToast() {
  const context = useContext(ToastContext);

  if(!ToastContext) {
    throw new Error("useToast must be used within an ToastProvider")
  }

  return context;
}
export { ToastProvider , useToast }