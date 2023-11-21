/* eslint-disable import/prefer-default-export */
const OPTIONS_INPUTS = {
  label: 'What can we help you with?',
  list: [
    { name: 'pricing', label: 'Member pricing for products & packaging' },
    { name: 'marketing', label: 'Marketing & Branding' },
    { name: 'social-media', label: 'Social Media Management' },
    { name: 'ads', label: 'Ad Campaigns' },
    { name: 'webdev', label: 'Web Design & Development' },
  ],
};

const NAME_INPUT = {
  name: 'name',
  label: 'What is your name?',
  type: 'text',
};

const PHONE_INPUT = {
  name: 'phone',
  label: 'What is your phone number?',
  type: 'text',
};

const EMAIL_INPUT = {
  name: 'email',
  label: 'What is your email address?',
  type: 'email',
};

const MESSAGE_INPUT = {
  name: 'message',
  label: 'Anything else we should know?',
};

export {
  EMAIL_INPUT,
  MESSAGE_INPUT,
  NAME_INPUT,
  OPTIONS_INPUTS,
  PHONE_INPUT,
};
