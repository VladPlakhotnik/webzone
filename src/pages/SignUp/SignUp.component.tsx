import { NavLink } from 'react-router-dom'
import { useFormik } from 'formik'

import {
  Container,
  ContainerImg,
  ContainerLogin,
  Arrow,
  Google,
  GitHub,
  Input,
  ButtonLogin,
  CreateAccount,
} from './SignUp.styles'
import { Flexbox } from '../../common/components/Flexbox'
import { SignUpParams } from './SignUp.types'
import { validationSchema } from '../../common/utils/validate'

export const SignUp: React.FC = () => {
  const initialValues: SignUpParams = {
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
  }

  const onSubmit = (): void => {}

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })

  return (
    <Container>
      <ContainerImg>
        <NavLink to='/'>
          <Arrow src='assets/img/svg/arrow_left.svg' />
        </NavLink>
      </ContainerImg>
      <ContainerLogin>
        <h1>Join</h1>
        <Flexbox direction='column' align='center'>
          <p>Express sign up with Google and Github</p>
          <div>
            <Google src='assets/img/svg/google.svg' />
            <GitHub src='assets/img/svg/github.svg' />
          </div>
        </Flexbox>
        <form onSubmit={formik.handleSubmit} style={{ width: '40%' }}>
          <Flexbox
            direction='column'
            align='center
            '
          >
            <Input
              error={!!formik.errors.username && !!formik.touched.username}
              helperText={
                formik.touched.username ? formik.errors.username : undefined
              }
              id='username'
              name='username'
              type='username'
              label='Username'
              variant='outlined'
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            <Input
              error={!!formik.errors.email && !!formik.touched.email}
              helperText={
                formik.touched.email ? formik.errors.email : undefined
              }
              id='email'
              name='email'
              type='email'
              label='Email'
              variant='outlined'
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <Input
              error={!!formik.errors.password && !!formik.touched.password}
              helperText={
                formik.touched.password ? formik.errors.password : undefined
              }
              id='password'
              name='password'
              type='password'
              label='Password'
              variant='outlined'
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <Input
              error={
                !!formik.errors.repeatPassword &&
                !!formik.touched.repeatPassword
              }
              helperText={
                formik.touched.repeatPassword
                  ? formik.errors.repeatPassword
                  : undefined
              }
              id='repeatPassword'
              name='repeatPassword'
              type='password'
              label='Repeat password'
              variant='outlined'
              onChange={formik.handleChange}
              value={formik.values.repeatPassword}
            />
            <ButtonLogin type='submit'>Sign up</ButtonLogin>
          </Flexbox>
        </form>
        <Flexbox align='center'>
          <p>Already a user?</p>
          <NavLink to='/login'>
            <CreateAccount>Log in</CreateAccount>
          </NavLink>
        </Flexbox>
      </ContainerLogin>
    </Container>
  )
}
