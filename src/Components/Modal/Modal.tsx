
import './modal.scss';

function Modal({ isOpen, title, description, closeModal }: { isOpen: boolean, title?: string, description?: string, closeModal: () => void}) {

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`}>
      <div className='modal'>
        <header className='modal__header'>

          <button className='close-button' onClick={closeModal}>X</button>
          <p className='modal-title'>{title}</p>
        </header>
        <section className='modal__content'>
          <p>{description}</p>
        </section>
      </div>
    </div>
  );
}

export default Modal;