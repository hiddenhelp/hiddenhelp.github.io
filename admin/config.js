// Hidden Help — Configuration
// Keep this file in the repo root alongside index.html.
// Both values are safe to commit — access is controlled by Supabase RLS.

const SUPABASE_URL  = 'https://pokjjlvrtakarcnblljh.supabase.co';
const SUPABASE_ANON = 'sb_publishable_Tciww7ztWF4Nfqve_E_ZHg_TPlLgTlg';

// Email address for referral draft emails
const REFERRAL_EMAIL_RECIPIENT = 'judy@hiddenhelp.org';

// Apps Script web app (DraftEmail.gs) that saves a Gmail draft with the
// referral PDF attached. Empty = fall back to download + Gmail compose tab.
// Deploy from the Apps Script editor as the script owner (Deploy → New
// deployment → Web app, execute as me, access: anyone) and paste the /exec URL.
const DRAFT_EMAIL_WEBAPP_URL = 'https://script.google.com/macros/s/AKfycbwGjjI0dqROqs61Tb4_4gDaWZukpFgcC-dTXTZc5R86OitWYh1HpLOpwOQl2QUdWIDppA/exec';
