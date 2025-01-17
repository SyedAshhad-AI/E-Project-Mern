import React, { useEffect, useState } from "react";
import {
    CContainer,
    CRow,
    CCol,
    CCard,
    CCardBody,
    CCardHeader,
    CForm,
    CFormInput,
    CFormTextarea,
    CFormSelect,
    CButton,
    CAlert,
} from "@coreui/react";
import { useProfile } from "../../../Hooks/useGetProfile";
import { useSendFeedback } from "../../../Hooks/useSendFeedback";
import { useGetEvents } from "../../../Hooks/useGetEvents"; // Import the hook

const ContactForm = () => {
    const { data } = useProfile();
    const { data: eventsData } = useGetEvents(); // Fetch events using the hook

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        nameOfEvent: "",
        message: "",
    });

    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [visible, setVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const feedbackMutation = useSendFeedback();

    // Update form data when profile data is available
    useEffect(() => {
        if (data?.userDetails) {
            setFormData((prevData) => ({
                ...prevData,
                name: data.userDetails.username || "",
                email: data.userDetails.email || "",
            }));
        }
    }, [data]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Client-side validation
        if (!formData.message.trim()) {
            setErrorMessage("Message cannot be empty.");
            setVisible(true);
            return;
        }

        setIsLoading(true);
        feedbackMutation.mutate(formData, {
            onSuccess: (data) => {
                setSuccessMessage(data.success || "Message sent successfully!");
                setErrorMessage("");
                setFormData((prevData) => ({
                    ...prevData,
                    message: "",
                }));
                setIsLoading(false);
            },
            onError: (error) => {
                setSuccessMessage("");
                setErrorMessage(error.message || "Something went wrong. Please try again.");
                setIsLoading(false);
            },
        });
    };

    useEffect(() => {
        if (errorMessage || successMessage) {
            setVisible(true);

            const timer = setTimeout(() => {
                setVisible(false);
                setErrorMessage("");
                setSuccessMessage("");
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [errorMessage, successMessage]);

    return (
        <CContainer className="py-4">
            <CRow className="justify-content-center">
                <CCol md="6">
                    <CCard>
                        <CCardHeader className="text-white text-center">
                            <h3>Contact Us</h3>
                        </CCardHeader>
                        <CCardBody>
                            {visible && errorMessage && (
                                <CAlert color="danger" dismissible>
                                    <strong>Error:</strong> {errorMessage}
                                </CAlert>
                            )}
                            {visible && successMessage && (
                                <CAlert color="success" dismissible>
                                    <strong>Success:</strong> {successMessage}
                                </CAlert>
                            )}

                            <CForm onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <CFormInput
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        disabled
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <CFormInput
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        disabled
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Event</label>
                                    <CFormSelect
                                        name="nameOfEvent"
                                        value={formData.nameOfEvent}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select an event</option>
                                        {eventsData?.map((event) => (
                                            <option key={event.id} value={event.name}>
                                                {event.name}
                                            </option>
                                        ))}
                                    </CFormSelect>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Message</label>
                                    <CFormTextarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="4"
                                        placeholder="Enter your message here..."
                                    />
                                </div>

                                <CButton
                                    type="submit"
                                    color="primary"
                                    className="w-100"
                                    disabled={isLoading}
                                >
                                    {isLoading ? "Sending..." : "Send Message"}
                                </CButton>
                            </CForm>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </CContainer>
    );
};

export default ContactForm;
