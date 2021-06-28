export default {
  development: {
    root: '/api',
    withCredentials: true,
    secret: 'dV1FxbDy9gKAjjA8XRyoNAUGcXE2gIB6'
  },
  test: {
    root: 'https://mtp-test.myoas.com',
    withCredentials: false,
    secret: 'dV1FxbDy9gKAjjA8XRyoNAUGcXE2gIB6'
  },
  production: {
    root: 'https://mtp.myoas.com',
    withCredentials: false,
    secret: ''
  }
}
