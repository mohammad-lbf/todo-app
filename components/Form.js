import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { worksContext } from '../context/WorksContextProvider';
import { successNotify, failedNotify } from '../shared/Toast';
import { ToastContainer } from 'react-toastify';
// import '../styles/Form.css';

const Form = () => {
    const { worksState, dispatch } = useContext(worksContext);
    const [titleInput, setTitleInput] = useState('');
    const [describtionInput, setDescribtionInput] = useState('');
    const router = useRouter();

    const titleChangeHandler = (event) => {
        setTitleInput(event.target.value);
    };

    const describtionChangeHandler = (event) => {
        setDescribtionInput(event.target.value);
    };

    const registerButtonHandler = () => {
        if (titleInput && describtionInput) {
            const date = new Date();
            const year = date.getFullYear();
            const month = date.getMonth() + 1; // ماه‌ها از 0 شروع می‌شوند
            const day = date.getDate();
            const hour = date.getHours();
            const min = date.getMinutes();
            const seconds = date.getSeconds();

            const newWork = {
                id: worksState.worksCounter + 1,
                title: titleInput,
                describtion: describtionInput,
                done: false,
                date: `${year}/${month < 10 ? '0' : ''}${month}/${day < 10 ? '0' : ''}${day}`,
                time: `${hour < 10 ? '0' : ''}${hour}:${min < 10 ? '0' : ''}${min}:${seconds < 10 ? '0' : ''}${seconds}`,
            };

            dispatch({ type: 'ADDWORK', payload: newWork });
            setTitleInput('');
            setDescribtionInput('');
            router.push('/home'); // هدایت به صفحه خانه
        } else if (!titleInput && !describtionInput) {
            failedNotify('لطفا برای کار خود عنوان و شرحی اضافه کنید');
        } else if (!titleInput && describtionInput) {
            failedNotify('لطفا برای کار خود عنوانی اضافه کنید');
        } else if (titleInput && !describtionInput) {
            failedNotify('لطفا برای کار خود شرحی اضافه کنید');
        }
    };

    return (
        <>
            <div className="add-form-container rounded mb-2">
                <div className="add-form mt-3">
                    <p className="mb-0 text-center fs-3 mt-5">افزودن کار جدید</p>
                    <p className="text-end mb-1 mt-4">:عنوان کار</p>
                    <input 
                        onChange={titleChangeHandler} 
                        value={titleInput} 
                        type="text" 
                        className="form-control text-end" 
                    />
                    <p className="text-end mt-3 mb-1 mt-4">:شرح کار</p>
                    <textarea 
                        onChange={describtionChangeHandler} 
                        value={describtionInput} 
                        className="text-end form-control" 
                    />
                    <div className="w-100 d-flex justify-content-center mt-4">
                        <button onClick={registerButtonHandler} className="submit-work-btn">
                            ثبت کار
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Form;
