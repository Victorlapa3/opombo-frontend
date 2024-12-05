import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    Authorization: `Bearer eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJvcG9tYm8iLCJzdWIiOiJjZXNhckBlbWFpbC5jb20iLCJleHAiOjE3MzMzOTUzNDEsImlhdCI6MTczMzM1OTM0MSwidXNlcklkIjoiZmY0MTNiN2UtYTgzOC00YzIwLWFhYTItOTUwMWRlZWI0ZTQ4Iiwicm9sZXMiOiJVU1VBUklPIn0.fTHlZs5x6oAy5Dz-xQPWqFmTpSBt9CMI5hunwIK7mKk4VippA3iFIB0AsgqoQ69fuSEj2R-0XTM-YCwTWBqQuq-kaIKbM3zKIaUYPyhw5sIhYMA360QEUu1pm0VIknYo3_OKA9ryLbsVwXGHNV24Hnk5nbFAYFQe5pcFma3n2JhtcTWc0RxIbxEMnbZiDOd0iIBin_yoUclYrYZ3riMhI1N-eZbxyg_ojJBzmNdgXYcYPt0jUI3dnj9uU1RbIkamxocL1NRG8Ecikz5a_-XnKf7p40jzW9dkBvIs8BZ1jcMF1pYckhAQ6mbZpG1jXpfvI7iPCFpTyp9swsh_rKplIQ`,
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
