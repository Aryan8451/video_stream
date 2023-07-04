import { Heading, Stack, VStack, Text, Button } from '@chakra-ui/react';
import React, { useState } from 'react';



const Videos = () => {
const videosArr =[
    'https://player.vimeo.com/progressive_redirect/playback/689949818/rendition/540p?loc=external&oauth2_token_id=1027659655&signature=cf602155bf49e4e74db6f2ec9d4ecf067fbab44c4295a8950d58ecdb88910882',
    'https://player.vimeo.com/progressive_redirect/playback/697718184/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=26d69c3df603d083fedd663acaab4d35a33444d11033a626864cf1e578e136cf',
    'https://player.vimeo.com/external/510850877.hd.mp4?s=d5e9ed9ea40ba755e28512cce6c1ad00d92506f7&profile_id=174',
    'https://player.vimeo.com/external/577442929.hd.mp4?s=95231c8a7fe2066ffb640204591b01a6c326b97c&profile_id=174',
    'https://player.vimeo.com/progressive_redirect/playback/689925384/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=5a819f11298d53cc1ed85837342f47ea61c8f95b9aeeb0c38edab72a80e0db78',
    'https://player.vimeo.com/progressive_redirect/playback/688648666/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=070a16d4b244bc11c2bd17b03e04e50460be3d2726ed554959a49fc05dbd0281',
    'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',
 


]

const [videoSrc, SetVideoSrc] = useState(videosArr[0])

  return (
    
      <Stack direction={['column','row']} h={"100vh"}>
        <VStack w={'full'}>
          <video
          controls
            controlsList="nodownload"
            src={videoSrc}
            style={{ width: '100%', padding:"1rem" }}
          ></video>
           <VStack alignItems={"flex-start"} w={'full'} p={8} overflowY={"auto"}>
          <Heading>Samle video 1</Heading>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
            laboriosam minima aliquam reiciendis voluptatum saepe suscipit
            numquam, nisi architecto odit vero a dolorum dolorem sunt voluptatem
            ullam facere voluptas vitae ad vel harum. Modi non corrupti unde
            optio et voluptatibus dolorem nostrum sapiente excepturi facere. Qui
            numquam perspiciatis labore commodi, tenetur alias iste voluptate
            porro dolorum aliquid excepturi suscipit sint quaerat aperiam
            dignissimos repudiandae nemo asperiores, eveniet eius sit. Qui vero
            deserunt iusto numquam voluptas placeat temporibus ab magni corrupti
            consequuntur libero veniam incidunt, in error. Magni, nesciunt esse
            repellat nulla dolor rem eligendi assumenda non veniam totam sunt
            reprehenderit modi quibusdam. Labore, earum. Pariatur est esse
            excepturi et eaque, assumenda dolorem! Sunt praesentium aliquid iure
            architecto quia! Non eligendi dolores voluptas quidem commodi
            aliquid exercitationem repellat magni deleniti quibusdam officiis
            quod suscipit, consequatur, ea hic beatae alias soluta sit rem ex
            ipsum quos iste adipisci. Rerum minus at nulla eius. Quos, ullam
            quo? Maxime hic, in, distinctio doloribus delectus velit dolorem
            blanditiis quidem deserunt omnis atque placeat tempora est
            architecto illo. Excepturi ad perferendis laudantium a voluptatem,
            maxime ut accusantium natus sit? Ipsam voluptatem earum ullam ex
            maxime nobis illo cum quas totam doloribus expedita saepe, amet odio
            architecto.
          </Text>
        </VStack >

        </VStack>
        <VStack w={['full',"xl"]} alignItems={'stretch'} p={"8"} spacing={"8"} overflowY={"auto"}>

       {

        videosArr.map((items,index)=>(
        <Button variant={'ghost'} colorScheme='purple' onClick={()=>SetVideoSrc(items)}>
Lecture {index+1}
        </Button>))
       }
        
     
        </VStack>
       
      </Stack>
    
  );
};

export default Videos;
