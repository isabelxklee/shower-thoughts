import React from 'react'
import {useFormik} from 'formik'

const AddThoughtForm = () => {
  const validate = (values) => {
    const errors = {}

    if (!values.emoji) {
      errors.emoji = 'Required'
    } else if (values.emoji.length < 1) {
      errors.emoji = 'Please pick at least one emoji!'
    }

    if (!values.thought) {
      errors.thought = 'Required'
    } else if (values.thought.length < 30) {
      errors.thought = 'A thought must be at least 30 characters long.'
    }

    return errors
  }

  const formik = useFormik({
    initialValues: {
      emoji: '',
      thought: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <h3>Add shower thought</h3>
      <label htmlFor="emoji">Pick an emoji</label>
      <br />
      <input
        id="emoji"
        name="emoji"
        type="emoji"
        autoComplete="off"
        onChange={formik.handleChange}
        value={formik.values.emoji}
      />
      {formik.errors.emoji ? <div>{formik.errors.emoji}</div> : null}
      <br />

      <label htmlFor="thought">What&apos;s your shower thought?</label>
      <br />
      <input
        id="thought"
        name="thought"
        type="thought"
        autoComplete="off"
        onChange={formik.handleChange}
        value={formik.values.thought}
      />
      {formik.errors.thought ? <div>{formik.errors.thought}</div> : null}
      <br />

      <button type="submit">Create thought</button>
    </form>
  )
}

export default AddThoughtForm
