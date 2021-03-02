export const CLIENT_ID = 'dscatalog'
export const CLIENT_SECRET = 'dscatalog123'

type LoginResponse = {
  access_toke: string;
  token_type: string;
  expires_in: number;
  scope: string;
  userFirtsName: string;
  userId: number;
}

export const saveSessionData = (loginResponse: LoginResponse) => {
   localStorage.setItem('authData', JSON.stringify(loginResponse))
}