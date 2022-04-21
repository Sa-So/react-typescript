import 'jest-localstorage-mock'; 
// can move to setup instead.

import { shallow } from 'enzyme';

import { WELCOME_SUFFIX_KEY, PATIENT_GIVEN_NAMES_KEY, PRACTICIONER_KEY } from '@constants';
 
import { StartCheckout } from './start-checkout';
import styles from './start-checkout.scss';


// import { PickedAppointmentModal } from '@components/picked-appointment-modal'

// import { showFirstPrefixItem } from '@utils';

// jest.mock('react-redux', () => 
//   ({ useSelector: jest.fn() }));

// const mockUsePatientViewModal = jest.fn();
// const mockLogoutAzureADRedirect = jest.fn();
// jest.mock('@hooks', () => 
//   ({
//     useAzureADAuth: () =>
//       ({ logoutAzureADRedirect: mockLogoutAzureADRedirect }),
//     usePatientViewModal: () => 
//       ({
//         onHidePatientViewModal: mockUsePatientViewModal,
//         isShowPatientViewModal: true, 
//       }), 
//   }));

jest.mock('react-redux', () => 
  ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
  }));
  
jest.mock('react-router-dom', () => 
  ({
    ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
    useParams: () => 
      ({
        appointmentId: 'appointment-id',
        patientId: 'patient-id',
        practitionerId: 'practitioner-id',
      }),
  }));

const patientName = 'Akshay Tomar';

describe('Start-Checkout', () => { 
  beforeEach(()=>{
    // const hello = shallow(<PickedAppointmentModal />);
    sessionStorage.setItem(
      WELCOME_SUFFIX_KEY, 
      'duly'
    );
    // isNewPatient ? 'to Duly' : 'Back');
    sessionStorage.setItem(
      PATIENT_GIVEN_NAMES_KEY, 
      patientName
    );
    // givenNames.join(' '));
    sessionStorage.setItem(
      PRACTICIONER_KEY, 
      'key'
    );
    // `${showFirstPrefixItem(prefixes)}${practitionerFamilyName}`);
  });
  // afterEach(() => {
  //     // to fully reset the state between tests, clear the storage
  //     localStorage.clear();
  //     // and reset all mocks
  //     jest.clearAllMocks();
  //     // clearAllMocks will impact your other mocks too, 
  //   so you can optionally reset individual mocks instead:
  //     localStorage.setItem.mockClear();
  //   });
  it('should render patient name correctly', ()=>{
    const checkout_wrapper = shallow(<StartCheckout />);
    console.log(checkout_wrapper.debug())
    const patient_span = checkout_wrapper.find(`span.${styles.cvCheckoutWelcomeMsgName}`);
    // console.log(texty.debug())
    const patient_span_text = patient_span.text();
    expect(patient_span_text).toBe(`${patientName},`);
  }); 
});

// describe('Start Checckout',()=>{
//     it('testing test',()=>{
//         // return true;
//         expect(true).toBe(true);
//     })
// })
