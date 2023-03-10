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
} from './Login.styles'
import { Flexbox } from '../../common/components/Flexbox'
import { LoginParams } from './Login.types'
import { validationSchema } from '../../common/utils/validate'

export const Login: React.FC = () => {
  const initialValues: LoginParams = {
    email: '',
    password: '',
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
        <h1>LOG IN</h1>
        <Flexbox direction='column' align='center'>
          <p>Express login with Google and Github</p>
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
              id='email'
              name='email'
              type='email'
              label='Email'
              variant='outlined'
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <Input
              id='password'
              name='password'
              type='password'
              label='Password'
              variant='outlined'
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <ButtonLogin type='submit'>Log in</ButtonLogin>
          </Flexbox>
        </form>
        <Flexbox align='center'>
          <p>Do you have account ?</p>
          <NavLink to='/join'>
            <CreateAccount>Create Accont</CreateAccount>
          </NavLink>
        </Flexbox>
      </ContainerLogin>
    </Container>
  )
}
