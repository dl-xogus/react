import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import '../css/SignUpPage.scss'
import { NavLink } from 'react-router-dom';

const schema = yup.object({     // 검사 기준을 설정해 줌
    name: yup
        .string()                   // 문자인지 체크
        .required('이름 필수')       // 값이 있는지 체크
        .min(2, '2글자 이상'),       // 문자 길이 체크

    email: yup
        .string()
        .required('이메일 필수')
        .email('이메일 형식 아님'),   // 이메일 형식인지 체크

    password: yup
        .string()
        .required('비밀번호 필수')
        .min(6, '6자리 이상'),
});

function SignUpPage() {
    let [userDatas, setUserDatas] = useState([]);

    const {
        register,                       // register : input 값 수집
        handleSubmit,                   // handleSubmit : 제출 + 검증 (submit)
        formState: { errors }           // formState : 현재 폼 상태 저장소
    } = useForm({                       // useForm : 값 저장, 변경 감지, 검증 연결, 에러 관리를 다 해줌
        resolver: yupResolver(schema),  // yupResolver : yup으로 검사하도록 연결해 줌
    });

    /* 
        1. 폼 생성 (useForm)
        2. input 값 수집 (register)
        3. submit 발생 (handleSubmit)
        4. yup으로 검사 (yupResolver)
        5. 결과 저장 (formState.errors)
    */

    const onSubmit = (data) => {
        setUserDatas(s => [...s, data]);    // userDatas에 유저 정보 저장
    };
    console.log(userDatas);

    return (
        <div className='SignUpPage page'>
            <h1>SIGN UP</h1>

            <article>
                <h2>Create Account</h2>

                <form onSubmit={handleSubmit(onSubmit)} className='input-box'>
                    <TextField
                        className='textfield'
                        label="Full Name"
                        variant="standard"
                        fullWidth

                        {...register('name')}               // name: 'name', onChange: func, onBlur: func, ref: func를 담고 있음
                        error={!!errors.name}               // errors.name은 검사를 실패했을경우 값이 생김(ex: .message) 따라서 !!를 달아줌으로써 boolean값으로 변경시키고 값이 있으면 true를 반환해 error를 실행하게 해줌
                        helperText={errors.name?.message}   // ? : errors.name이 있으면 .message를 가져옴, 없으면 undefined 반환해서 helperText를 실행시키지 않음

                        sx={{
                            input: {
                                color: 'white',
                                fontSize: '14px',
                                paddingLeft: '5px',
                                paddingBottom: '10px',

                            },
                            label: {
                                color: '#BEBCBC',
                                fontSize: '14px',
                                paddingLeft: '5px',
                            },

                            '& .MuiInput-root': {
                                '&:before': {
                                    borderBottomColor: '#BEBCBC', // 기본
                                },
                                '&:hover:not(.Mui-disabled):before': {
                                    borderBottomColor: 'white', // hover
                                },
                                '&:after': {
                                    borderBottomColor: '#1976d2', // focus
                                },
                            },
                        }}
                    />

                    <TextField
                        className='textfield'
                        label="Email"
                        variant="standard"
                        fullWidth
                        type="email"

                        {...register('email')}
                        error={!!errors.email}
                        helperText={errors.email?.message}

                        sx={{
                            input: {
                                color: 'white',
                                fontSize: '14px',
                                paddingLeft: '5px',
                                paddingBottom: '10px',

                            },
                            label: {
                                color: '#BEBCBC',
                                fontSize: '14px',
                                paddingLeft: '5px',
                            },

                            '& .MuiInput-root': {
                                '&:before': {
                                    borderBottomColor: '#BEBCBC', // 기본
                                },
                                '&:hover:not(.Mui-disabled):before': {
                                    borderBottomColor: 'white', // hover
                                },
                                '&:after': {
                                    borderBottomColor: '#1976d2', // focus
                                },
                            },
                        }}
                    />

                    <TextField
                        className='textfield'
                        label="Password"
                        variant="standard"
                        fullWidth
                        type="password"

                        {...register('password')}
                        error={!!errors.password}
                        helperText={errors.password?.message}

                        sx={{
                            input: {
                                color: 'white',
                                fontSize: '14px',
                                paddingLeft: '5px',
                                paddingBottom: '10px',

                            },
                            label: {
                                color: '#BEBCBC',
                                fontSize: '14px',
                                paddingLeft: '5px',
                            },

                            '& .MuiInput-root': {
                                '&:before': {
                                    borderBottomColor: '#BEBCBC', // 기본
                                },
                                '&:hover:not(.Mui-disabled):before': {
                                    borderBottomColor: 'white', // hover
                                },
                                '&:after': {
                                    borderBottomColor: '#1976d2', // focus
                                },
                            },
                        }}
                    />

                    <button>Create Account</button>
                </form>

                <p>
                    Already have an account?
                    <NavLink to='/login'>
                        <span> Log In</span>
                    </NavLink>
                </p>
            </article>
        </div>
    )
}

export default SignUpPage