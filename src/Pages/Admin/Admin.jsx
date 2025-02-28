import { useState, useEffect } from "react";
import { useAuth, useParcel } from "../../Hooks";
import toast from "react-hot-toast";
import "./Admin.scss";

const Admin = () => {
  const { user, logout } = useAuth();
  const { parcels, createParcel, loading, updateParcel, deleteParcel } =
    useParcel();

  const scrollToTop = () => {
    window.scrollTo(0, 0, { behavior: "smooth" });
  };
  const [newParcel, setNewParcel] = useState({
    origin: "",
    destination: "",
    current_location: "",
    status: "",
    estimated_delivery: "",
    sender: { name: "", email: "", phone: "", address: "" },
    receiver: { name: "", email: "", phone: "", address: "" },
  });
  const [editParcel, setEditParcel] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    if (isEditing) {
      setEditParcel({ ...editParcel, [e.target.name]: e.target.value });
    } else {
      setNewParcel({ ...newParcel, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.promise(createParcel(newParcel), {
      loading: "Creating parcel...",
      success: "Parcel created successfully",
      error: "Failed to create parcel",
    });
    console.log(newParcel);
    setNewParcel({
      origin: "",
      destination: "",
      current_location: "",
      status: "",
      estimated_delivery: "",
      senderName: "",
      senderEmail: "",
      senderPhone: "",
      senderAddress: "",
      receiverName: "",
      receiverEmail: "",
      receiverPhone: "",
      receiverAddress: "",
    });
  };


  const triggerEdit = (parcel) => {
    setEditParcel(parcel);
    setIsEditing(true);
    console.log(parcel); // Log the selected parcel directly
    scrollToTop();
  };

  useEffect(() => {
    if (editParcel) {
      setNewParcel(editParcel);
    }


  }, [editParcel]);

  const handleUpdate = (e) => {
    e.preventDefault();
  

    console.log(editParcel)
    const updatedData = {
      origin: editParcel.origin,
      destination: editParcel.destination,
      current_location: editParcel.current_location,
      status: editParcel.status,
      estimated_delivery: new Date(editParcel.estimated_delivery).toISOString,
      senderName: editParcel.senderName,
      senderEmail: editParcel.senderEmail,
      senderPhone: editParcel.senderPhone,
      receiverName: editParcel.receiverName ,
      receiverEmail: editParcel.receiverEmail,
      receiverPhone: editParcel.receiverPhone ,
    };
  
    toast.promise(updateParcel(editParcel.$id, updatedData), {
      loading: "Updating parcel...",
      success: "Parcel updated successfully",
      error: "Failed to update parcel",
    });


    setIsEditing(false);
    setNewParcel({
      origin: "",
      destination: "",
      current_location: "",
      status: "",
      estimated_delivery: new Date(),
      senderName: "",
      senderEmail: "",
      senderPhone: "",
      senderAddress: "",
      receiverName: "",
      receiverEmail: "",
      receiverPhone: "",
      receiverAddress: "",
    });
  };
  
  
  const handleDelete = (id) => {
    toast.promise(deleteParcel(id), {
      loading: "Deleting parcel...",
      success: "Parcel deleted successfully",
      error: "Failed to delete parcel",
    });
  };

  return (
    <div className="admin-page">
      <h1>Admin Parcel Management</h1>
      <div>
            <h2>Welcome, {user?.email}</h2>
            <button onClick={logout} className="btn btn-danger">Logout</button>
        </div>


      {isEditing && (
        <div className="edit-parcel">
          <p className="text-warning">You are editing a parcel - {editParcel.tracking_number}</p>
        </div>
      )}




      {/* Form to add or update a parcel */}
      <form

        className="parcel-form"
        onSubmit={isEditing ? handleUpdate : handleSubmit}
      >
        {/* Parcel details */}
        <div className="mt-2">
          <h4>Parcel Details</h4>
          <div className="parcel-form">
            <input
              type="text"
              name="origin"
              placeholder="Origin"
              value={newParcel.origin}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="destination"
              placeholder="Destination"
              value={newParcel.destination}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="current_location"
              placeholder="Current Location"
              value={newParcel.current_location}
              onChange={handleInputChange}
            />
            <select
              name="status"
              id="status"
              value={newParcel.status}
              onChange={handleInputChange}
            >
              <option value="" disabled selected>
                Select Status
              </option>
              <option value="Pending">Pending</option>
              <option value="In Transit">In Transit</option>
              <option value="Delivered">Delivered</option>
              <option value="Cancelled">Cancelled</option>
            </select>

            <input
               type="datetime-local"
              name="estimated_delivery"
              placeholder="Estimated Delivery"
              value={newParcel.estimated_delivery}
              onChange={handleInputChange}
            />
          </div>
        </div>
        {/* Sender details */}
        <div className="mt-2">
          <h4>Sender Details</h4>

          <div className="parcel-form">
            <input
              type="text"
              name="senderName"
              placeholder="Sender Name"
              value={newParcel.senderName}
              onChange={handleInputChange}

            />
            <input

              type="text"
              name="senderEmail"
              placeholder="Sender Email"
              value={newParcel.senderEmail}
              onChange={handleInputChange}

            />
            <input

              type="text"
              name="senderPhone"
              placeholder="Sender Phone"
              value={newParcel.senderPhone}
              onChange={handleInputChange}

            />
          </div>

        </div>
        {/* Receiver details */}
        <div className="mt-2">
          <h4>Receiver Details</h4>
          <div className="parcel-form">
            <input
              type="text"
              name="receiverName"
              placeholder="Receiver Name"
              value={newParcel.receiverName}
              onChange={handleInputChange}

            />
            <input

              type="text"
              name="receiverEmail"
              placeholder="Receiver Email"
              value={newParcel.receiverEmail}
              onChange={handleInputChange}

            />
            <input
              type="text"
              name="receiverPhone"
              placeholder="Receiver Phone"
              value={newParcel.receiverPhone}
              onChange={handleInputChange}

            />
          </div>

        </div>
        <button type="submit" className="btn btn-primary">
          {loading ? (
            <span>Loading...</span>
          ) : isEditing ? (
            "Update Parcel"
          ) : (
            "Add Parcel"
          )}
        </button>
      </form>

      {/* Display existing parcels */}
      <h2>Parcel List</h2>
      <div className="parcel-list">
        {parcels.length === 0 && (
          <p className="text-center">No parcels yet!</p>
        )}
        {parcels.map((parcel) => (
          <div key={parcel.$id} className="parcel-item">
            <h3>Tracking Number: {parcel.tracking_number}</h3>

            <p>Origin: {parcel.origin}</p>
            <p>Destination: {parcel.destination}</p>
            <p>Status: {parcel.status}</p>
            <p>Estimated Delivery: {parcel.estimated_delivery}</p>
            <div className="d-flex gap-2">
              {/* <button
                onClick={() => triggerEdit(parcel)}
                className="btn btn-primary"
              >
                Edit
              </button> */}
              <button
                onClick={() => handleDelete(parcel.$id)}
                className="btn btn-danger"
              >
                Delete
              </button>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(parcel.tracking_number)
                  toast.success("Tracking Id Copied!")
                }}
                className="btn btn-secondary"
              >

                Copy Tracking ID
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
