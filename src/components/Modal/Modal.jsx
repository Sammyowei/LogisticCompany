import { X } from "lucide-react";
import PropTypes from "prop-types";

const Modal = ({children, toggleModal}) => {
  return (
    <>
    <div className="fixed inset-0 flex items-center justify-center z-50">
        <div onClick={toggleModal} className="absolute inset-0 bg-black opacity-50"/>
        <div className="bg-white relative p-4 rounded-md z w-[90%] md:w-[500px]">
          <button onClick={toggleModal} className="absolute top-2 right-2"><X/></button>
            {children}

        </div>
    </div>
    </>



  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  toggleModal: PropTypes.func.isRequired,
}

export default Modal