import { createAction, props } from '@ngrx/store';
import { RegisterError, RegisterUserData, User } from '../models/user.model';

export const registerUserRequest = createAction('[Users] Register User Request', props<{userData: RegisterUserData}>());
export const registerUserSuccess= createAction('[Users] Register User Success',props<{user: User}>());
export const registerUserFailure= createAction('[Users] Register User Failure', props<{error: null | RegisterError}>());
