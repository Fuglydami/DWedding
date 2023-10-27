import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { send } from 'emailjs-com';
const CollectGuestAttendance = ({ setShowModal, showModal }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  function httpStatus(statusCode) {
    if (statusCode >= 200 && statusCode <= 299) {
      Swal.fire('Success!', 'We appreciate your response!', 'success');
      setShowModal(false);
      setMessage('');
      setEmail('');
      setName('');
    } else if (statusCode >= 400 && statusCode <= 499) {
      Swal.fire('Error!', 'Something went wrong, please try again!', 'error');
    } else if (statusCode >= 500) {
      Swal.fire('Error!', 'Something went wrong, please try again!', 'error');
    } else {
      return 'unknown status';
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      Swal.fire('', 'All fields are required', 'error');
      return;
    }
    setIsLoading(true);

    await send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      { name, email, message },
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID
    )
      .then((response) => {
        httpStatus(response.status);
      })
      .catch((err) => {
        setIsLoading(false);
        Swal.fire('Error!', 'Something went wrong, please try again!', 'error');
      });

    setIsLoading(false);
  };
  return (
    <div
      className='modal'
      tabIndex='-1'
      role='dialog'
      style={{
        display: showModal ? 'block' : 'none',

        color: 'black',
      }}
    >
      <div className='modal-dialog' role='document'>
        <div className='modal-content  glassmorphism'>
          <div
            type='button'
            className='close guest-modal'
            onClick={() => setShowModal(false)}
          >
            <span aria-hidden='true'>&times;</span>
          </div>

          <div className='modal-body'>
            <div className='container'>
              <h2
                style={{
                  fontSize: '20px',
                }}
                className='form_title mb-4'
              >
                Inform us of your availability
              </h2>
              <form onSubmit={handleSubmit}>
                <div className='row mb-3'>
                  <div className='col-md-6'>
                    <label
                      style={{
                        fontSize: '14px',
                      }}
                      htmlFor='name'
                      className='form-label'
                    >
                      Name:
                    </label>
                    <input
                      style={{
                        borderRadius: '10px',
                        height: '45px',
                        color: 'black',
                        backgroundColor: 'transparent',
                      }}
                      type='text'
                      className='form-control'
                      id='name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className='col-md-6'>
                    <label
                      style={{
                        fontSize: '14px',
                      }}
                      htmlFor='email'
                      className='form-label'
                    >
                      Email:
                    </label>
                    <input
                      style={{
                        borderRadius: '10px',
                        height: '45px',
                        color: 'black',
                        backgroundColor: 'transparent',
                      }}
                      type='email'
                      className='form-control'
                      id='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className='mb-3'>
                  <label
                    htmlFor='attending'
                    style={{
                      fontSize: '14px',
                    }}
                    className='form-label'
                  >
                    Will you be attending?
                  </label>
                  <textarea
                    rows='4'
                    type='number'
                    style={{
                      borderRadius: '10px',
                      color: 'black',
                      backgroundColor: 'transparent',
                    }}
                    className='form-control'
                    id='attending'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <button type='submit' className='guest-form-button'>
                  {isLoading ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectGuestAttendance;
