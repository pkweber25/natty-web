/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BIRTHDAY_SEX_BOOKING_FORM_URL?: string;
  readonly VITE_CONCERT_TICKETS_FORM_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
