import React from 'react'
import {useFormik} from 'formik'

const AddThoughtForm = () => {

  const formik = useFormik({
    initialValues: {
      emoji: '',
      thought: ''
    },
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
      <br />

      <button type="submit">Create thought</button>
    </form>
  )
}

export default AddThoughtForm