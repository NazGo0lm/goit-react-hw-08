import { deleteContact } from '../../redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { toast } from 'react-hot-toast';
import Modal from 'react-modal';
import { useState } from 'react';

import css from './Contact.module.css';

Modal.setAppElement('#root');

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleDelete = () => {
    dispatch(deleteContact(contact.id))
      .unwrap()
      .then(() => {
        toast.success('Contact deleted successfully!', {
          duration: 4000,
          position: 'top-right',
        });
        closeModal();
      })
      .catch(() => {
        toast.error('Failed to delete contact', {
          duration: 4000,
          position: 'top-right',
        });
      });
  };

  return (
    <>
      <div className={css.contactBox}>
        <div className={css.contactBoxWrapp}>
          <p className={css.contactText}>
            <FaUser />
            {contact.name}
          </p>
          <p className={css.contactText}>
            <FaPhone />
            {contact.number}
          </p>
        </div>
        <button
          className={css.contactBtnDelete}
          type="button"
          onClick={openModal}
        >
          Delete
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Confirm Delete"
        className={css.modal}
        overlayClassName={css.overlay}
      >
        <p className={css.confirmTextModal}>
          Are you sure you want to delete this contact?
        </p>
        <button className={css.confirmBtnModal} onClick={handleDelete}>
          Yes, Delete
        </button>
        <button className={css.cancelBtnModal} onClick={closeModal}>
          Cancel
        </button>
      </Modal>
    </>
  );
};

export default Contact;