import { useFormik } from 'formik'
import { CVStepperContainer, Input } from './CVStepper.styles'
import { Flexbox } from '../../common/components/Flexbox'
import { CVPersonalInfoType } from './CVStepper.types'
import { validationSchema } from '../../common/utils/validate'

export const CVStepper: React.FC = () => {
  const initialValues: CVPersonalInfoType = {
    firstName: '',
    lastName: '',
    email: '',
    phone: 0,
    country: '',
    city: '',
  }

  const onSubmit = (): void => {}

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })

  return (
    <CVStepperContainer>
      <form onSubmit={formik.handleSubmit} style={{ width: '40%' }}>
        <Flexbox
          direction='column'
          align='center
            '
        >
          <Input
            error={!!formik.errors.firstName && !!formik.touched.firstName}
            helperText={
              formik.touched.firstName ? formik.errors.firstName : undefined
            }
            id='firstName'
            name='firstName'
            type='firstName'
            label='First Name'
            variant='outlined'
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          <Input
            error={!!formik.errors.lastName && !!formik.touched.lastName}
            helperText={
              formik.touched.lastName ? formik.errors.lastName : undefined
            }
            id='lastName'
            name='lastName'
            type='lastName'
            label='Last Name'
            variant='outlined'
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          <Input
            error={!!formik.errors.email && !!formik.touched.email}
            helperText={formik.touched.email ? formik.errors.email : undefined}
            id='email'
            name='email'
            type='email'
            label='Email'
            variant='outlined'
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <Input
            error={!!formik.errors.phone && !!formik.touched.phone}
            helperText={formik.touched.phone ? formik.errors.phone : undefined}
            id='phone'
            name='phone'
            type='phone'
            label='Phone'
            variant='outlined'
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          <Input
            error={!!formik.errors.country && !!formik.touched.country}
            helperText={
              formik.touched.country ? formik.errors.country : undefined
            }
            id='country'
            name='country'
            type='country'
            label='Country'
            variant='outlined'
            onChange={formik.handleChange}
            value={formik.values.country}
          />
          <Input
            error={!!formik.errors.city && !!formik.touched.city}
            helperText={formik.touched.city ? formik.errors.city : undefined}
            id='city'
            name='city'
            type='city'
            label='City'
            variant='outlined'
            onChange={formik.handleChange}
            value={formik.values.city}
          />
        </Flexbox>
      </form>
    </CVStepperContainer>
  )
}
