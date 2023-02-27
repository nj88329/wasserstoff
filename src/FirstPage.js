import React from 'react';
import { Input , Stack , Button, ButtonGroup  } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const FirstPage = () => {

  return (

 <Stack spacing={3} style={{display:'flex'}}>
    
     <div style = {{ color: 'blue', lineHeight : 10, padding: 16 , display:'flex'}}>
    
    <Input placeholder='Wasserstoff'  /> 
       <SearchIcon style={{margin:'10px'}}/>
                
                <Stack direction='row' spacing={2} align='center'>
                        <Button colorScheme='teal' variant='ghost'>
                          Statistics
                        </Button>
                        <Button colorScheme='teal' variant='ghost'>
                           Overview
                        </Button>
                        <Button colorScheme='teal' variant='ghost'>
                           Dashboard
                        </Button>
                        <Button colorScheme='teal' variant='link'>
                            Analytics 
                        </Button>
                </Stack>
    </div>
    </Stack>
  )
}

export default FirstPage