import { createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import { User } from '../../utils/GlobalInterfaces';
import axios from "axios";

interface UserSliceState {
    loggedIn: User | undefined;
    userName:string;
    token: string;
    fromRegister: boolean;
    error: boolean;
}

interface LoginBody {
    userName: string;
    password: string;
}
interface VerifyUserBody {
    email: string;
    phone: string;
    userName: string;
}

const initialState:UserSliceState = {
    loggedIn: undefined,
    userName: '',
    token: '',
    fromRegister: false,
    error: false,
};

export const loginUser = createAsyncThunk(
    'user/login',
    async (body:LoginBody, thunkAPI) => {
        try {
            const req = await axios.post('http://localhost:8080/auth/login', body);
            return req.data;
        }catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
)

export const verifyUsername = createAsyncThunk(
    'user/username',
    async (body:VerifyUserBody, thunkAPI) => {
        try {
            const req = await axios.post('http://localhost:8080/auth/find', body);
            return req.data;
        }catch (e) {
            thunkAPI.rejectWithValue(e);
        }
    }
)

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setFromRegister(state, action:PayloadAction<boolean>){
            state = {
                ...state,
                fromRegister: action.payload,
            }
            return state;
        },
        resetUsername(state){
            state = {
                ...state,
                userName: ''
            };
            return state;
        },
        setToken(state, action: PayloadAction<string>){
            state = {
                ...state,
                token: action.payload
            };
            return state;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state = {
                ...state,
                loggedIn: {
                    userId: action.payload.user.userId,
                    firstName: action.payload.user.firstName,
                    lastName: action.payload.user.lastName,
                    email: action.payload.user.email,
                    phone: action.payload.user.phone,
                    dateOfBirth: action.payload.user.dateOfBirth,
                    userName: action.payload.user.userName,
                    bio: action.payload.user.bio,
                    nickName: action.payload.user.nickName,
                    profilePicture: action.payload.user.profilePicture,
                    bannerPicture: action.payload.user.bannerPicture,
                },
                token: action.payload.token
            }
            return state;
        });

        builder.addCase(verifyUsername.fulfilled, (state, action)=>{
            state = {
                ...state,
                userName: action.payload
            };
            return state;
        });
        builder.addCase(loginUser.pending, (state, action) => {
            state={
                ...state,
                error: true
            }
            return state;
        });
        builder.addCase(verifyUsername.pending, (state, action)=>{
            state = {
                ...state,
                error: true
            };
            return state;
        });
        builder.addCase(loginUser.rejected, (state, action) => {
           state={
               ...state,
               error: false
           }
           return state;
        });
        builder.addCase(verifyUsername.rejected, (state, action)=>{
            state = {
                ...state,
                error: false
            };
            return state;
        });
    }
});

export const {setFromRegister, resetUsername, setToken} = UserSlice.actions;

export default UserSlice.reducer;