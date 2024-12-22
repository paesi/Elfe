import React from 'react';
import { useContactForm } from './useContactForm';
import { FormInput } from './FormInput';
import { FormTextarea } from './FormTextarea';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const { formData, errors, isSubmitting, handleChange, handleSubmit } = useContactForm();

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          label="Vorname"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          error={errors.firstName}
          required
        />
        
        <FormInput
          label="Nachname"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          error={errors.lastName}
          required
        />
        
        <FormInput
          label="E-Mail"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
        />
        
        <FormInput
          label="Telefon"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
        />
      </div>

      <FormInput
        label="Betreff"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        error={errors.subject}
        required
        className="mt-6"
      />

      <FormTextarea
        label="Nachricht"
        name="message"
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        required
        className="mt-6"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-8 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center w-full md:w-auto"
      >
        {isSubmitting ? (
          <span className="flex items-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Wird gesendet...
          </span>
        ) : (
          <span className="flex items-center">
            <Send className="mr-2" size={20} />
            Nachricht senden
          </span>
        )}
      </button>
    </form>
  );
}
