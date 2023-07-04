import { Box, Container, Heading, Image, Stack,Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/im1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  padding: '4',
  size: '4xl',
};

const Homes = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p={16}>
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          w={'fit-content'}
          borderBottom={'2px solid'}
          margin={'auto'}
        >
          Services
        </Heading>

        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

          <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]}textAlign={"center"}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque qui
            obcaecati sit repudiandae dolor placeat quisquam, dolorum velit
            accusamus vitae modi, veniam aliquam sunt? Molestiae iste tempore in
            dolor voluptatem sequi repellendus ad nemo rerum, aut error impedit
            dolorem officiis fugit beatae tempora a inventore, incidunt,
            nesciunt ullam. Aspernatur nesciunt ipsa ratione, ad error voluptas
            sit neque quae, beatae perferendis accusamus dignissimos eaque optio
            fugit id quo. Qui, tempore assumenda ad, earum temporibus saepe
            consequatur soluta nulla iure nostrum asperiores officia quis
            doloribus sit ullam eum praesentium obcaecati dignissimos,
            architecto deleniti libero aperiam dolorum dolores! Asperiores quis
            eaque sint magni esse voluptates incidunt deleniti facere? Qui,
            fuga. Ducimus magni amet nobis excepturi vel tempora repudiandae,
            facilis mollitia ex voluptas possimus adipisci unde eaque error
            iste, eius itaque in porro pariatur a! Tempora mollitia illo quas ad
            temporibus aperiam nostrum eos maiores quod vero sapiente, odio,
            rerum ipsa, sed debitis eum consectetur aut voluptatibus. Quos
            itaque repellat, soluta tempore nihil at aut minus. Voluptas nobis
            quibusdam vitae recusandae culpa distinctio sed, modi dignissimos
            aliquid natus illo facere expedita similique sit deleniti qui. Nam
            voluptas delectus quod ullam suscipit iusto reiciendis consequuntur
            iure! Unde ipsum nostrum totam quaerat corporis praesentium fuga
            quam sit, beatae soluta, dolorum suscipit eligendi in inventore
            labore impedit? Eveniet fuga quidem molestias labore deserunt odio
            quaerat quia tempora. Nihil odio eum inventore similique cum fuga
            ullam aliquam sapiente maiores molestiae necessitatibus sint soluta
            quis deleniti voluptatem eos velit hic facere, deserunt sit vitae
            beatae nemo! Libero, maiores saepe. Libero aliquid facilis est ipsam
            saepe id culpa, quisquam minus beatae excepturi. Laborum sint eos
            ipsam sunt pariatur mollitia et asperiores, vel ullam dolorem animi,
            minus quos placeat facere provident, eligendi sapiente labore totam
            numquam tenetur consequuntur ratione. Distinctio porro optio iusto
            explicabo alias praesentium architecto vero aspernatur tempora
            excepturi.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
      showIndicators={false}
    >
      <Box w="full" h="100vh">
        <Image src={img1} h="full" w="full" objectFit="cover" />
        <Heading bgColor="blackAlpha.600" color="white" {...headingOptions}>
          Watch The Future
        </Heading>
      </Box>
      <Box w="full" h="100vh">
        <Image src={img2} h="full" w="full" objectFit="cover" />
        <Heading bgColor="whiteAlpha.900" color="black" {...headingOptions}>
          Future is Gaming
        </Heading>
      </Box>
      <Box w="full" h="100vh">
        <Image src={img3} h="full" w="full" objectFit="cover" />
        <Heading bgColor="whiteAlpha.600" color="black" {...headingOptions}>
          Gaming on Console
        </Heading>
      </Box>
      <Box w="full" h="100vh">
        <Image src={img4} h="full" w="full" objectFit="cover" />
        <Heading bgColor="whiteAlpha.600" color="black" {...headingOptions}>
          Night life is cool
        </Heading>
      </Box>
    </Carousel>
  );
};

export default Homes;
