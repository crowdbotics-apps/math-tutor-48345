import axios from "axios"
const mathtutorAPI = axios.create({
  baseURL: "https://math-tutor-48345.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return mathtutorAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_donation_list(payload) {
  return mathtutorAPI.get(`/api/v1/donation/`)
}
function api_v1_donation_create(payload) {
  return mathtutorAPI.post(`/api/v1/donation/`, payload)
}
function api_v1_donation_retrieve(payload) {
  return mathtutorAPI.get(`/api/v1/donation/${payload.id}/`)
}
function api_v1_donation_update(payload) {
  return mathtutorAPI.put(`/api/v1/donation/${payload.id}/`, payload)
}
function api_v1_donation_partial_update(payload) {
  return mathtutorAPI.patch(`/api/v1/donation/${payload.id}/`, payload)
}
function api_v1_donation_destroy(payload) {
  return mathtutorAPI.delete(`/api/v1/donation/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return mathtutorAPI.post(`/api/v1/login/`, payload)
}
function api_v1_material_list(payload) {
  return mathtutorAPI.get(`/api/v1/material/`)
}
function api_v1_material_create(payload) {
  return mathtutorAPI.post(`/api/v1/material/`, payload)
}
function api_v1_material_retrieve(payload) {
  return mathtutorAPI.get(`/api/v1/material/${payload.id}/`)
}
function api_v1_material_update(payload) {
  return mathtutorAPI.put(`/api/v1/material/${payload.id}/`, payload)
}
function api_v1_material_partial_update(payload) {
  return mathtutorAPI.patch(`/api/v1/material/${payload.id}/`, payload)
}
function api_v1_material_destroy(payload) {
  return mathtutorAPI.delete(`/api/v1/material/${payload.id}/`)
}
function api_v1_payment_list(payload) {
  return mathtutorAPI.get(`/api/v1/payment/`)
}
function api_v1_payment_create(payload) {
  return mathtutorAPI.post(`/api/v1/payment/`, payload)
}
function api_v1_payment_retrieve(payload) {
  return mathtutorAPI.get(`/api/v1/payment/${payload.id}/`)
}
function api_v1_payment_update(payload) {
  return mathtutorAPI.put(`/api/v1/payment/${payload.id}/`, payload)
}
function api_v1_payment_partial_update(payload) {
  return mathtutorAPI.patch(`/api/v1/payment/${payload.id}/`, payload)
}
function api_v1_payment_destroy(payload) {
  return mathtutorAPI.delete(`/api/v1/payment/${payload.id}/`)
}
function api_v1_session_list(payload) {
  return mathtutorAPI.get(`/api/v1/session/`)
}
function api_v1_session_create(payload) {
  return mathtutorAPI.post(`/api/v1/session/`, payload)
}
function api_v1_session_retrieve(payload) {
  return mathtutorAPI.get(`/api/v1/session/${payload.id}/`)
}
function api_v1_session_update(payload) {
  return mathtutorAPI.put(`/api/v1/session/${payload.id}/`, payload)
}
function api_v1_session_partial_update(payload) {
  return mathtutorAPI.patch(`/api/v1/session/${payload.id}/`, payload)
}
function api_v1_session_destroy(payload) {
  return mathtutorAPI.delete(`/api/v1/session/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return mathtutorAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_subject_list(payload) {
  return mathtutorAPI.get(`/api/v1/subject/`)
}
function api_v1_subject_create(payload) {
  return mathtutorAPI.post(`/api/v1/subject/`, payload)
}
function api_v1_subject_retrieve(payload) {
  return mathtutorAPI.get(`/api/v1/subject/${payload.id}/`)
}
function api_v1_subject_update(payload) {
  return mathtutorAPI.put(`/api/v1/subject/${payload.id}/`, payload)
}
function api_v1_subject_partial_update(payload) {
  return mathtutorAPI.patch(`/api/v1/subject/${payload.id}/`, payload)
}
function api_v1_subject_destroy(payload) {
  return mathtutorAPI.delete(`/api/v1/subject/${payload.id}/`)
}
function api_v1_user_list(payload) {
  return mathtutorAPI.get(`/api/v1/user/`)
}
function api_v1_user_create(payload) {
  return mathtutorAPI.post(`/api/v1/user/`, payload)
}
function api_v1_user_retrieve(payload) {
  return mathtutorAPI.get(`/api/v1/user/${payload.id}/`)
}
function api_v1_user_update(payload) {
  return mathtutorAPI.put(`/api/v1/user/${payload.id}/`, payload)
}
function api_v1_user_partial_update(payload) {
  return mathtutorAPI.patch(`/api/v1/user/${payload.id}/`, payload)
}
function api_v1_user_destroy(payload) {
  return mathtutorAPI.delete(`/api/v1/user/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return mathtutorAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return mathtutorAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return mathtutorAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return mathtutorAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return mathtutorAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return mathtutorAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return mathtutorAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return mathtutorAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return mathtutorAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return mathtutorAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return mathtutorAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_donation_list,
  api_v1_donation_create,
  api_v1_donation_retrieve,
  api_v1_donation_update,
  api_v1_donation_partial_update,
  api_v1_donation_destroy,
  api_v1_login_create,
  api_v1_material_list,
  api_v1_material_create,
  api_v1_material_retrieve,
  api_v1_material_update,
  api_v1_material_partial_update,
  api_v1_material_destroy,
  api_v1_payment_list,
  api_v1_payment_create,
  api_v1_payment_retrieve,
  api_v1_payment_update,
  api_v1_payment_partial_update,
  api_v1_payment_destroy,
  api_v1_session_list,
  api_v1_session_create,
  api_v1_session_retrieve,
  api_v1_session_update,
  api_v1_session_partial_update,
  api_v1_session_destroy,
  api_v1_signup_create,
  api_v1_subject_list,
  api_v1_subject_create,
  api_v1_subject_retrieve,
  api_v1_subject_update,
  api_v1_subject_partial_update,
  api_v1_subject_destroy,
  api_v1_user_list,
  api_v1_user_create,
  api_v1_user_retrieve,
  api_v1_user_update,
  api_v1_user_partial_update,
  api_v1_user_destroy,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
