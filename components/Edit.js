import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { worksContext } from '../context/WorksContextProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Edit = () => {
    const router = useRouter();
    const { id } = router.query; // گرفتن پارامتر ID از URL
    const { worksState, dispatch } = useContext(worksContext);

    // یافتن کار جاری
    const currentWork = worksState?.works?.find(work => work.id == id);
    const [newTitle, setNewTitle] = useState(currentWork?.title || '');
    const [newDescribtion, setNewDescribtion] = useState(currentWork?.describtion || '');

    // متد ویرایش کار
    const editWorkBtnHandler = () => {
        if (!newTitle || !newDescribtion) {
            toast.error('لطفا برای کار خود عنوان و شرحی مشخص کنید', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }
        
        dispatch({ type: 'EDITWORK', payload: { id, newTitle, newDescribtion } });
        router.push('/home'); // هدایت به صفحه خانه
    };

    if (!currentWork) return <p>کار مورد نظر یافت نشد.</p>; // بررسی وجود کار

    return (
        <>
            <ToastContainer />
            <div className="add-form-container mb-3 rounded">
                <div className="add-form mt-3">
                    <p className="mb-0 text-center fs-3 mt-5">ویرایش کار</p>
                    <p className="text-end mb-1 mt-4">:عنوان کار</p>
                    <input 
                        onChange={(e) => setNewTitle(e.target.value)} 
                        value={newTitle} 
                        type="text" 
                        className="form-control" 
                    />
                    <p className="text-end mt-3 mb-1 mt-4">:شرح کار</p>
                    <textarea 
                        onChange={(e) => setNewDescribtion(e.target.value)} 
                        value={newDescribtion} 
                        className="form-control" 
                    />
                    <div className="w-100 d-flex justify-content-center mt-4">
                        <div className="d-flex align-items-center flex-row-reverse">
                            <button onClick={editWorkBtnHandler} className="submit-work-btn ms-1 text-white">
                                ویرایش کار
                            </button>
                            <Link href="/home" passHref>
                                <p className="submit-work-btn m-0 text-white">انصراف</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Edit;
