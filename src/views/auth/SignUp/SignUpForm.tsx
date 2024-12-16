import { FormItem, FormContainer } from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import Alert from '@/components/ui/Alert'
import PasswordInput from '@/components/shared/PasswordInput'
import ActionLink from '@/components/shared/ActionLink'
import useTimeOutMessage from '@/utils/hooks/useTimeOutMessage'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import useAuth from '@/utils/hooks/useAuth'
import type { CommonProps } from '@/@types/common'

interface SignUpFormProps extends CommonProps {
    disableSubmit?: boolean
    signInUrl?: string
}

type SignUpFormSchema = {
    firstName: string
    lastName: string
    age: number
    profession: string
    phone:number
    password: string
    email: string
}

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Please enter your user name'),
    lastName: Yup.string().required('Please enter your user name'),
    age: Yup.number()
        .typeError('Age must be a number') // Ensures the value is numeric
        .test(
            'is-two-digits',
            'must be a two-digit number',
            (value: any) => value >= 10 && value <= 99,
        )
        .required('Please enter your age'),
    phone: Yup.number()
        .typeError('phone must be number'),
    profession: Yup.string().required('Please enter your profession'),    
    email: Yup.string()
        .email('Invalid email')
        .required('Please enter your email'),
    password: Yup.string().required('Please enter your password'),
    confirmPassword: Yup.string().oneOf(
        [Yup.ref('password')],
        'Your passwords do not match',
    ),
})

const SignUpForm = (props: SignUpFormProps) => {
    const { disableSubmit = false, className, signInUrl = '/sign-in' } = props

    const { signUp } = useAuth()

    const [message, setMessage] = useTimeOutMessage()

    const onSignUp = async (
        values: SignUpFormSchema,
        setSubmitting: (isSubmitting: boolean) => void,
    ) => {
        const {
            firstName: first_name,
            lastName: last_name,
            age,
            profession,
            password,
            phone,
            email,
        } = values
        setSubmitting(true)
        const result = await signUp({
            first_name,
            last_name,
            age,
            phone,
            profession,
            password,
            email,
        })

        if (result?.status === 'failed') {
            setMessage(result.message)
        }

        setSubmitting(false)
    }

    return (
        <div className={className}>
            {message && (
                <Alert showIcon className="mb-4" type="danger">
                    {message}
                </Alert>
            )}
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    age: 0,
                    profession: '',
                    phone:0,
                    password: '',
                    confirmPassword: '',
                    email: ''
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    if (!disableSubmit) {
                        onSignUp(values, setSubmitting)
                    } else {
                        setSubmitting(false)
                    }
                }}
            >
                {({ touched, errors, isSubmitting }) => (
                    <Form>
                        <FormContainer>
                            <div
                                className="h-[400px] overflow-y-auto"
                                style={{
                                    scrollbarWidth: 'none', // For Firefox
                                    msOverflowStyle: 'none', // For Internet Explorer
                                }}
                            >
                                <div className="flex gap-2">
                                    <FormItem
                                        label="First Name"
                                        invalid={
                                            errors.firstName &&
                                            touched.firstName
                                        }
                                        errorMessage={errors.firstName}
                                        className="!mb-5"
                                    >
                                        <Field
                                            type="text"
                                            autoComplete="off"
                                            name="firstName"
                                            placeholder="First Name"
                                            component={Input}
                                        />
                                    </FormItem>
                                    <FormItem
                                        label="Last Name"
                                        invalid={
                                            errors.lastName && touched.lastName
                                        }
                                        errorMessage={errors.lastName}
                                        className="!mb-5"
                                    >
                                        <Field
                                            type="text"
                                            autoComplete="off"
                                            name="lastName"
                                            placeholder="Last Name"
                                            component={Input}
                                        />
                                    </FormItem>
                                </div>
                                <div className="flex gap-2">
                                    <FormItem
                                        label="Age"
                                        invalid={errors.age && touched.age}
                                        errorMessage={errors.age}
                                        className="!mb-5"
                                    >
                                        <Field
                                            autoComplete="off"
                                            name="age"
                                            placeholder="Your Age"
                                            component={Input}
                                        />
                                    </FormItem>
                                    <FormItem
                                        label="Profession"
                                        invalid={
                                            errors.profession &&
                                            touched.profession
                                        }
                                        errorMessage={errors.profession}
                                        className="!mb-5"
                                    >
                                        <Field
                                            type="text"
                                            autoComplete="off"
                                            name="profession"
                                            placeholder="Your Profession"
                                            component={Input}
                                        />
                                    </FormItem>
                                </div>
                                <FormItem
                                    label="Phone Number"
                                    invalid={errors.phone && touched.phone}
                                    errorMessage={errors.phone}
                                    className="!mb-5"
                                >
                                    <Field
                                        
                                        autoComplete="off"
                                        name="phone"
                                        placeholder="phone"
                                        component={Input}
                                    />
                                </FormItem>
                                <FormItem
                                    label="Email"
                                    invalid={errors.email && touched.email}
                                    errorMessage={errors.email}
                                    className="!mb-5"
                                >
                                    <Field
                                        type="email"
                                        autoComplete="off"
                                        name="email"
                                        placeholder="Email"
                                        component={Input}
                                    />
                                </FormItem>
                                <FormItem
                                    label="Password"
                                    invalid={
                                        errors.password && touched.password
                                    }
                                    errorMessage={errors.password}
                                    className="!mb-5"
                                >
                                    <Field
                                        autoComplete="off"
                                        name="password"
                                        placeholder="Password"
                                        component={PasswordInput}
                                    />
                                </FormItem>
                                <FormItem
                                    label="Confirm Password"
                                    invalid={
                                        errors.confirmPassword &&
                                        touched.confirmPassword
                                    }
                                    errorMessage={errors.confirmPassword}
                                    className="!mb-5"
                                >
                                    <Field
                                        autoComplete="off"
                                        name="confirmPassword"
                                        placeholder="Confirm Password"
                                        component={PasswordInput}
                                    />
                                </FormItem>
                            </div>
                            <Button
                                block
                                loading={isSubmitting}
                                variant="solid"
                                type="submit"
                            >
                                {isSubmitting
                                    ? 'Creating Account...'
                                    : 'Sign Up'}
                            </Button>
                            <div className="mt-4 text-center">
                                <span>Already have an account? </span>
                                <ActionLink to={signInUrl}>Sign in</ActionLink>
                            </div>
                        </FormContainer>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default SignUpForm
