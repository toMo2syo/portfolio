
import { useState } from 'react'
import './contact.scss'
export default function Contact() {
    const [formData, setFormData] = useState({
        email: '',
        message: '',
        isBusiness: false
    })
    function handleFormDataInput(e) {
        const { type, checked, name, value } = e.target
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        })
    }
    function handleFormSubmit(e) {
        e.preventDefault()
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="../src/assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <div className="form-container">
                    <h2>Contact</h2>
                    <form onSubmit={handleFormSubmit}>
                        <label htmlFor="email">
                            Email:
                            <input type="email" id='email' name='email' value={formData.email} onChange={e => handleFormDataInput(e)} />
                        </label>
                        <label htmlFor="message">
                            Message:
                            <textarea name="message" id="message" cols="30" rows="10" value={formData.message} onChange={e => handleFormDataInput(e)}></textarea>
                        </label>
                        <label htmlFor="isBusiness">
                            <input type="checkbox" name="isBusiness" id="isBusiness" value={formData.isBusiness} onChange={e => handleFormDataInput(e)} />
                            Business Contact
                        </label>
                        <div className='wrapper'><button type="submit">Send</button></div>
                    </form>
                </div>
            </div>
        </div>
    )
}
