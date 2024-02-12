import React, { useState, useEffect } from 'react';
import "../Style/Card.css";

const Edit = ({ contact, isOpen, closeModal, handleEdit }) => {
  const [editedContact, setEditedContact] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
  });

  useEffect(() => {
    if (contact) {
      setEditedContact(contact);
    }
  }, [contact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedContact({
      ...editedContact,
      [name]: value,
    });
  };

  const handleSave = () => {
    handleEdit(editedContact);
    closeModal();
  };

  return (
    <div className={`ant-modal ${isOpen ? 'ant-modal-visible' : ''}`}>
      <div className="ant-modal-content">
        <button aria-label="Close" className="ant-modal-close" onClick={closeModal}>
          <span className="ant-modal-close-x">
            <i aria-label="icon: close" className="anticon anticon-close ant-modal-close-icon">
              X
            </i>
          </span>
        </button>
        <div className="ant-modal-header">
          <div className="ant-modal-title" id="rcDialogTitle0">
           Basic Model
          </div>
        </div>
        <div className="ant-modal-body">
          <form className="ant-form ant-form-horizontal">
            <div className="ant-row ant-form-item">
              <div className="ant-col ant-form-item-label ant-col-xs-24 ant-col-sm-8">
                <label htmlFor="name" className="ant-form-item-required" title="Name">
                  Name
                </label>
              </div>
              <div className="ant-col ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-16">
                <div className="ant-form-item-control">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="ant-input"
                    value={editedContact.name}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="ant-row ant-form-item">
              <div className="ant-col ant-form-item-label ant-col-xs-24 ant-col-sm-8">
                <label htmlFor="email" className="ant-form-item-required" title="Email">
                  Email
                </label>
              </div>
              <div className="ant-col ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-16">
                <div className="ant-form-item-control">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="ant-input"
                    value={editedContact.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            
            <div className="ant-row ant-form-item">
              <div className="ant-col ant-form-item-label ant-col-xs-24 ant-col-sm-8">
                <label htmlFor="phone" className="ant-form-item-required" title="Phone">
                  Phone
                </label>
              </div>
              <div className="ant-col ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-16">
                <div className="ant-form-item-control">
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="ant-input"
                    value={editedContact.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            
            <div className="ant-row ant-form-item">
              <div className="ant-col ant-form-item-label ant-col-xs-24 ant-col-sm-8">
                <label htmlFor="website" className="ant-form-item-required" title="Website">
                  Website
                </label>
              </div>
              <div className="ant-col ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-16">
                <div className="ant-form-item-control">
                  <input
                    type="text"
                    id="website"
                    name="website"
                    className="ant-input"
                    value={editedContact.website}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            
          </form>
        </div>
        <div className="ant-modal-footer">
          <div>
            <button type="button" className="ant-btn" onClick={closeModal}>
              Cancel
            </button>
            <button type="button" className="ant-btn ant-btn-primary" onClick={handleSave}>
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
