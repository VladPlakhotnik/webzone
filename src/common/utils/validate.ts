import * as Yup from 'yup'

export const validationSchema = Yup.object({
  username: Yup.string()
    .max(36, 'The maximum number of characters is 36')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email field is required'),
  password: Yup.string()
    .min(6, 'The minimum number of characters is 6')
    .max(21, 'The maximum number of characters is 21')
    .required('Password field is required'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), ''], 'Passwords must match')
    .required('Repeat Password field is required'),
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  phone: Yup.number().required('Required'),
  country: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
})
