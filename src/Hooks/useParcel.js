import { useState, useCallback, useEffect } from "react";
import { databases, DB, PARCEL } from "../appwrite";
import { ID, Query } from "appwrite";
const useParcel = () => {
    const [parcels, setParcels] = useState([]);
    const [parcel, setParcel] = useState(null);
    const [loading, setLoading] = useState(false);

    const generateTrackingId = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let trackingId = '';
        for (let i = 0; i < 12; i++) {
            trackingId += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return "SHDR-" +trackingId;
    };

    console.log(generateTrackingId());

    const createParcel = async (newParcel) => {
        setLoading(true);
        try {



            const parcel = await databases.createDocument(DB, PARCEL, ID.unique(), {
                tracking_number: generateTrackingId(),
                origin: newParcel.origin,
                created_at: new Date().toISOString(),
                destination: newParcel.destination,
                current_location: newParcel.current_location,
                status: newParcel.status,
                estimated_delivery: newParcel.estimated_delivery,
                senderName: newParcel.senderName || '',
                senderEmail: newParcel.senderEmail || '',
                senderPhone: newParcel.senderPhone || '',
                receiverName: newParcel.receiverName || '',
                receiverEmail: newParcel.receiverEmail || '',
                receiverPhone: newParcel.receiverPhone || '',

            });
            console.log(parcel);
            await getParcels();

        } catch (error) {
            console.log(error);
            throw new Error(error.message);
        } finally {
            setLoading(false);
        }
    }

    const getParcels = useCallback(async () => {
        try {
            const parcels = await databases.listDocuments(DB, PARCEL);
            setParcels(parcels.documents);
            console.log(parcels.documents);
        } catch (error) {
            console.log(error);
            throw new Error(error.message);
        }
    }, []);
    useEffect(() => {
        getParcels();
    }, [getParcels]);


    const updateParcel = async (id, parcelData) => {
        try {
            const updatedParcel = await databases.updateDocument(DB, PARCEL, id, {
                origin: parcelData.origin,
                destination: parcelData.destination,
                current_location: parcelData.current_location,
                status: parcelData.status,
                estimated_delivery: parcelData.estimated_delivery,
                senderName: parcelData.sender?.name || '',
                senderEmail: parcelData.sender?.email || '',
                senderPhone: parcelData.sender?.phone || '',
                receiverName: parcelData.receiver?.name || '',
                receiverEmail: parcelData.receiver?.email || '',
                receiverPhone: parcelData.receiver?.phone || '',
            });
    
            console.log("Updated Parcel:", updatedParcel);
            await getParcels();
        } catch (error) {
            console.error("Update failed:", error);
            throw new Error(error.message);
        }
    };
    

    const deleteParcel = async (id) => {
        try {
            await databases.deleteDocument(DB, PARCEL, id);
            console.log("Parcel deleted successfully");
            await getParcels();
        } catch (error) {
            console.log(error);
            throw new Error(error.message);
        }
    }

    const getParcelById = async (id) => {
        setLoading(true);
        try {
            const parcel = await databases.listDocuments(DB, PARCEL, [Query.equal('tracking_number', id)]);
            setParcel(parcel.documents[0]);
        } catch (error) {
            console.log(error);
            throw new Error(error.message);
        } finally {
            setLoading(false);
        }


    }

    return {parcels, setParcels, createParcel, loading, getParcels, updateParcel, deleteParcel, getParcelById, parcel};





}

export default useParcel;
