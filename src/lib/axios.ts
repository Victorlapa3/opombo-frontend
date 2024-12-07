import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    Authorization: `Bearer eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJvcG9tYm8iLCJzdWIiOiJjZXNhckBlbWFpbC5jb20iLCJleHAiOjE3MzM1NzcxMDcsImlhdCI6MTczMzU0MTEwNywidXNlcklkIjoiZmY0MTNiN2UtYTgzOC00YzIwLWFhYTItOTUwMWRlZWI0ZTQ4Iiwicm9sZXMiOiJVU1VBUklPIn0.HFdjqGcynMkl1XmGEvTwuRcRyH6KsbFBpprkGJgs3IStvquj77jSqu3TFeG9cjIX3fu5yRCov_YhZQCE_WcKsfXZ0luTbOMcHKDyxs8YLdhWhBvdIFoV0cO3_67LzVoNAQYPgNIJXo61qX6V52xNtLuG6soFdQgNcYNsK1NKN6saGE52amlca9FTXCXAHZQ6zAeuEnNxXRTRInfHPgCkoYhcr2o-daPC_Kzfb6DirjVcJ5NOS-0ki90hBS3AvTryUgVWfvlV8r7dgrldbP54LqoCqHoqawd4ZZo1DMnGkPhj7lw4CsVYTrqf8DDHuRyppC80WUUmM97nY7hNxVS1Tg`,
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
