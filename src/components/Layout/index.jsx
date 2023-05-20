import React from 'react'
import Sidebars from '../sidebar'
import Modal from 'react-modal'

const LayoutWrapper = ({ title, headerClass, model, setOpen, children,header,user }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false)
  function closeModal() {
    setIsOpen(setOpen)
  }
  const customStyles = {
    content: {
      position: 'fixed',
      margin: 'auto',
      width: '500px',
      height: '100%',
      left: 'auto',
    },
  }
  return (
    <>
      <Sidebars title={title} headerClass={headerClass} children={children} header={header} user={user}/>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>{model}</div>
      </Modal>
    </>
  )
}

export default LayoutWrapper
