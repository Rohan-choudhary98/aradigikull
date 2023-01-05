import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,Box
  } from '@chakra-ui/react'
  

  function Modalcom(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen}>Open</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent style={{backgroundColor:"grey", color:"white"}}>
            <ModalCloseButton />
            <ModalBody>
              <Box><h1><span>ID:{props.id}</span></h1>
              <h2><span>ORG_ID:{props.org}</span></h2>
              <h3><span>CLIENT NAME:{props.name}</span></h3>
              <h1>COMMENT:</h1><textarea style={{border:"2px solid red", height:"80px",width:"100%"}}></textarea>
          
              </Box>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Update
              </Button>
              <Button variant='ghost'>pending</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export  {Modalcom}