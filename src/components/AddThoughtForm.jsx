import React from 'react'
import * as Yup from 'yup'
import {Formik, Form, useField} from 'formik'

const TextInput = ({label, ...props}) => {
  const [field, meta] = useField(props)
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.error ? <div className="error">{meta.error}</div> : null}
    </>
  )
}

const formSchema = Yup.object().shape({
  emoji: Yup.string()
    .min(1, 'Please pick at least one emoji!')
    .max(5, "Sorry, that's too many emojis!")
    .required('Required'),
  thought: Yup.string()
    .min(30, 'Thoughts should be at least 30 characters.')
    .max(250, "Sorry, that's too long for a thought.")
    .required('Required'),
})

const AddThoughtForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          emoji: '',
          thought: '',
        }}
        validationSchema={formSchema}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        <Form>
          <h3>Add shower thought</h3>
          <TextInput label="Pick an emoji" name="emoji" type="text" autocomplete="off" />

          <TextInput
            label="What's your shower thought?"
            name="thought"
            type="text"
            autocomplete="off"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default AddThoughtForm
