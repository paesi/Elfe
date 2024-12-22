import { FormData, FormErrors } from './types';

export function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  // Required fields
  if (!data.firstName.trim()) {
    errors.firstName = 'Vorname ist erforderlich';
  }
  
  if (!data.lastName.trim()) {
    errors.lastName = 'Nachname ist erforderlich';
  }

  if (!data.email.trim()) {
    errors.email = 'E-Mail ist erforderlich';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
  }

  if (!data.subject.trim()) {
    errors.subject = 'Betreff ist erforderlich';
  }

  if (!data.message.trim()) {
    errors.message = 'Nachricht ist erforderlich';
  } else if (data.message.trim().length < 10) {
    errors.message = 'Ihre Nachricht sollte mindestens 10 Zeichen lang sein';
  }

  // Phone validation (optional field)
  if (data.phone && !isValidPhone(data.phone)) {
    errors.phone = 'Bitte geben Sie eine gültige Telefonnummer ein';
  }

  return errors;
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone: string): boolean {
  // Basic Swiss phone number validation
  const phoneRegex = /^(\+41|0)[1-9][0-9]{8}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}
