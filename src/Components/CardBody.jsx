import React, { useState, useEffect } from "react";
import Edit from "./Edit";
import myobj from "../DefaultData/data";
import "../Style/Card.css";
import {
  HeartOutlined,
  HeartFilled,
  EditOutlined,
  DeleteOutlined,
  PhoneOutlined,
  GlobalOutlined,
  MailOutlined,
} from "@ant-design/icons";


const CardBody = ({ avatarUrl }) => {
  const [likes, setLikes] = useState(0);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingContact, setEditingContact] = useState(null);
  const [contacts, setContacts] = useState([]);
  const [likedContacts, setLikedContacts] = useState([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setContacts(myobj.contacts);
    // fetch("http://localhost:3001/contacts")
    //   .then((response) => response.json())
    //   .then((data) => setContacts(data))
      // .catch((error) => console.error("Error fetching contacts:", error));
  }, []);

  const openEditModal = (contact) => {
    setEditingContact(contact);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditingContact(null);
    setIsEditModalOpen(false);
  };

  const handleEdit = (editedContact) => {
    const index = contacts.findIndex(
      (contact) => contact.id === editedContact.id
    );

    setContacts((prevContacts) => {
      const updatedContacts = [...prevContacts];
      updatedContacts[index] = editedContact;
      return updatedContacts;
    });

    closeEditModal();
  };

  const handleLike = (contact) => {
    const isLiked = likedContacts.includes(contact.id);

    if (isLiked) {
      setLikedContacts((prevLikedContacts) =>
        prevLikedContacts.filter((likedId) => likedId !== contact.id)
      );
      setLikes((prevLikes) => prevLikes - 1);
    } else {
      setLikedContacts((prevLikedContacts) => [
        ...prevLikedContacts,
        contact.id,
      ]);
      setLikes((prevLikes) => prevLikes + 1);
    }
  };

  const handleDelete = (contact) => {
    const updatedContacts = contacts.filter((c) => c.id !== contact.id);
    setContacts(updatedContacts);
  };

  const handleSave = (editedContact) => {
    console.log("Save Contact:", editedContact);
  };

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <div className="cardRow">
      {contacts.map((contact) => (
        <div key={contact.id} className="ant-card-cover">
          <div className="img-cover">
            <div className="cardHeadImage">
              <img
                src={avatarUrl}
                alt="Avatar"
                style={{ width: "200px", height: "200px" }}
              />
            </div>
          </div>
          <div className="ant-card-body">
            <h3 className="card-name">{contact.name}</h3>
            <div className="contact-info">
              <i
                aria-label="icon: mail"
                className="anticon anticon-mail"
                style={{ fontSize: "18px" }}
              >
                <MailOutlined />
              </i>
              <p style={{ marginLeft: "10px" }}>{contact.email}</p>
            </div>
            <div className="contact-info">
              <i
                aria-label="icon: phone"
                className="anticon anticon-phone"
                style={{ fontSize: "18px" }}
              >
                <PhoneOutlined />
              </i>
              <p>{contact.phone}</p>
            </div>
            <div className="contact-info">
              <i
                aria-label="icon: global"
                className="anticon anticon-global"
                style={{ fontSize: "18px" }}
              >
                <GlobalOutlined />
              </i>
              <p>{contact.website}</p>
            </div>
          </div>
          <div className="cardButtons">
            <i onClick={() => handleLike(contact)} className="icon-card">
              {likedContacts.includes(contact.id) ? (
                <HeartFilled style={{ color: "red", fontSize: "20px" }} />
              ) : (
                <HeartOutlined style={{ color: "red", fontSize: "20px" }} />
              )}
            </i>

            <i
              onClick={() => openEditModal(contact)}
              style={{ fontSize: "20px" }}
              className="icon-card"
            >
              <EditOutlined className="edit-icon" />
            </i>
            <i
              onClick={() => handleDelete(contact)}
              style={{ fontSize: "20px" }}
              className="icon-card"
            >
              <DeleteOutlined className="edit-icon" />
            </i>
          </div>
        </div>
      ))}
      <Edit
        contact={editingContact}
        isOpen={isEditModalOpen}
        closeModal={closeEditModal}
        handleEdit={handleEdit}
        handleSave={handleSave}
      />
    </div>
  );
};

export default CardBody;
