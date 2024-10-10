'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface UserFormData {
    username: string;
    password: string;
}

const UserCreateForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<UserFormData>();

    const router = useRouter();

    const onSubmit: SubmitHandler<UserFormData> = async (data) => {
        try {
            const response = await axios.post('http://localhost:8080/api/user/create',{
                username : data.username,
                password : data.password
            },{
                headers:{
                    'Content-Type' : 'application/json',
                }
            });

            let token = response.data.token;

            localStorage.setItem('token',token);

          router.push('/posts')
        } catch (error) {
            console.error('Error creating user:', error);
            // Optionally, set an error state to display to the user
        }
    };

    return (
        <div>
            <h4>User Form</h4>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="username">Username:</label> {/* Changed to username */}
                    <input
                        id="username"
                        {...register('username', { required: 'Username is required' })} // Updated message
                    />
                    {errors.username && <p>{errors.username.message}</p>}
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        type="password"
                        {...register('password', {
                            required: 'Password is required',
                        })}
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>

                <button type="submit">Create User</button>
            </form>
        </div>
    );
};

export default UserCreateForm;
