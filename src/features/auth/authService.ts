import axios from 'axios';
import { Jwt } from './models';
import { ILogin, IRegister } from './models';

const login = async (
    user: ILogin
): Promise<{ jwt: Jwt }> => {
    // user sign in endpoint
    const response = await axios.post(
        `https://shocking-alien-94396.herokuapp.com/http://soko-fresh-challenge.herokuapp.com/auth/login`,
        user,
        {
            headers: {
           
  'accept':'application/json' ,
  'Content-Type': 'application/x-www-form-urlencoded',
        
            
        },
    }

    );
    console.log(response.data)
    //sets jwt to local storage
    if (response.data) {
        localStorage.setItem('jwt', JSON.stringify(response.data));
        console.log(response.data)
        return { jwt: response.data };

    }

    return { jwt: null };
};
const register = async (
    user: IRegister
): Promise<any> => {
    // user sign in endpoint
    const response = await axios.post(
        `https://shocking-alien-94396.herokuapp.com/http://soko-fresh-challenge.herokuapp.com/auth/register`,
        user,
        {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        }
    );

    //sets jwt to local storage
    if (response.data) {
        console.log(response.data)
        return response.data
    }
};

const logout = (): void => {
    localStorage.removeItem('jwt');
};



const authService = {
    login,
    register,
    logout,
};

export default authService;