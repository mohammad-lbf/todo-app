import 'bootstrap/dist/css/bootstrap.min.css';
import { Offcanvas} from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import HambergurMenu from './HambergurMenu';

function BootHambergurMenu({show , handleClose , theme}) {

  return (
    <div>
      <Offcanvas style={{width:"320px"}} className={theme =="theme-night" ? "bg-gray-900 color-gray-50" : "bg-white color-gray-700"} show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton className={`border-bottom w-100 d-flex justify-content-between`} style={{borderBottom: `${theme == "theme-night" && "1px solid #222f43"}`}}>
          <Offcanvas.Title className='mb-0'>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='pt-0'>
                <HambergurMenu />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default BootHambergurMenu;
