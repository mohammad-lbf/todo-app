import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
   const [value, setValue] = useState(() => {
       if (typeof window !== 'undefined') {
           // فقط در سمت کلاینت اجرا شود
           const localState = window.localStorage.getItem(key);
           return localState ? JSON.parse(localState) : initialValue;
       } else {
           return initialValue; // مقدار پیش‌فرض برای سرور
       }
   });

   useEffect(() => {
       if (typeof window !== 'undefined') {
           window.localStorage.setItem(key, JSON.stringify(value));
       }
   }, [value]);

   return [value, setValue];
};

export default useLocalStorage;
