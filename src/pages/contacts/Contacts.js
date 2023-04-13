import './contacts.css'

export default function Contacts() {
  return (
    <div className='container contacts'>
      <div className='row'>
        <div className='col-md-4'>
          <div className='contact-items '>
            <h1><i class="bi bi-telephone-fill text-success"></i></h1>
            <h5>+234 0803 5826 738</h5>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='contact-items '>
            <h1><i class="bi bi-envelope-fill text-success"></i></h1>
            <h5>ogagro@gmail.com</h5>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='contact-items '>
            <h1><i class="bi bi-geo-alt-fill text-success"></i></h1>
            <h5>University of Nigeria Nsukka</h5>
          </div>
        </div>
      </div>      
    </div>
  )
}
