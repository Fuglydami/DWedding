import React, { useState } from 'react';
import Swal from 'sweetalert2';

const CollectGuestAttendance = ({ setShowModal, showModal }) => {
  const [name, setName] = useState('');
  const [attending, setAttending] = useState('');
  const [email, setEmail] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const scriptUrl =
    'https://script.google.com/macros/s/AKfycbxapNtm8Jv2QCNYt4CqGJ_mVpEEKERO9fXU8HrTexuDWthmxiQF9NFck6rIjPZ-LgdRHg/exec';

  function httpStatus(statusCode) {
    if (statusCode >= 200 && statusCode <= 299) {
      Swal.fire('Success!', 'We appreciate your response!', 'success');
      setShowModal(false);
      setAttending('');
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

  function buildCorsFreeUrl(target) {
    return `https://proxy.cors.sh/${target}`;
  }
  const corsFreeUrl = buildCorsFreeUrl(scriptUrl);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !attending) {
      Swal.fire('', 'All fields are required', 'error');
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch(corsFreeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, attending }),
      });

      console.log(response, 'reponse');
      const data = await response.text();
      httpStatus(response.status);

      // Response from Google Script
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      Swal.fire('Error!', 'Something went wrong, please try again!', 'error');
      console.error('Error:', error);
    }
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
                Inform Us of your availability
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
                      backgroundColor: 'transparent',
                    }}
                    className='form-control'
                    id='attending'
                    value={attending}
                    onChange={(e) => setAttending(e.target.value)}
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
