import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

interface Props {
  codeError: number;
  error: string;
  onClose: () => void;
}
export const ErrorModal: React.FC<Props> = ({ codeError, error, onClose }) => {
  return (
    <Modal show={!!error} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{codeError}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{error}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ErrorModal;
