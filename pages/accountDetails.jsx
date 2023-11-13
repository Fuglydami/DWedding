import React from 'react';

const AccountDetails = ({ showAccountDetails, setShowAccountDetails }) => {
  return (
    <div
      className='modal modalBackground'
      tabIndex='-1'
      role='dialog'
      style={{
        display: showAccountDetails ? 'block' : 'none',
        color: 'black',
      }}
    >
      <div className='modal-dialog' role='document'>
        <div
          style={{
            background: 'black',
            borderRadius: '10px',
          }}
          className='modal-content  neonText'
        >
          <div
            type='button'
            className='close guest-modal'
            onClick={() => setShowAccountDetails(false)}
          >
            <span
              style={{
                color: 'white',
              }}
              aria-hidden='true'
            >
              &#10005;
            </span>
          </div>

          <div className='modal-body'>
            <div
              style={{
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                padding: '0 20px',
              }}
            >
              <div
                style={{
                  textAlign: 'center',
                  marginBottom: '10px',
                  fontWeight: 700,
                  fontSize: 24,
                }}
              >
                Cash Gift
              </div>

              <span
                style={{
                  fontSize: 20,
                  color: 'white',
                }}
              >
                <span
                  style={{
                    color: '#f0f0f0',
                    fontSize: '16px',
                    marginRight: '10px',
                    marginBottom: '10px',
                  }}
                >
                  Bank:
                </span>{' '}
                Wema Bank
              </span>
              <span
                style={{
                  fontSize: 20,
                  color: 'white',
                }}
              >
                <span
                  style={{
                    color: '#f0f0f0',
                    fontSize: '16px',
                    marginRight: '10px',
                    marginBottom: '10px',
                  }}
                >
                  Name:
                </span>{' '}
                Adewale Akinlagun 
              </span>
              <span
                style={{
                  fontSize: 20,
                  color: 'white',
                }}
              >
                <span
                  style={{
                    color: '#f0f0f0',
                    fontSize: '16px',
                    marginRight: '10px',
                    marginBottom: '10px',
                  }}
                >
                  Account Number:
                </span>{' '}
                0233584142
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
