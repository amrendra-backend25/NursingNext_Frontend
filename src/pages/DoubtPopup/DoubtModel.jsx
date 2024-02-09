import Modal from 'react-bootstrap/Modal';
import Doubt from './Doubt';
const DoubtModal = (props) => {
  return (
    <>
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton style={{ width: '990px' }}></Modal.Header>
        <Doubt />
      </Modal>
    </>
  );
};

export default DoubtModal;
