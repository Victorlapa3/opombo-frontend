import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    Authorization: `Bearer eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJvcG9tYm8iLCJzdWIiOiJ1c3VhcmlvMUB1c3VhcmlvLmNvbSIsImV4cCI6MTczMzU4MjQ3MSwiaWF0IjoxNzMzNTQ2NDcxLCJ1c2VySWQiOiJlZDhmNTZhNC0xMmNkLTQ0YjUtOGY5OS00YjFkODc2MWQzYjkiLCJyb2xlcyI6IlVTVUFSSU8ifQ.iGWiiy31sYDOXrl2L-nRVUnl2rtJ3BlYYEk1E5tUb_dqKwJNCTxy50kJLEwGhuOaEKf4dk9bUg9XtRIKHa8P0k2clIhfDkrmobR_kgMII3XH-yJoadCXj9k8-_CzILj0y1NRCEjZav7yCEEXwPauE6bsfyqchNRibPpLSafeVAQIAKrxmN7-pkS5dkKApx4-AjFpFQxS_8nJ3dz3_sd1l0AUoLJCSrGzrXux6Fb3C7zB-_bbMUfCeDXidjFyAQiTHlGbjtsNu7wJrSeW9paBEadAy3ZCKXCuL-EedNFEJ-urZasCeQhGwL8XelMRLxBAZEANoh4bi74aNMys5Mv2PA`,
  },
})

// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('pombo-auth-token')
//     if (token) {
//       config.headers.Authorization = `Bearer eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJvcG9tYm8iLCJzdWIiOiJjZXNhckBlbWFpbC5jb20iLCJleHAiOjE3MzMzMDk5MjMsImlhdCI6MTczMzI3MzkyMywidXNlcklkIjoiZmY0MTNiN2UtYTgzOC00YzIwLWFhYTItOTUwMWRlZWI0ZTQ4Iiwicm9sZXMiOiJVU1VBUklPIn0.EPSmaVnVCsEt6RDg0BcaZgKnWwc2yXDhtRIEA0D3xuLQkQQ20kVXF6VKw2KbulR0CrkO7zkwmxHrnj4NbdMSOi1_eTeaSzI0OfLHaUD-htJLsArqRkxv3mrtvQW-RMiz4W7iP-oL7ynmEY8qIA3QTHXiRgn5xoW1rEfEHgxNOvJXVCQsSzj4WoO86Y5EYf4SAnPRffJHzTHkte-dWsbnP_4hEkv2nyMLcnAzK2p6M8FeA0kgYagd8SAcbFjUPJw4eRQbALv4_upjqIH0Dx0_pFXADNlTlgfLTuQSoXEMc7RbVYvt_wZJTrNtokUi5m0_oBSMOWMVHHW89PnzwI-yEQ`
//     }
//     return config
//   },
//   (error) => {
//     return Promise.reject(error)
//   },
// )
